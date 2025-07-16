import React, { useState } from 'react';

export default function Post_reviews() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      console.log('Please fill both fields'); // when nothing entered
      return;
    }

    fetch('http://localhost:8000/api/submit', { // else this happens when user entered smth meaningful
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // data sent to db
      body: JSON.stringify({ name, comment })
    });

    console.log('Submitted:', { name, comment });
    setName('');
    setComment('');
  }
};


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0'
    }}>
      <form style={{
        backgroundColor: '#1e1e1e',
        padding: '20px',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '600px',
        fontFamily: 'monospace',
        color: '#ffffff'
      }}>
        <div style={{
          marginBottom: '10px',
          fontSize: '14px',
          color: 'white',
          fontWeight: 'bold'
        }}>
          Enter your name and comment — press <span style={{ color: '#ff6ac1' }}>Enter</span> to submit
        </div>

        <input
          type="text"
          placeholder="> your name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{
            backgroundColor: '#121212',
            color: '#ffffff',
            border: 'none',
            padding: '10px',
            borderRadius: '6px',
            width: '100%',
            marginBottom: '12px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}
        />

        <input
          type="text"
          placeholder="> your comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            backgroundColor: '#121212',
            color: '#ffffff',
            border: 'none',
            padding: '10px',
            borderRadius: '6px',
            width: '100%',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}
        />
      </form>
    </div>
  );
}


const dummyReviews = [
  { id: 1, name: 'Alice', comment: 'Super slick website!' },
  { id: 2, name: 'Bob', comment: 'Loved the terminal vibe.' },
  { id: 3, name: 'Charlie', comment: 'Very creative design 👏' }
];

export function ReviewsTable() {
  return (
    <div style={{
      marginTop: '40px',
      display: 'flex',
      justifyContent: 'center',
      padding: '0 20px'
    }}>
      <table style={{
        width: '100%',
        maxWidth: '700px',
        borderCollapse: 'collapse',
        fontFamily: 'monospace',
        backgroundColor: '#1e1e1e',
        color: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        <thead>
          <tr style={{
            backgroundColor: '#121212',
            color: 'white',
            textAlign: 'left',
            fontSize: '16px'
          }}>
            <th style={{ padding: '12px 16px' }}>Name</th>
            <th style={{ padding: '12px 16px' }}>Comment</th>
          </tr>
        </thead>
        <tbody>
          {dummyReviews.map((review) => (
            <tr key={review.id} style={{ borderTop: '1px solid #333' }}>
              <td style={{ padding: '12px 16px', color: '#ffb24c' }}>{review.name}</td>
              <td style={{ padding: '12px 16px' }}>{review.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
