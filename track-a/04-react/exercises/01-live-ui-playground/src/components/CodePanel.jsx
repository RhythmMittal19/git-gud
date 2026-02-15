function CodePanel() {
  return (
    <div className="code-panel">
      <div className="code-panel__header">
        <div className="code-panel__tabs">
          <button className="code-tab active">Tailwind CSS</button>
          <button className="code-tab">Raw CSS</button>
        </div>
        <button className="btn-copy">
          <span className="material-symbols-outlined">content_copy</span>
          <span className="btn-copy__text">Copy Code</span>
        </button>
      </div>
      <div className="code-panel__body">
        <pre className="code-block">Some code here for now</pre>
      </div>
    </div>
  );
}

export default CodePanel;
