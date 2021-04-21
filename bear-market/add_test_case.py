
# Wishilist - db 추가
# Mypage - db / route 추가

from db import User, Post, Review, Board, db

db.create_all()

# Add Users
users = [
    User(uid=1, username="jisu", nickname="Jisu Han", email="gkswltn97@berkeley.edu", phone="01073565076"),
    User(uid=2, username="brian", nickname = "Brian Lee", email="cluesbjberkeley.edu", phone="01012341234"),
    User(uid=3, username="chris", nickname="Chris Lee", email="jylee@berkeley.edu", phone="01011112222"),
    User(uid=4, username="minju", nickname="Minju Kang", email="mjkang@berkeley.edu", phone="01033334444"),
    User(uid=5, username="hyeongseok", nickname="Hyeongseok Yoon", email="hsyoon@berkeley.edu", phone="01055556666")
]

for u in users:
    if User.query.filter(User.uid == u.uid).first() == None\
    and User.query.filter(User.nickname == u.nickname).first() == None\
    and User.query.filter(User.username == u.username).first() == None\
    and User.query.filter(User.email == u.email).first() == None\
    and User.query.filter(User.phone == u.phone).first() == None:
        db.session.add(u)
    else:
        print("[ERROR] User {} already exists".format(u.username))

# Add Boards
#TODO: sub-board add 생각해보기
housing = Board(bid=1, title="Housing", description="Housing board")
moving_sale = Board(bid=2, title="Moving Sale", description="Moving sale board")
db.session.add(housing)
db.session.add(moving_sale)

# Add Posts
posts = [
    Post(pid=60, uid=1, bid=1, title="서브리스 구해요!", text="학교에서 5분거리, private room 서브리스 구합니다", price=1300, location="Berkeley", expired=False),
    Post(pid=70, uid=2, bid=2, title="무빙세일 합니다!", text="IKEA 침대 팔아요", price=100, location="Berkeley", expired=False)
]

for p in posts:
    if Post.query.filter(Post.pid == p.pid).first() == None:
       db.session.add(p)
    else:
        print("[ERROR] Post {} already exists".format(p.title))

# Add Reviews
# TODO: rating integer 말고 double 아닌지 체크
reviews = [
    Review(rid=1, uid=1, title="Trustful seller!", text="쿨거래 감사요!", rating=5),
    Review(rid=2, uid=2, title="사기꾼입니다", text="침대 나사 다 빠져있던데요", rating=1),
    Review(rid=3, uid=3, title="착한 셀러분이십니다!", text="네고해주셔서 감사해요", rating=4)
]

for r in reviews:
    if Review.query.filter(Review.rid == r.rid).first() == None:
       db.session.add(r)
    else:
        print("[ERROR] Review {} already exists".format(r.title))

db.session.commit()
