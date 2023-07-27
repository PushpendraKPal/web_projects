let form = document.getElementById('form');
let list = document.getElementById('items');

list.addEventListener('click', removeOrEditItem);
form.addEventListener('submit', onSubmit);

let data = JSON.parse(localStorage.getItem('user'));

if(data){
render(data);
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
    data = JSON.parse(localStorage.getItem('user'));
    list.innerHTML="";
    render(data);

}


function removeOrEditItem(e) {
    var li = e.target.parentElement;
    let mail = li.textContent.split('-')[1].trim().split(':')[1].trim();
    mail = mail.slice(0,mail.length-5);

    if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure you want to delete this item?')) {
            data = data.filter(user => {
               return user.email !== mail
            });
        }
    } else if (e.target.classList.contains('edit')) {
        var newText = prompt('Edit the item:',mail);
        if (newText !== null && newText.trim() !== '') {
          for(let i=0; i<data.length; i++){
            if(mail === data[i].email){
                data[i].email = newText;
                break;
            }
          }
        }
      }
      localStorage.setItem('user', JSON.stringify(data));
      data = JSON.parse(localStorage.getItem('user'));
      list.innerHTML = "";
      render(data);
}

function render(data){
    data.forEach(ele => {
        let item = document.createElement('li')
        item.classList.add("list-group-item");
        item.append(document.createTextNode(`username:${ele.username} - email:${ele.email}`));
        
         //del button element
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('X'));
        item.appendChild(deleteBtn);

        var editBtn = document.createElement('button');
        editBtn.className = 'btn btn-primary btn-sm float-right edit mr-1';
        editBtn.appendChild(document.createTextNode('Edit'));
        item.appendChild(editBtn);

        list.append(item);
    });
}
