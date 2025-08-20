from flask import Blueprint, jsonify, request, current_app
import jwt
from models.users import Users
from db.db import db
import bcrypt
from utils.constant import STATUS_OK, STATUS_BAD_REQUEST, STATUS_UNAUTHORIZED, STATUS_CONFLICT, STATUS_SERVER_ERROR
from utils.message import START_REGISTER_USER, PARAMETER_NOT_EXIST, USERNAME_ALREADY_EXIST, REGISTER_USER_SUCCESS, START_CHECK_AUTH, USER_NOT_AUTHORIZED, USER_AUTHORIZED, LOGOUT_SUCCESS, START_GET_USER, LOGIN_SUCCESS, USERNAME_PASSWORD_NOT_CORRECT, UNEXPECTED_ERROR

users_bp = Blueprint('users', __name__)

# Login and Logout type
logout = 0
login = 1

# Create new user
@users_bp.route('/signup', methods = ['POST'])
def register_user():
  print("INFO:",START_REGISTER_USER)

  # Get parameters
  data = request.get_json()
  username = data['username']
  password = data['password']

  # Check parameters
  if not username or not password:
    print("ERROR:",PARAMETER_NOT_EXIST)
    return jsonify({}) ,STATUS_BAD_REQUEST
  
  # Check username
  result_user = Users.query.filter_by(username=username).first()
  if result_user:
    print("ERROR:", USERNAME_ALREADY_EXIST)
    return jsonify({}), STATUS_CONFLICT
  
  # Hased password
  hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())

  # Generate token
  payload = {
          "username": username,
        }
  token = jwt.encode(payload, current_app.config['SECRET_KEY'], algorithm="HS256")

  # Add data
  users = Users(username=username, password=hashed_password, token=token)
  db.session.add(users)
  try:
      # Execute
      db.session.commit()
      print("INFO:",REGISTER_USER_SUCCESS)
      return jsonify({}), STATUS_OK
  except Exception as e:
    db.session.rollback()
    print("ERROR:", UNEXPECTED_ERROR, e)
    return jsonify({}), STATUS_SERVER_ERROR

# Check and delete authorization
@users_bp.route('/auth', methods = ["GET"])
def auth():
    print("INFO:",START_CHECK_AUTH)

    # Check token in local strage
    auth_header = request.headers.get('Authorization')
    if not auth_header:
      print("INFO:", USER_NOT_AUTHORIZED)
      return jsonify({}), STATUS_UNAUTHORIZED
    
    # Check parameters
    is_login = int(request.args.get('isLogin'))
    if is_login == None:
      print("ERROR:",PARAMETER_NOT_EXIST)
      return jsonify({}) ,STATUS_BAD_REQUEST

    try:
        # Get token from database
        token = auth_header.split()[1]
        result_user = Users.query.filter_by(token=token).first()
        if not result_user:
           print("INFO:", USER_NOT_AUTHORIZED)
           return jsonify(), STATUS_UNAUTHORIZED
        
        username = result_user.username
        if is_login == login:
          # Return success if the type is login
          print("INFO:",USER_AUTHORIZED)
          return jsonify({'username': username}), STATUS_OK

        # Delete token from database
        result_user.token = None
        db.session.commit()

        print("INFO:",LOGOUT_SUCCESS)
        return jsonify({}), STATUS_OK
    except Exception as e:
        print("ERROR:", UNEXPECTED_ERROR, e)
        return jsonify({}), STATUS_SERVER_ERROR

@users_bp.route('/login', methods=['POST'])
def get_user():
    print("INFO:",START_GET_USER)

    # Get parameters
    data = request.get_json()
    username = data['username']
    password = data['password']
    
    # Check parameters
    if not username or not password:
       print("ERROR:", PARAMETER_NOT_EXIST)
       return jsonify({}) ,STATUS_BAD_REQUEST
    
    try:
      # Get user from database
      result_user = Users.query.filter_by(username=username).first()
      if not result_user:
        print("ERROR:", USERNAME_PASSWORD_NOT_CORRECT)
        return jsonify({}), STATUS_UNAUTHORIZED
      
      # Check password
      hashed_password = result_user.password
      if bcrypt.checkpw(password.encode(), hashed_password.encode()):
        # Create token if user name and password are correct
        payload = {
          "username": username,
        }
        token = jwt.encode(payload, current_app.config['SECRET_KEY'], algorithm="HS256")
        result_user.token = token
        # Update database
        db.session.commit()
        print("INFO:",LOGIN_SUCCESS)
        return jsonify({'token': token, }), STATUS_OK
      else:
        print("ERROR:", USERNAME_PASSWORD_NOT_CORRECT)
        return jsonify({}), STATUS_UNAUTHORIZED

    except Exception as e:
        db.session.rollback()
        print("ERROR:", UNEXPECTED_ERROR, e)
        return jsonify({}), STATUS_SERVER_ERROR