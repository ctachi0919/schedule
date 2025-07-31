from datetime import datetime
from db.db import db

class Categories(db.Model):
    __tablename__ = 'categories'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    create_on = db.Column(db.DateTime, default=datetime.utcnow)
    update_on = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "create_on": self.create_on.isoformat(),
            "update_on": self.update_on.isoformat()
        }
    
class Todo(db.Model):
    __tablename__ = 'todo'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    title = db.Column(db.String(100), nullable=False)
    create_on = db.Column(db.DateTime, default=datetime.utcnow)
    update_on = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    tbCategory = db.relationship('Categories', backref='todo', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "category_id": self.category_id,
            "title": self.title,
            "create_on": self.create_on.isoformat(),
            "update_on": self.update_on.isoformat()
        }
    
class TodoDetail(db.Model):
    __tablename__ = 'todo_detail'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    parent_id = db.Column(db.Integer, db.ForeignKey('todo.id'), nullable=False)
    title = db.Column(db.String(255), default=None)
    todo = db.Column(db.Text, nullable=False)
    is_checked = db.Column(db.Boolean, nullable=False, default=False)
    create_on = db.Column(db.DateTime, default=datetime.utcnow)
    update_on = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    tbTodo = db.relationship('Todo', backref='todo_detail', lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "parent_id": self.parent_id,
            "title": self.title,
            "todo": self.todo,
            "is_checked": self.is_checked,
            "create_on": self.create_on.isoformat(),
            "update_on": self.update_on.isoformat()
        }
