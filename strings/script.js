let userInfoOutput = document.getElementById('main');

let user = {
    firstName: "Arturas",
    lastName: "Silkauskas"
};

userInfoOutput.innerHTML =
    `<h2>Users Information</h2>
     <p>Users name is ${user.firstName}, and last name is ${user.lastName}.</p>`;