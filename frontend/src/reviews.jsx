import React, { useEffect, useState } from 'react';

export default function Post_reviews({ onSubmitSuccess }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      console.log('Please fill both fields'); // when nothing entered
      return;
    }

fetch('https://port-bu0p.onrender.com/api/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, comment })
})
.then(res => res.json())
.then(data => {
  console.log('Submitted:', data);
  setName('');
  setComment('');
  onSubmitSuccess(); // refreshes the review table!
})
.catch(err => console.error('Error:', err));
  }
}

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0'
    }}>
      <form style={{
        backgroundColor: 'transparent', //#1e1e1e if looks bad change this
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
          Enter your name and comment — press <span style={{ color: '#ff6ac1' }}>Enter&nbsp;</span>
           to submit. <br/>
        </div>

        <input
          type="text"
          placeholder="> your name"
          value={name}
          onChange={e => setName(e.target.value)}
          maxLength={30}
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
          maxLength={80}
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

export function ReviewsTable({ refreshTrigger }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://port-bu0p.onrender.com/api/comments')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Error fetching reviews:', err));
  }, [refreshTrigger]);

  return (
 <div style={{
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'center',
  padding: '0 20px'
}}>
  <div style={{ width: '100%', maxWidth: '700px' }}>
    <table style={{
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'monospace',
      backgroundColor: 'transparent', //#1e1e1e
      color: '#ffffff',
      borderRadius: '8px',
      overflow: 'hidden',
      tableLayout: 'fixed'
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
      <tr className='customtext'>
        Comments may take <br/>20-30 seconds to load.<br/> Refresh after it.
      </tr>
        {reviews.map((review) => (
          <tr key={review.id} style={{ borderTop: '1px solid #333' }}>
            <td style={{
              padding: '12px 16px',
              color: '#ffb24c',
              wordBreak: 'break-word',
              verticalAlign: 'top',
              maxWidth: '120px'
            }}>
              {review.name} said
            </td>
            <td style={{
              padding: '12px 16px',
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap',
              verticalAlign: 'top'
            }}>
              {review.comment}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  );
}
