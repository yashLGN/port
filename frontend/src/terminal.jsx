export default function Terminal() {
  return (
    <div className="terminal-outest custom-terminal shadow-lg">
      <div className="terminal-header d-flex align-items-center px-3 py-2">
        <div className="traffic-buttons bg-danger me-2"></div>
        <div className="traffic-buttons bg-warning me-2"></div>
        <div className="traffic-buttons bg-success"></div>
      </div>

      <pre className="terminal-code m-0 px-3 py-2">
<span className="line"><span className="text-white">1</span> {'{'} </span>
<span className="line"><span className="text-white">2</span>   <span className="text-info">"web app"</span>: <span className="text-danger">"about yash"</span>,</span>
<span className="line"><span className="text-white">3</span>   <span className="text-info">"version"</span>: <span className="text-warning">beta 1.0</span>,</span>
<span className="line"><span className="text-white">4</span>   <span className="text-info">"open_source"</span>: <span className="text-success">no idea</span>,</span>
<span className="line"><span className="text-white">5</span>   <span className="text-info">"tags"</span>: [</span>
<span className="line"><span className="text-white">6</span>   <span className="text-danger">"application"</span>,</span>
<span className="line"><span className="text-white">7</span>   <span className="text-danger">"developer"</span>,</span>
<span className="line"><span className="text-white">8</span>   <span className="text-danger">"web-design"</span></span>
<span className="line"><span className="text-white">9</span>   ]</span>
<span className="line"><span className="text-white">10</span> {'}'} </span>
<span className="line">
  <span className="text-white">11</span> $ good stuff
  <span className="blinking-cursor">|</span>
</span>
      </pre>
    </div>
  );
}
