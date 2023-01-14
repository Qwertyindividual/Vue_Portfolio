import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
       {
        id:1,
        title:'Netflix Clone',
        tools:'CSS 3/HTML 5',
        description:'This project is a combination of HTML5 and CSS3.',
        links:{
          github: 'https://github.com/Qwertyindividual/Netflix.git',
          live: 'https://dashing-biscuit-bf655d.netlify.app'
        },
        image: 'https://i.postimg.cc/sgGwdNSZ/netflix.png'
       },
       {
        id:2,
        title:'E-commerce',
        tools:'CSS 3/HTML 5/Javascript',
        description:'This project is a combination of HTML5, CSS3 and JavaScript.',
        links:{
          github: 'https://github.com/Qwertyindividual/JavascriptProject.git',
          live: 'https://kautharjavascripteomp.netlify.app'
        },
        image: 'https://i.postimg.cc/HWPwYtT0/ecommerce.png'
       },
       {
        id:3,
        title:'Calculator',
        tools:'CSS 3/HTML 5/JavaScript',
        description:'This project is a combination of HTML5,CSS3 and JavaScript.',
        links:{
          github: 'https://github.com/Qwertyindividual/Calculator.git',
          live: 'https://kautharcalculator.netlify.app'
        },
        image: 'https://i.postimg.cc/zDMhZXk0/calculator-pic.png'
       },
       {
        id:4,
        title:'First Portfolio',
        tools:'CSS 3/HTML 5',
        description:'This project is a combination of HTML5 and CSS3.',
        links:{
          github: 'https://github.com/Qwertyindividual/End-of-module-project.git',
          live: 'https://kauthar.netlify.app'
        },
        image: 'https://i.postimg.cc/fTQS8qCb/portfolio-pic.png'
       },
    ],
    testimonials:[
      {
        id:1,
        name:'Aliyah du Toit',
        relation: 'Colleague',
        testimonial: 'In the 2 months I have worked with Kauthar, it is clear that she is  a very hard-working, compassionate person. She never hesitates to help others and once she is faced with an issue, she will work at it until it is solved.',
        links:{
          github: 'https://github.com/aliyahdutoit',
          socials: ''
        },
        image: 'https://i.postimg.cc/TPBKQ3y1/aliyah.jpg',
      },
      {
        id:2,
        name:'Imraan Berksen',
        relation: 'Colleague',
        testimonial: 'Kauthar is really fun, interesting and full-hearted person. She\'s so friendly, honest and lovely to be around. She is shy at first but as you get to know her, she becomes more comfortable with you. She\'s also kind, caring and a good judge of character.',
        links:{
          github: 'https://github.com/ImraanBernksen',
          socials: ''
        },
        image: 'https://i.postimg.cc/LXLyXGtQ/imraan.jpg',
      },
      {
        id:3,
        name:'Candice Amon',
        relation: 'AUM',
        testimonial: 'Kauthar loves to work on her own. Has the ability to engage very well. She has the willingness to push herself out of her comfort zone in order to grow in all aspects.',
        links:{
          github: '',
          socials: ''
        },
        image: 'https://i.postimg.cc/pLN8qyz7/candiuce.jpg',
      },
      {
        id:4,
        name:'Ryan Thomas',
        relation: 'Lecturer',
        testimonial: 'Kauthar is not only a great student, but also a good help amongst her peers.Her ability to assist her peers with various issues while handling her own is admirable and shows her strength while learning and her ability to take what she\'s learnt and use it to it\'s fullest potential. She also has a good sense of humor and a bubbly personality.',
        links:{
          github: '',
          socials: ''
        },
        image: 'https://i.postimg.cc/tJK1SmZP/ryan.jpg',
      },
      {
        id:5,
        name:'Seaba Mafestire',
        relation: 'Colleague',
        testimonial: 'Kauthar is a free spirit who works hard to achieve her goals and puts her all in her work and a good team player.',
        links:{
          github: 'seabaraven@gmail.com',
          socials: 'seabaraven@gmail.com'
        },
        image: 'https://i.postimg.cc/rmbN1TTN/seaba.jpg',
      },           
      {
        id:6,
        name:'Keren Bruce',
        relation: 'Colleague',
        testimonial: 'Kauthar is a determined and energetic worker who strives to achieve her goals in the most efficient way possible . Her personality lights up any conversation she participates in and is surely a lovely presence to have in the workplace .',
        links: {
          github: 'https://github.com/kerenkittybruce',
          socials: 'https://www.instagram.com/kerenkittybruce/'
        },
        image: 'https://i.postimg.cc/Xv0QF8nD/keren.jpg',
      }             
    ],
    resume:[
      {
        faculty: 'Life Choices Coding Academy',
        timeline: 'Sep-2022 - Current',
        description: 'Currently learning the skills to become a full-stack web developer by implementing html, css, bootstrap, javascript, etc... into projects. '
      },
      {
        faculty: 'Mondale High School',
        timeline: '2016 - 2020',
        description: 'Majored in Physical Sciences, Mathematics, Life Sciences, Geography and passed Matric in the year 2021 with a Bachelor Pass'        
      }
    ]
  },


  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
