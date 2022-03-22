export default function ({ $axios,app,store }, inject) {
    // Create a custom axios instance

    const axios = $axios.create({
      headers: {
        common: {
            'token': store.state.auth.token,
            'Accept': "application/json",
            'Content-Type': 'multipart/form-data',
            'device':store.state.auth.device,
            'session-id':store.state.auth.sessionId
        }
      }
    })
  
  //  axios.setBaseURL('http://192.168.1.26')
    axios.setBaseURL('http://192.168.1.03')

    // Inject to context as $api
    inject('axios', axios)
  }