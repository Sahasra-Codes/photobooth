export default function App() {
  return (
    <main className="app">
      <header className="header">
        <a className="brand" href="/">Photo Booth</a>
        <span>Your little memory maker</span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow">Make a moment last</p>
        <h1 id="page-title">Good times. Great snapshots.</h1>
        <p>A little digital photo booth for your favorite faces.</p>
      </section>

      <section className="booth" aria-label="Photo booth preview">
        <div className="preview">
          <span className="camera-icon" aria-hidden="true">◎</span>
          <h2>Your next memory starts here</h2>
          <p>Camera preview and photo capture are coming soon.</p>
        </div>
        <div className="booth-footer">
          <span>Photo Booth · Est. 2026</span>
          <span className="status">In development</span>
        </div>
      </section>

      <footer className="footer">Made for moments worth keeping.</footer>
    </main>
  )
}
