import './App.css'
import Terminal from './terminal.jsx'
import Github_buttons from './github_buttons.jsx'
import Heading from './heading.jsx';
import { Heading2 } from './heading.jsx';
import { Heading3 } from './heading.jsx';
import { Heading4 } from './heading.jsx';
import Paragraph from './paragraph.jsx';
import { TerminalInfo } from './paragraph.jsx';
import Post_reviews from './reviews.jsx';
import { ReviewsTable } from './reviews.jsx';
import React, { useState } from 'react';

function App() {

    const [refreshFlag, setRefreshFlag] = useState(false);

    const refreshReviews = () => setRefreshFlag(prev => !prev);

  return (
    <>
    <div className="terminal-div">
      <Terminal />
    </div>
    <div className="github-buttons">
      <Github_buttons/>
    </div>
    <div className="headingone"> 
      <Heading/>
    </div>
    <div className="paraone">
      <Paragraph/>
      <div className="fade-wrapper"></div>
    </div>
      <div className="headingone"> 
      <Heading2/>
    </div>
    <div className='headingone'>
      <Heading3/>
    </div>
    <div className='paratwo'>
      <TerminalInfo/>
    </div>
    <div className="headingone">
      <Heading4/>
    </div>
    <div className='parathree'>
      <Post_reviews onSubmitSuccess={refreshReviews} />
    </div>
    <div className="review_table">
     <ReviewsTable refreshTrigger={refreshFlag} />
    </div>
    </>
  );
}

export default App;
