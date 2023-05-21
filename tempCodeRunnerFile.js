  fetch('https://jsonplaceholder.typicode.com/')
    .then(res => {
        return res.json();
    })
    .then(data=> {
        console.log(data);
    });