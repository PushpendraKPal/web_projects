// AXIOS

    // Create New Task

let createTask = (todo)=>{
    axios
    .post(`https://crudcrud.com/api/0dc4cd8f86414a018b539cb51f28097b/todo`, todo)
    .then((res)=>{
        console.log(res.data);
        DATA = res.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}

    // Read all Tasks
let getAllTask = ()=>{
    axios
    .get('https://crudcrud.com/api/0dc4cd8f86414a018b539cb51f28097b/todo')
    .then((res)=>{
        render(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
}


    // Read one Task

    let getOneTask = (id)=>{
        axios
        .get(`https://crudcrud.com/api/0dc4cd8f86414a018b539cb51f28097b/todo/${id}`)
        .then((res)=>{
            console.log(res.data);
            DATA = res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    // Update Task

    let getTask = (id, data)=>{
        axios
        .put(`https://crudcrud.com/api/0dc4cd8f86414a018b539cb51f28097b/todo/${id}`, data)
        .then((res)=>{
            console.log(res.data);
            DATA = res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    // Delete Task

    let deleteTask = (id)=>{
        axios
        .delete(`https://crudcrud.com/api/0dc4cd8f86414a018b539cb51f28097b/todo/${id}`)
        .then((res)=>{
            console.log(res.data);
            DATA = res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }


// Render function

const render = (list)=>{
    let tr;
    list.map((ele)=>{
        tr = document.createElement('tr');
        tr.innerHTML = `<td>${ele.taskName}</td><td>${ele.taskDescription}</td><td><button class="btn">Edit</button><button class="btn">Done</button><button class="btn">Del</button></td><td class="hide">${ele._id}</td>`;
            
        if(ele.taskStatus){
            let compTable = document.getElementById('completeTableBody');
            compTable.append(tr);
        }
        else{
            let remainingTable = document.getElementById('reamainingTableBody');
            remainingTable.append(tr);
        }
    })
};

// Edit, Delete and Update

const singleTodo = (e)=>{
    e.preventDefault();

    let parent = e.target.parentElement.parentElement;
    let id = parent.lastChild.innerText;
    console.log(id);
}

// Working Code

console.log("Hello!");
getAllTask();

let edu = document.getElementById('taskDetails');
edu.addEventListener('click', singleTodo);