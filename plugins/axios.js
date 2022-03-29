export default function ({ $axios, app, store }, inject) {
  // Create a custom axios instance

  const axios = $axios.create({
    headers: {
      'Accept': "application/json",
      'Content-Type': 'multipart/form-data',
      'device':'website',
      'token': app.$cookies.get("token"),

    }
  })

  axios.setBaseURL('https://partner-api.mr-mussllaha.tecbadia.com')

  // Inject to context as $axios
  inject('axios', axios)
}
