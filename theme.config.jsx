import { useConfig } from 'nextra-theme-docs'


export default {
    logo: (
        <>
         <img src="/logostem3a.jpg" alt="STEM Lab | FPGA" width={40} height={10}/>
         
          <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
          | FPGA 
          </span>
        </>
      ),
    project: {
      link: 'https://github.com/hovahyii/STEM-Lab-FPGA'
    },
    docsRepositoryBase: 'https://github.com/hovahyii/STEM-Lab-FPGA',
    // banner: {
    //     key: '2.0-release',
    //     text: (
    //       <a href="https://nextra.site" target="_blank">
    //         🎉 Nextra 2.0 is released. Read more →
    //       </a>
    //     )
    //   },
      useNextSeoProps() {
        const { frontMatter } = useConfig()
        return {
          additionalLinkTags: [
            {
              href: '/apple-touch-icon.png',
              rel: 'apple-touch-icon',
              sizes: '180x180'
            },
            {
              href: '/android-chrome-192x192.png',
              rel: 'icon',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              href: '/android-chrome-512x512.png',
              rel: 'icon',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              href: '/favicon-32x32.png',
              rel: 'icon',
              sizes: '32x32',
              type: 'image/png'
            },
            {
              href: '/favicon-16x16.png',
              rel: 'icon',
              sizes: '16x16',
              type: 'image/png'
            }
          ],
          additionalMetaTags: [
            { content: 'en', httpEquiv: 'Content-Language' },
            { content: 'STEM Lab FPGA', name: 'apple-mobile-web-app-title' },
            { content: '#fff', name: 'msapplication-TileColor' },
            { content: '/android-chrome-512x512.png', name: 'msapplication-TileImage' }
          ],
          description:
            frontMatter.description || 'STEM Lab FPGA',
          openGraph: {
            images: [
              { url: frontMatter.image || 'https://stem-lab-fpga.vercel.app/logostem3a.jpg' }
            ]
          },
          titleTemplate: '%s – STEM Lab FPGA',
          twitter: {
            cardType: 'summary_large_image',
            site: 'https://stem-lab-fpga.vercel.app'
          }
        }
      }
}