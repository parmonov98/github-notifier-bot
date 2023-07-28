
const axios = require('axios');

let username = 'parmonov98';

axios.post('https://api.telegram.org/bot6680236259:AAHs4j75KTlbQZikE9f64XPMsDv4GTwLB5g/sendMessage', {
  chat_id: -953632807,
  text: username + " opened an issue, guys take a look once you have time!"
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });