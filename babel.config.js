module.exports = {
  presets: [
    '@vue/app'
  ],

  'plugins': [
    ['import', {
      'libraryName': 'vant',
      'libraryDirectory': 'es',
      'style': true
    }]

  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
