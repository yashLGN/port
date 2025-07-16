import os
from flask import Flask,request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

uri = os.environ.get("DATABASE_URL")

# Only replace if the URI starts with 'postgres://'
if uri and uri.startswith("postgres://"):
    uri = uri.replace("postgres://", "postgresql://", 1)

app.config['SQLALCHEMY_DATABASE_URI'] = uri
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # MAKING FORMAT FOR DATABASE in which it will save things
    name = db.Column(db.String(30), nullable=False)
    comment = db.Column(db.String(80), nullable=False)

with app.app_context(): # creates db 
    db.create_all()

@app.route('/api/submit', methods=['POST'])
def submit_comment():
    data = request.get_json()
    name = data.get('name', '').strip()
    comment = data.get('comment', '').strip()

    if not name or not comment:
        return jsonify({'error': 'Missing name or comment'}), 400

    new_comment = comments(name=name, comment=comment)
    db.session.add(new_comment)
    db.session.commit()

    return jsonify({'message': 'Comment submitted successfully!'}), 200

@app.route('/api/comments', methods=['GET'])
def get_comments():
    all_comments = comments.query.all()
    data = [{'id': c.id, 'name': c.name, 'comment': c.comment} for c in all_comments] # keeps getting data from db
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))