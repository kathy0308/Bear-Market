import flask
from flask_sqlalchemy import SQLAlchemy

from app import app

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/bear_market.db'
db = SQLAlchemy(app)

class User(db.Model):
    uid = db.Column(db.Integer, primary_key=True) # this has to exist
    username = db.Column(db.String(64), index=True, unique=True)
    nickname = db.Column(db.String(128), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    phone = db.Column(db.Text, unique=True)
    password_hash = db.Column(db.String(128))

    def __repr__(self):
        return '<User {}>'.format(self.username)


class Post(db.Model):
    pid = db.Column(db.Integer, primary_key=True) # Post ID
    uid = db.Column(db.Integer, db.ForeignKey('user.uid'))
    bid = db.Column(db.Integer, db.ForeignKey('board.bid'))
    title = db.Column(db.Text)
    text = db.Column(db.Text)
    price = db.Column(db.Integer)
    location = db.Column(db.Text) # TODO look up if we can define a location type
    date_published = db.Column(db.DateTime)
    expired = db.Column(db.Boolean)

    def __repr__(self):
        return '<Post {}>'.format(self.pid)


class Board(db.Model):
    """ Defines the categories and type for posts """
    bid = db.Column(db.Integer, primary_key=True) # Board ID
    title = db.Column(db.String(64), unique=True)
    description = db.Column(db.String(120))


class Review(db.Model):
    rid = db.Column(db.Integer, primary_key=True) # Review ID
    uid = db.Column(db.Integer, db.ForeignKey('user.uid'))
    date_published = db.Column(db.DateTime)
    title = db.Column(db.String(128))
    text = db.Column(db.Text)
    rating = db.Column(db.Integer) # we use this later to compute avg or temperature
