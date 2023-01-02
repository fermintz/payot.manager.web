export default defineNuxtConfig({
  ssr:false,
  css:[
    "~/assets/styles/default.scss"
  ],
  build:{
    transpile:['chart.js','vue-chartjs']
  },
  modules:[
    '@vueuse/nuxt',
  ],

  app:{
    head:{
      title:'페이오티 스토어 관리자',
      link:[
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'},
        {rel:'stylesheet', href:'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap'}
      ],
    },
  },
})
