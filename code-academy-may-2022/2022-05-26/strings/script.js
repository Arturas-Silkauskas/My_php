let userInfoOutput = document.getElementById('main');

const user = {
    name: "Arturas",
    lastname: "Silkauskas"
};

userInfoOutput.innerHTML = `<h2>User information</h2>
                  <p>Vartotojo vardas yra ${user.name}, o pavardė ${user.lastname}.</p>`;