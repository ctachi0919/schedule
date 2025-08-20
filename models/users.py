from datetime import datetime
from db.db import db

class Users(db.Model):
    __tablename__ = 'Users'

    username = db.Column(db.Text, primary_key=True)
    password = db.Column(db.Text, nullable=False)
    token = db.Column(db.Text, nullable=True)
    create_on = db.Column(db.DateTime, default=datetime.utcnow)
    update_on = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "username": self.username,
            "password": self.password,
            "token": self.token,
            "create_on": self.create_on.isoformat(),
            "update_on": self.update_on.isoformat()
        }
