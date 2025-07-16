from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///reviews.db'  # indentity of db / configure
db = SQLAlchemy(app) # connecting flask and db
CORS(app)

class comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # MAKING FORMAT FOR DATABASE in which it will save things
    name = db.Column(db.String(200), nullable=False)
    comment = db.Column(db.String(500), nullable=False)

with app.app_context(): # creates db 
    db.create_all()

@app.route('/api/submit', methods=['POST'])
def submit_comment():
    data = request.get_json()
    name = data.get('name')
    comment = data.get('comment')

    if not name or not comment:
        return {'message': 'Missing name or comment'}, 400

    new_comment = comments(name=name, comment=comment)
    db.session.add(new_comment)
    db.session.commit()

    return {'message': 'Comment added successfully'}, 200

if __name__ == '__main__':
    app.run(debug=True, port=8000)