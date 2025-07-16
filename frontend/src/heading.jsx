import React from 'react'

export default function Heading(props) {
  return (
    <div>
      <h2 className='headingonetxt selectedgreen' style={{ color: '#4cffb2'}}>Just a guy building <br/>cool stuff with code.</h2>
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

export function Heading3() {
    return (
        <div>
            <h1 className='headingonetxt selectedred' style={{ color: '#ff4c7c'}}>native asf.</h1>
            <h1 className='paragraph-content-1 selectedred' style={{ color: 'white'}}>Some system info</h1>
        </div>
    )
}

export function Heading4() {
    return (
        <div>
            <h1 className='headingonetxt selectedyellow' style={{ color: '#ffb24c'}}>comments</h1>
        </div>
    )
}

