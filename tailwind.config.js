/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'custom-pos': '45% 10%', // Define your custom class
        'custom-possm': '10% 50%', // Define your custom class
      },
      fontFamily: {
        'kanitb': ['Kanit-bold'],
        'Elightkanit':['EKanit'],
        'LKanit':['LKanit'],
        'semikanit':['semikanit'],
        'regular':['regular'],
        
      }
    },
    colors:{
      primary: '#129693',
      backgroundcolor:' #004558',
      toolbarprimary: '#667085',
      footer: '#98A2B3',
      normaltext: '#323433',
      whitenormal: '#ffffff',
      toolbarbg:'#FAFDF9'
    }
    
  },
  plugins: [],
}

