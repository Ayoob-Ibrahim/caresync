/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanitb': ['Kanit-bold'],
        'lightkanit':['EKanit'],
        'semikanit':['semikanit'],
        'regular':['regular']
      }
    },
    colors:{
      primary: '#129693',
      backgroundcolor:' #004558',
      toolbarprimary: '#667085',
      footer: '#98A2B3',
      normaltext: '#323433',
      whitenormal: '#ffffff',
    }
    
  },
  plugins: [],
}

