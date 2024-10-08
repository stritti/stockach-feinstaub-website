import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { seoPlugin } from '@vuepress/plugin-seo'
import { defineUserConfig } from 'vuepress'
import { path } from 'vuepress/utils'

export default defineUserConfig({
    lang: 'de-DE',
    title: 'Luftinfo Stockach',
    description: 'Private Initiative zur Verbesserung der Luftqualität in Stockach. Seit Anfang 2020 haben Bürger und Bürgerinnen damit begonnen Messtationen zu installieren und Messwerte der Feinstaubbelastung aufzuzeichnen. Dabei wurden sehr hohe periodisch wiederkehrende Feinstaubkonzentrationen festgestellt.',
    head: [
        ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
        ['link', {rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
        ['link', {rel: "manifest", href: "/site.webmanifest"}],
        ['link', {rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', {rel: "shortcut icon", href: "/favicon.ico"}],
        ['meta', {name: "msapplication-TileColor", content: "#3a0839"}],
        ['meta', {name: "msapplication-config", content: "/browserconfig.xml"}],
        ['meta', { name: "theme-color", content: "#ffffff" }],
        ['meta', { name: "google-site-verification", content:"sl01o3RMwhWoYogi1SqbIbg9WeO5w9XhaRrH6NDcf1w" }],
    ],
    bundler: viteBundler({
      viteOptions: {},
      vuePluginOptions: {},
    }),

    theme: defaultTheme({
        logo: 'images/feinstaub-stockach.png',
        navbar: [
            {text: 'Mitmachen', link: '/mitmachen.md'},
            {text: 'Hintergrund', link: '/hintergrund.md'},

            {text: 'Presse', link: '/presse.md'},
            {
                text: 'Messdaten',
                children: [
                    {text: 'Dashboard', link: '/messungen.md'},
                    {text: 'Feinstaub-Karte', link: 'https://maps.sensor.community/#13/47.8459/8.9940'}
                ]
            }
        ],
        sidebar: false,
        contributors: false,
        lastUpdated: false
    }),
    plugins: [
      registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components'), }),
      seoPlugin({ hostname: "www.luftinfo-stockach.de"}),    
    ]
})