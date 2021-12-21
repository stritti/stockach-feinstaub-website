const { path } = require('@vuepress/utils')

module.exports = {
    lang: 'de-DE',
    title: 'Feinstaub in Stockach',
  description: '.',
    repo: 'https://github.com/stritti/stockach-feinstaub-website',
    theme: path.resolve(__dirname, './theme'),

    themeConfig: {
      logo: 'images/feinstaub-stockach.png',
      navbar: [
        { text: 'Mitmachen', link: '/mitmachen.md' },
        { text: 'Hintergrund', link: '/hintergrund.md' },

        { text: 'Presse', link: '/presse.md' },
        { text: 'Feinstaub-Karte', link: 'https://maps.sensor.community/#13/47.8459/8.9940' }
      ],
      sidebar: false,
      contributors: false,
      lastUpdated: false
    },
  }