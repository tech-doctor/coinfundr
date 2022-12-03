import axios from 'axios';

const BASE_URL =  process.env.NEXT_PUBLIC_SERVER 

export const sendUserFlow = (data:any, id:string) => {
    axios.post(`${BASE_URL}/api/postUserFlow/${id}`, data)
      .then(function (response) {
        console.log(response);
      })
    .catch((error) => {
       console.log(error)
    })
}




// axios.post('https:sample-endpoint.com/user', {
//         Name: 'Fred',
//         Age: '23'
//       })
//       .then(function (response) {
//         console.log(response);
//       })