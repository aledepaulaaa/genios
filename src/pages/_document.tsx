import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-878522760"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-878522760');
            `,
          }}
        />
        {/* Snippet de evento (para a página de conversão) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': 'AW-878522760/5yqGCL6WwXkDEK7h3eID',
                'value': 0,
                'currency': 'BRL',
                'event_callback': function () {
                  console.log('conversion event was fired');
                }
              });
            `
          }}
        >
        </script>
      </Head>
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
