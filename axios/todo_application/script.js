// AXIOS

const baseURL = "https://crudcrud.com/api/b7e6e79d8ba9412f9716817a76beeede/todo"

    // Create New Task

async function createTask(data){
    try{
        const res = await axios.post(`${baseURL}`, data)
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}

    // Read all Tasks
    async function readAllTask(){
        try{
            const res = await axios.get(`${baseURL}`)
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }


    // Read one Task

    async function readOneTask(id){
        try{
            const res = await axios.get(`${baseURL}/${id}`)
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    // Update Task

    async function updateTask(id, data){
        try{
            const res = await axios.put(`${baseURL}/${id}`, data)
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }

    // Delete Task

    async function deleteTask(id){
        try{
            const res = await axios.delete(`${baseURL}/${id}`)
            return res.data;
        }
        catch(err){
            console.log(err);
        }
    }


// Function Render


async function render(){
    try{
        let data = await readAllTask();

        let compTable = document.getElementById('completeTableBody');
        compTable.innerHTML = "";
        let remainingTable = document.getElementById('reamainingTableBody');
        remainingTable.innerHTML = "";

        let tr;
        data.map((ele)=>{
            tr = document.createElement('tr');
            tr.innerHTML = `<td>${ele.taskName}</td><td>${ele.taskDescription}</td><td><button class="btn btn-info edit">Done</button><button class="btn btn-danger delete">Del</button></td><td class="hide">${ele._id}</td>`;
                
            if(ele.taskStatus){
                compTable.append(tr);
            }
            else{
                remainingTable.append(tr);
            }
        })
    }
    catch(err){
        console.log(err);
    }
}


// Function Add task

async function addTask(e){
    e.preventDefault();
    let task = document.getElementById('taskName').value;
    let taskDis = document.getElementById('taskDescription').value
    let a = {
    taskName : task,
    taskDescription : taskDis,
    taskStatus : false
    }
    await createTask(a);
    document.getElementById('taskName').value = "";
    document.getElementById('taskDescription').value = "";
    render();

}


// Function to handle Delete and change in Status.

async function handleDeleteAndEdit(e){
    try{
        e.preventDefault()
        let parent = e.target.parentElement.parentElement;
        let id = parent.lastChild.innerText;
        if(e.target.classList.contains('delete')){
            const deletedItem = await deleteTask(id)
            render()
            return deletedItem.data;
        }else if(e.target.classList.contains('edit')){
            let toEdit = await readOneTask(id);
            toEdit.taskStatus = !toEdit.taskStatus
            const editedData = await updateTask(id, {taskName:toEdit.taskName, taskDescription:toEdit.taskDescription, taskStatus:toEdit.taskStatus});
            render()
            return editedData;
        }

    }
    catch(err){

    }
}


// Working Code ----------------------------------------------------------------------------------------------

// add new task

console.log("Hello!");
render();

let form = document.getElementById('taskForm');
form.addEventListener('submit', addTask);

let edu = document.getElementById('taskDetails');
edu.addEventListener('click', handleDeleteAndEdit);