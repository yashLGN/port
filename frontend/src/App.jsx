import './App.css'
import Terminal from './terminal.jsx'
import Github_buttons from './github_buttons.jsx'
import Heading from './heading.jsx';
import {Heading2} from './heading.jsx';
import Paragraph from './paragraph.jsx';

function App() {
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
    </>
  );
}

export default App;
