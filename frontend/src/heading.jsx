import React from 'react'

export default function Heading(props) {
  return (
    <div>
      <h2 className='headingonetxt selectedgreen'>Just a guy building <br/>cool stuff with code.</h2>
    </div>
  )
}

export function Heading2() {
    return (
        <div>
            <h1 className='headingonetxt selectedpurple' style={{ color: '#c34cff'}}>some projects<br/>for show</h1>
            <h1 className='paragraph-content-1 selectedpurple' style={{ color: 'white'}}>Under-development </h1>
        </div>
    )
}
