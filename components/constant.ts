const prod = 'https://coinfundr.netlify.app'
const dev = 'http://localhost:3000'

export const  BASE_URL = process.env.NODE_ENV === 'development' ? dev : prod