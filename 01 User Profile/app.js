const app = Vue.createApp({
  data() {
    return {
      firstName: 'James',
      lastName: 'Jones',
      email: 'J.Jones@Jonsing.com',
      gender: 'male',
      photo: 'https://randomuser.me/api/portraits/men/11.jpg',
    }
  },
  methods: {
    getUser() {
      ;(this.firstName = 'Hannah'),
        (this.lastName = 'Bones'),
        (this.email = 'hannah.bones"gmail.com'),
        (this.gender = 'female'),
        (this.photo = 'https://randomuser.me/api/portraits/women/11.jpg')
    },
  },
})

app.mount('#app')
