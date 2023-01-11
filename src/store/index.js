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
        testimonial: 'Muddathir has a very broad understanding of coding and is able to adapt to any situation seemingly with ease. It is easy to see that a lot of work is put into understanding concepts and applying them in his tasks. He works well with others, is great to be around and is an all out great guy. I believe that he will be an asset to anyone that hires him.',
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
