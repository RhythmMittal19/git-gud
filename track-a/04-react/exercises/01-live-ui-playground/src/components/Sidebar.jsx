function Sidebar({
  borderRadius,
  onBorderRadiusChange,
  shadowIntensity,
  onShadowIntensityChange,
  fontSize,
  onFontSizeChange,
  padding,
  onPaddingChange,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__controls">
          {/* Border Radius */}
          <div className="control-group">
            <div className="control-group__header">
              <label className="control-label">Border Radius</label>
              <span className="control-value">{borderRadius}px</span>
            </div>
            <input
              type="range"
              className="slider-input"
              min={0}
              max={24}
              value={borderRadius}
              onChange={(e) => onBorderRadiusChange(Number(e.target.value))}
            />
          </div>

          {/* Shadow Intensity */}
          <div className="control-group">
            <div className="control-group__header">
              <label className="control-label">Shadow Intensity</label>
              <span className="control-value">LG</span>
            </div>
            <div className="button-grid">
              <button
                className={`btn-option ${shadowIntensity === "NONE" ? "active" : ""}`}
                onClick={() => onShadowIntensityChange("NONE")}
              >
                NONE
              </button>
              <button
                className={`btn-option ${shadowIntensity === "SM" ? "active" : ""}`}
                onClick={() => onShadowIntensityChange("SM")}
              >
                SM
              </button>
              <button
                className={`btn-option ${shadowIntensity === "MD" ? "active" : ""}`}
                onClick={() => onShadowIntensityChange("MD")}
              >
                MD
              </button>
              <button
                className={`btn-option ${shadowIntensity === "LG" ? "active" : ""}`}
                onClick={() => onShadowIntensityChange("LG")}
              >
                LG
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div className="control-group">
            <div className="control-group__header">
              <label className="control-label">Font Size</label>
              <span className="control-value">{fontSize}px</span>
            </div>
            <input
              type="range"
              className="slider-input"
              min={12}
              max={32}
              value={fontSize}
              onChange={(e) => onFontSizeChange(Number(e.target.value))}
            />
          </div>

          {/* Button Text */}
          <div className="control-group">
            <label className="control-label">Button Text</label>
            <input
              className="text-input"
              type="text"
              value="Get Started Now"
              placeholder="Enter button text..."
            />
          </div>

          {/* Accent Color */}
          <div className="control-group">
            <label className="control-label">Accent Color</label>
            <div className="color-picker-row">
              <input className="color-input" type="color" value="#1a2530" />
              <span className="control-value">#1A2530</span>
            </div>
          </div>

          {/* Padding */}
          <div className="control-group">
            <div className="control-group__header">
              <label className="control-label">Padding</label>
              <span className="control-value">{padding}px</span>
            </div>
            <input
              type="range"
              className="slider-input"
              min={8}
              max={64}
              value={padding}
              onChange={(e) => onPaddingChange(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="sidebar__footer">
        <button className="btn-reset">
          <span className="material-symbols-outlined">refresh</span>
          Reset View
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
