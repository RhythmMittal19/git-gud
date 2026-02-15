function Playground({ borderRadius, fontSize, padding, shadowIntensity }) {
  return (
    <section className="playground">
      <div className="preview-area">
        <div className="preview-card">
          <button
            className="preview-card__btn"
            style={{
              borderRadius: `${borderRadius}px`,
              boxShadow: `${shadowIntensity}`,
              fontSize: `${fontSize}px`,
              padding: `${padding}px`,
            }}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Playground;
