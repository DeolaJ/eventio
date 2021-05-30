import axios from 'axios';

const BASE_URL = 'https://testproject-api-v2.strv.com';
const APIKey: string = process.env.REACT_APP_API_KEY || '';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    APIKey: APIKey,
  },
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async function (error) {
//     const originalRequest = error.config;
//     const refreshToken = localStorage.getItem('refreshToken');

//     if (refreshToken && error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       return axios.post(`${BASE_URL}/auth/native`, { refreshToken: refreshToken }).then((response: AxiosResponse) => {
//         if (response.status === 200) {
//           localStorage.setItem('accessToken', response.data.accessToken);

//           console.log('Access token refreshed!');
//           return axios(originalRequest);
//         }
//       });
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
