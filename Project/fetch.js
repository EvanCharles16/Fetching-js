const URL = 'http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination'

axios.get(URL)
    .then(res => {
        console.log(res);
        const listHTML = document.querySelector('#list')
        const imageURL = 'http://35.240.201.155:3000';
        data = res.data;

        data.forEach(item => {
            const {
                destinationName,
                address,
                city,
                province,
                images
            } = item;

            const itemHTML =`    
                <tr>
                    <td>${destinationName}</td>       
                    <td>${address}</td>       
                    <td>${city}</td>        
                    <td>${province}</td>
                    <td><img width = "50%" height ="150px"; src ="${imageURL}/${images}"/></td>
                </tr>       
            `;
            //Untuk menampilkan dari Js ke HTML
            listHTML.innerHTML += itemHTML
        });
    })
    .catch(err => console.log(err));

    