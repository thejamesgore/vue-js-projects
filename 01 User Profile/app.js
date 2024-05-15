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
})

app.mount('#app')
