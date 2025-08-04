from datetime import datetime
from db.db import db

class Diary(db.Model):
    __tablename__ = 'diary'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    date = db.Column(db.Date, nullable=False)
    diary = db.Column(db.Text, nullable=False)
    marks = db.Column(db.String(200), default=None)
    create_on = db.Column(db.DateTime, default=datetime.utcnow)
    update_on = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "date": self.date.isoformat(),
            "text": self.diary,
            "marks": self.marks,
            "create_on": self.create_on.isoformat(),
            "update_on": self.update_on.isoformat()
        }
