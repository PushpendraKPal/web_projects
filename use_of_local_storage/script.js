let form = document.getElementById('form');
form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let user = {
        username,
        password
    }
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

    alert("You have successfully registered!");
}