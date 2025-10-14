// Fetch all of the chickens
fetch("http://localhost:3000/api/chickens").then(
    (response) => {return response.json()}).then(
        (response) =>{req = response}).then(
            () => {console.log(req);});

// Make a new chick named Chiquita
fetch("http://localhost:3000/api/chicken", {
    method:"POST", 
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({name: "Chiquita", age: "1", color:"yellow"}) })
    .then((response) => {console.log(response.json())})

// Update Chiquita to be older
fetch("http://localhost:3000/api/chicken/3", 
    {method:"PUT", 
        headers:{'Content-Type':'application/json'}
        ,body:JSON.stringify({age: "3"}) })
        .then((response) => {console.log(response.json())})

// Fetch only Chiquita
fetch("http://localhost:3000/api/chicken/3"

).then((response) => {return response.json()})
.then((response) =>{req = response})
.then(() => {console.log(req);});

// Delete Chiquita
fetch("http://localhost:3000/api/chicken/3", {method:"DELETE"}).then((response) => {console.log(response.json())});