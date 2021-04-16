module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
  darkMode: false,
  theme: {
    extend: {
    	colors: {
    		theme: {
          one: '#372582',
          two: '#090437',
          three: '#E3F8ED',
          four: '#FD5A56',
          five: '#090437',
          six: '#FFFDFD'
        }
    	},
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}