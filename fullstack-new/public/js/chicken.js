console.log("Welcome to the lair \nOF DOOOOOOM");


const chickenDiv = document.getElementsByClassName("chickens")[0];
const loadingIcon = document.getElementById("loadingIcon");


fetch("/api/chickens/")
    .then((response) => { console.log(response); return response.json(); })
    .then((response) => {
        // Use for..of to iterate returned chickens
        for (const chicken of response) {
            console.log(chicken);
            const curChicken = document.createElement("div");
            curChicken.className = 'chicken';
            chickenDiv.append(curChicken);
            curChicken.style.backgroundColor = chicken['color'];
            curChicken.innerHTML = '<p class="name">' + chicken['name'] + '</p>'
        }
    })
    .catch((err) => {
        console.error('Error fetching chickens', err);
        if (loadingIcon) loadingIcon.innerText = 'Failed to load chickens';
    })
    .finally(() => {
        // Hide or remove the loading icon once work is done (success or fail)
        if (loadingIcon) {
            // Prefer removing it so it doesn't affect layout
            loadingIcon.remove();
        }
    });