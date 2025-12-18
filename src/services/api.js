import axios from 'axios';

export const postDataToApi = (data) => {
  return axios.post('https://reqres.in/api/workintech', data) //gerçek bir API değil, test amaçlı
    .then(res => res.data)
    .catch(err => console.error("API Hatası:", err));
};