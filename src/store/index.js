import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials:[
      {
        id:1,
        name:'Aliyah du Toit',
        relation: 'Colleague',
        testimonial: 'In the 2 months I have worked with Kauthar, it is clear that she is  a very hard-working, compassionate person. She never hesitates to help others and once she is faced with an issue, she will work at it until it is solved.',
        links:{
          github: '',
          socials: ''
        },
        profile_img: '',
      },
      {
        id:2,
        name:'Imraan Berksen',
        relation: 'Colleague',
        testimonial: 'Kauthar is really fun, interesting and full-hearted person. She\'s so friendly, honest and lovely to be around. She is shy at first but as you get to know her, she becomes more comfortable with you. She\'s also kind, caring and a good judge of character.',
        links:{
          github: '',
          socials: ''
        },
        profile_img: '',
      },
      {
        id:3,
        name:'Candice Amon',
        relation: '',
        testimonial: 'Kauthar loves to work on her own. Has the ability to engage very well. She has the willingness to push herself out of her comfort zone in order to grow in all aspects.',
        links:{
          github: '',
          socials: ''
        },
        profile_img: '',
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
        profile_img: '',
      },
      {
        id:5,
        name:'Seaba Mafestire',
        relation: 'Colleague',
        message: 'Kauthar is a free spirit who works hard to achieve her goals and puts her all in her work and a good team player.',
        links:{
          github: '',
          socials: ''
        },
        profile_img: '',
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
