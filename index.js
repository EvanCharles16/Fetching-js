// const URL = 'https://api.github.com/users/EvanCharles16/followers'

/* Using Fetch
fetch(URL).then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
*/


// Using Axios

const URL = 'https://api.github.com/users/EvanCharles16/followers'
axios
    .get(URL)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })