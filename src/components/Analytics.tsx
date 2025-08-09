"use client"

import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Google Analytics - Replace with your tracking ID */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* HubSpot Tracking - Replace with your portal ID */}
      {process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID && (
        <Script
          id="hubspot-analytics"
          src={`https://js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
          strategy="afterInteractive"
        />
      )}
    </>
  )
}
