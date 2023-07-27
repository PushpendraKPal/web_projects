let form = document.getElementById('form');
let list = document.getElementById('items');
form.addEventListener('submit', onSubmit);

let data = JSON.parse(localStorage.getItem('user'));

data.forEach(ele => {
    let item = document.createElement('li')
    item.classList.add("list-group-item");
    item.append(document.createTextNode(`username:${ele.username} - email:${ele.email}`));
    list.append(item);
});

function onSubmit(e){
    e.preventDefault();
    list.innerHTML = "";

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    let user = {
        username,
        email
    }

    if(!data || data.length === 0){
        data = [user];
    }else{
        data.push(user);
    }

    localStorage.setItem('user', JSON.stringify(data));


    data.forEach(ele => {
        let item = document.createElement('li')
        item.classList.add("list-group-item");
        item.append(document.createTextNode(`username:${ele.username} - email:${ele.email}`));
        list.append(item);
    });
}