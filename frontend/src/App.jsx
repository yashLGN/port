import './App.css'
import Terminal from './terminal.jsx'
import Github_buttons from './github_buttons.jsx'

function App() {
  return (
    <>
    <div className="terminal-div">
      <Terminal />
    </div>
    <div className="github-buttons">
      <Github_buttons/>
    </div>
    </>
  );
}

export default App;
