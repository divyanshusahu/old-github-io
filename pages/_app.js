import Head from "next/head";

import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  const jsonld_website = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "Divyanshu Sahu",
    url: "https://www.divyanshusahu.co",
    creator: { "@type": "Person", name: "Divyanshu Sahu" },
    keywords: [
      "Divyanshu Sahu",
      "Full Stack",
      "Developerr",
      "Web Application",
      "Security",
      "Information Security",
      "IIT Roorkee",
      "Zeus Numerix",
      "ReactJS",
      "Django",
      "NextJS",
      "Flask",
    ],
    sameAs: [
      "https://www.facebook.com/divyanshu.sahu1997",
      "https://www.instagram.com/_divyanshusahu_/",
      "https://www.linkedin.com/in/divyanshu-sahu/",
    ],
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Divyanshu Sahu: Full Stack Developer</title>
        <meta
          name="description"
          content="Divyanshu Sahu. Full Stack Developer and Web Application Security Enthusiast.
        B.Tech in Computer Science from Indian Institute of technology, Roorkee."
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="divyan5hu" />
        <meta name="twitter:creator" content="divyan5hu" />
        <meta name="twitter:url" content="https://www.divyanshusahu.co" />
        <meta name="twitter:title" content="Divyanshu Sahu" />
        <meta
          name="twitter:description"
          content="Full Stack Developer and Web Application Security Enthusiast."
        />
        <meta
          name="twitter:image"
          content="https://www.divyanshusahu.co/images/profile.png"
        />
        <meta name="twitter:image:alt" content="Profile" />

        <meta property="og:url" content="https://www.divyanshusahu.co" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Divyanshu Sahu" />
        <meta
          property="og:description"
          content="Full Stack Developer and Web Application Security Enthusiast."
        />
        <meta
          property="og:image"
          content="https://www.divyanshusahu.co/images/profile.png"
        />
        <meta property="og:image:alt" content="Profile" />
        <meta property="og:site_name" content="Divyanshu's Personal Website" />
        <meta property="og:locale" content="en_US" />

        <script
          key="jsonld_website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld_website) }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-169266417-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'UA-169266417-2');`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
