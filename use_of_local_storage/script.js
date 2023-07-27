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

    let data = JSON.parse(localStorage.getItem('user'));

    if(!data || data.length === 0){
        data = [user];
    }else{
        data.push(user);
    }

    localStorage.setItem('user', JSON.stringify(data));

    alert("You have successfully registered!");
}