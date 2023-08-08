// AXIOS
let Users;

// GET REQUEST
function getUsers() {
    axios
    .get('https://crudcrud.com/api/ead76c3ca97a45c2bccdf2b3693b048a/user')
    .then(res=>{
        console.log(res.data);
        Users = res.data;
        tableBody.innerHTML="";
        render(res.data)
    })
    .catch(err=>{
        console.error(err);
    })
  }
  
  // POST REQUEST
  function addUser(data) {
    axios.post('https://crudcrud.com/api/ead76c3ca97a45c2bccdf2b3693b048a/user', data)
    .then((res)=>{
        getUsers()
        alert(`${res.data.name} is added`)
    })
    .catch((err)=>{
        console.error(err);
    })
  }
  
  // PUT/PATCH REQUEST
  function updateUser(data) {
    axios
    .put(`https://crudcrud.com/api/ead76c3ca97a45c2bccdf2b3693b048a/user/${data._id}`, {name:data.name, email:data.email, phone:data.phone,time:data.time})
    .then((res)=>{
        console.log(res);
        getUsers()
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  
  // DELETE REQUEST
  function removeUser(id) {
    axios
    .delete(`https://crudcrud.com/api/ead76c3ca97a45c2bccdf2b3693b048a/user/${id}`)
    .then((res)=>{
        getUsers()
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  // DOM

    let tableBody = document.getElementById('tableBody');
    tableBody.addEventListener('click', findUser)
    tableBody.innerHTML="";
    getUsers();
    
    let bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const time = document.getElementById('time').value;
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('time').value = '';
        let user = {
            name,
            email,
            phone,
            time
        };
        let a = checkMail(Users, email);
        if(a)
        addUser(user)
        else
        alert("User is already registered with this email")
    });

    function render(data){
        data.forEach(ele=>{
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${ele.name}</td><td>${ele.email}</td><td>${ele.phone}</td><td>${ele.time}</td><td><button class="btn btn-info edit mr-2" data-toggle="modal" data-target="#userModal">Edit</button><button class="btn btn-danger delete">Delete</button></td>`
            tableBody.append(tr);
        })
    }

    function checkMail(data, email){
        let flag = true;
        data.map(ele=>{
            if(ele.email === email){
            flag = false;
            }
        })
        return flag;
    }

    function findUser(e){
        let currentUser;
        if (e.target.classList.contains('delete')){
            var tr = e.target.parentElement.parentElement;
            var userEmail = tr.childNodes[1].textContent;
            Users.forEach(e=>{
                if(e.email === userEmail){
                currentUser = e;
                }
            })
        console.log(currentUser._id);
        removeUser(currentUser._id);
        }else if (e.target.classList.contains('edit')){
            var tr = e.target.parentElement.parentElement;
            var userEmail = tr.childNodes[1].textContent;
            Users.forEach(e=>{
                if(e.email === userEmail){
                currentUser = e;
                }
            })
            document.getElementById('editName').value = currentUser.name;
            document.getElementById('editEmail').value = currentUser.email;
            document.getElementById('editPhone').value = currentUser.phone;
            document.getElementById('editTime').value = currentUser.time;

            let editForm = document.getElementById('editForm');
            editForm.addEventListener('submit', (e)=>{
                e.preventDefault();

                const nameE = document.getElementById('editName').value;
                const emailE = document.getElementById('editEmail').value;
                const phoneE = document.getElementById('editPhone').value;
                const timeE = document.getElementById('editTime').value;

                let user = {
                    _id :currentUser._id,
                    name :nameE,
                    email :emailE,
                    phone :phoneE,
                    time :timeE
                }
                console.log(user);
                updateUser(user);

                const modal = document.getElementById('userModal');
                $(modal).modal('hide');
            })
        }
    }
    console.log(Users);
