// AXIOS

// GET REQUEST
function getUsers() {
    axios
    .get('https://crudcrud.com/api/dbf119a8baaa4a15b9437f3b8883a43c/user')
    .then(res=>{
        tableBody.innerHTML="";
        render(res)
    })
    .catch(err=>{
        console.error(err);
    })
  }
  
  // POST REQUEST
  function addUser(user) {
    axios.post('https://crudcrud.com/api/dbf119a8baaa4a15b9437f3b8883a43c/user', user)
    .then((res)=>{
        getUsers()
    })
    .catch((err)=>{
        console.error(err);
    })
  }
  
  // PUT/PATCH REQUEST
  function updateUser(id) {
    axios
    .put(`https://crudcrud.com/api/dbf119a8baaa4a15b9437f3b8883a43c/user/${id}`)
    .then((res)=>{
        getUsers()
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  
  // DELETE REQUEST
  function removeUser(id) {
    axios
    .put(`https://crudcrud.com/api/dbf119a8baaa4a15b9437f3b8883a43c/user/${id}`)
    .then((res)=>{
        getUsers()
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  // DOM

    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML="";
    getUsers();
    
    let user;
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
        user = {
            name,
            email,
            phone,
            time
        };
    });

    function render(data){
        data.forEach(ele=>{
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${ele.name}</td><td>${ele.email}</td><td>${ele.phone}</td><td>${ele.time}</td><td><button class="btn btn-info">Edit</button><button class="btn btn-danger">Delete</button></td>`
            tableBody.append(tr);
        })
    }


