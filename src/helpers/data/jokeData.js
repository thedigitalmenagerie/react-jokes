import axios from 'axios';

const baseURL = 'https://official-joke-api.appspot.com/random_ten';

const getRandomJoke = () => new Promise((resolve, reject) => {
  axios.get(baseURL)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getRandomJoke;
