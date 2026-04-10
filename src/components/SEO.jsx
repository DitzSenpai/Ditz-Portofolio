import { Helmet } from 'react-helmet-async'

function SEO({ title, description, image, url }) {
  const siteTitle = title || 'Aditya Nur Wahyuda - Portfolio | Pelajar Sekolah & Web Developer'
  const siteDescription = description || 'Aditya Nur Wahyuda Portfolio - Pelajar Sekolah Indonesia yang tertarik di bidang IT dan Web Development. Portfolio resmi Muhammad Fikri dengan skills JavaScript, Python, React, dan berbagai project open source di GitHub.'
  const siteImage = image || '/favicon.jpg'
  const siteUrl = url || 'https://portofolio.ditzdigital.my.id'

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="Aditya Nur Wahyuda, Aditya Nur Wahyuda Portfolio, Aditya Nur Wahyuda Pelajar, Aditya Nur Wahyuda Pelajar Sekolah, Aditya Nur Wahyuda Web Developer, Portfolio Aditya Nur Wahyuda, Aditya Portfolio, Aditya Developer, Web Developer Indonesia, Pelajar IT, Programmer Pemula, JavaScript, Python, React, Frontend Developer, Siswa IT Indonesia, Belajar Coding, Portfolio Pelajar, GitHub Developer Indonesia, Aditya Nur Wahyuda GitHub, Aditya Nur Wahyuda Programmer" />
      <meta name="author" content="Aditya Nur Wahyuda" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={siteUrl} />
      <link rel="alternate" hreflang="id" href={siteUrl} />
      <link rel="alternate" hreflang="en" href={siteUrl} />
      <link rel="alternate" hreflang="x-default" href={siteUrl} />

      <meta property="og:type" content="profile" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Aditya Nur Wahyuda Portfolio" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:site_name" content="Aditya Nur Wahyuda Portfolio" />
      <meta property="profile:first_name" content="Aditya" />
      <meta property="profile:last_name" content="Nur Wahyuda" />
      <meta property="profile:username" content="DitzSenpai" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />
      <meta property="twitter:creator" content="@fmds_whps" />
      <meta property="twitter:site" content="@fmds_whps" />

      <meta name="geo.region" content="ID" />
      <meta name="geo.placename" content="Indonesia" />
      <meta name="theme-color" content="#0066ff" />
    </Helmet>
  )
}

export default SEO
