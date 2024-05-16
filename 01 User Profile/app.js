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
    async getRandomUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      ;(this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.photo = results[0].picture.large)
    },
  },
})

app.mount('#app')
