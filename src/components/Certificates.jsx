import '../styles/Certificates.css'

function Certificates() {
  const certificates = [
    { id: 1, src: 'https://img2.pixhost.to/images/6703/708086870_image.jpg', alt: 'Muhammad Fikri Webinar Idwebstalks' },
    { id: 2, src: 'https://img2.pixhost.to/images/6703/708086984_image.jpg', alt: 'Sertifikat Webinar Nasional HIMATEK Muhammad Fikri' },
  ]

  return (
    <section id="certificates" className="section certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-item">
            <img
              src={cert.src}
              alt={cert.alt}
              className="certificate-img"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
