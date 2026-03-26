import '../styles/Music.css'

function Music() {
  return (
    <section id="music" className="section music">
      <h2 className="section-title">Spotify</h2>
      <div className="spotify-wrapper">
        <div className="spotify-container">
          <iframe
            src="https://open.spotify.com/embed/playlist/1UeW9ClutFrzvBAXhJw2Nv?si=d44VGpEfS1ig_qrsnbk_7A&pi=D1_654NNSSKrw"
            title="Spotify Track"
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Music
