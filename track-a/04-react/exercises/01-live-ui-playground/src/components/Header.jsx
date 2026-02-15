function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header__brand">
        <div className="header__icon">
          <span className="material-symbols-outlined">layers</span>
        </div>
        <h1 className="header__title">NOCTRUS</h1>
      </div>
      <div className="header__actions">
        <button
          className="btn-icon"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          <span className="material-symbols-outlined icon-light">
            dark_mode
          </span>
          <span className="material-symbols-outlined icon-dark">
            light_mode
          </span>
        </button>
        <div className="header__divider"></div>
        <button className="btn-run">
          <span className="material-symbols-outlined">play_arrow</span>
          <span className="btn-run__text">Run Code</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
