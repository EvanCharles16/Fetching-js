const URL = 'https://api.github.com/users/EvanCharles16/followers'
fetch (URL).then(res => {
    return res.json();
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})