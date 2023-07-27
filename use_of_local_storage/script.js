let form = document.getElementById('form');
let list = document.getElementById('items');

list.addEventListener('click', removeOrEditItem);
form.addEventListener('submit', onSubmit);

let data = JSON.parse(localStorage.getItem('user'));

if(data){
data.forEach(ele => {
    let item = document.createElement('li')
    item.classList.add("list-group-item");
    item.append(document.createTextNode(`username:${ele.username} - email:${ele.email}`));

    var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        item.appendChild(deleteBtn);

    list.append(item);
});
}

function onSubmit(e){
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;

    let user = {
        username,
        email
    }

    if(!data || data.length === 0){
        data = [user];
    }else{
        for(let i=0; i<data.length; i++){
            if(data[i].email === email)
            return alert("This email is already registred!")
        }
        data.push(user);
    }

    localStorage.setItem('user', JSON.stringify(data));

    list.innerHTML = "";

    data.forEach(ele => {
        let item = document.createElement('li')
        item.classList.add("list-group-item");
        item.append(document.createTextNode(`username:${ele.username} - email:${ele.email}`));
        
         //del button element
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        item.appendChild(deleteBtn);

        list.append(item);
    });
}

function removeOrEditItem(e) {
    if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure you want to delete this item?')) {
        var li = e.target.parentElement;
        let mail = li.textContent.split('-')[1].trim().split(':')[1].trim();
            mail = mail.slice(0,mail.length-1)
            console.log(mail);
            data = data.filter(user => user.email !== mail);
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
        list.removeChild(li);
      }
    } 

    data.forEach(ele => {
        let item = document.createElement('li')
        item.classList.add("list-group-item");
        item.append(document.createTextNode(`username:${ele.username} - email:${ele.email}`));
        
        //  //del button element
        // var deleteBtn = document.createElement('button');
        // deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        // deleteBtn.appendChild(document.createTextNode('X'));
        // item.appendChild(deleteBtn);

        // list.append(item);
    });
}