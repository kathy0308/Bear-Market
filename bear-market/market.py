import flask
import numpy as np
import datetime

from flask import *
from app import app
from db import *


@app.route("/")
def index():
    """
    Return all posts in reverse chronological order
    if they are not expired
    """
    posts = Post.query.filter(Post.expired == False).all()
    #posts.sort(key=lambda x: x.date_published, reverse=True)
    return render_template('index.html', title='Home', posts=posts)


@app.route("/viewpost", methods=["GET"])
def viewpost():
    """
    View the post and also view the user details of the seller
    """
    postid = int(request.args.get("pid"))
    post = Post.query.filter(Post.pid == postid).first()
    if not post:
        raise Exception("Post with post ID {} does not exist!".format(postid))
    uid = post.uid
    author = User.query.filter(User.uid == uid).first()
    mean_rating_author = rating(uid)
    return render_template("viewpost.html", post=post, author=author, mean_rating_author=mean_rating_author)


@app.route("/viewboard", methods=["GET"])
def viewboard():
    """
    View all posts from the board in reverse chronological order
    if they are not expired
    """
    bid = int(requests.args.get("bid"))
    posts = Post.query.filter(Post.expired == False and Post.bid == bid).all()
    posts.sort(lambda x: x.date_published, reverse=True)
    return posts


@app.route("/viewreview", methods=["GET"])
def viewreview():
    rid = int(requests.args.get("review"))
    review = Review.query.filter(Review.rid == rid).first()
    if not review:
        return Exception("That review does not exist!")
    return render_template("viewreview.html", review=review)


def rating(uid):
    """ Calculate average rating of a user """
    ratings = Review.query.filter(Review.uid == uid).all()
    return np.mean([r.rating for r in ratings])


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        session['email'] = request.form['email']
        return redirect(url_for('index'))
    return '''
        <form method="post">
            <p><input type=text name=username>
            <p><input type=text name=email>
            <p><input type=submit value=Login>
        </form>
    '''


@app.route('/logout')
def logout():
    session.pop('username', None)
    session.pop('email', None)
    return redirect(url_for('index'))


@app.route("/writepost", methods=["GET", "POST"])
def writepost():
    """
    Write post given parameters
    """
    if request.method == "POST":
        username = session['username']
        title = request.form['title']
        text = request.form['text']
        price = request.form['price']
        location = request.form['location']
        post = Post(title=title, text=text, date_published=datetime.datetime.now(
        ), price=price, location=location, expired=False)
        db.session.add(post)
        db.session.commit()
        return redirect(url_for('index'))
    return '''
        <form method="post">
            <p><input type=text name=title placeholder=Title>
            <p><input type=int name=price placeholder=Price in USD>
            <p><input type=text name=text placeholder=Tell us about your product>
            <p><input type=text name=location placeholder=Where are you selling the product?>
            <p><input type=submit value=writepost placeholder=Write Post!>
        </form>
    '''


if __name__ == "__main__":
    app.run(debug=True)
