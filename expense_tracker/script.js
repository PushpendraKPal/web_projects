let newExpense = {};
let list = document.getElementById("mytable");
list.addEventListener("click",del)
render();


let form = document.getElementById("form");
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    let amount = document.getElementById("amount").value;
    document.getElementById("amount").value = "";
    let description = document.getElementById("description").value;
    document.getElementById("description").value="";
    let category = document.getElementById("category").value;
    document.getElementById("category").selectedIndex = 0;
    newExpense.amount = amount;
    newExpense.description = description;
    newExpense.category = category;

    setData(newExpense);
    render();
    
})

function getData(){
    let data = JSON.parse(localStorage.getItem("expense"));
    return data;
}

function setData(obj){
    let data = getData();
    if(data === null || data.length === 0){
        obj.id = 1;
        data = [];
    }else{
        obj.id = data[data.length-1].id +1
    }
    data.push(obj);
    localStorage.setItem("expense", JSON.stringify(data));
}

function render(){
    let list = document.getElementById("mytable");
    list.innerHTML = "";
    let head = document.createElement("thead");
    head.innerHTML = "<th>#</th><th>Amount</th><th>Category</th><th>Description</th><th>Edit</th><th>Delete</th>";
    list.append(head);
    let data = getData();
    if(data !== null){
        let i=1;
        data.map(e=>{
        let tr = document.createElement("tr");
        tr.innerHTML=`<td>${i}</td><td>${e.amount}</td><td>${e.category}</td><td>${e.description}</td><td><button type="button" class="btn btn-info edit">Edit</button></td><td><button type="button" class="btn btn-danger delete" onclick="del">Delete</button></td>`;
        list.append(tr);
        i++;
        })
    }
}

function del(e){
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure you want to delete this item?')) {
            var tr = e.target.parentElement.parentElement;
            var currentObjIndex = +(tr.childNodes[0].textContent)-1;
            list.removeChild(tr);
            dele(currentObjIndex);
        }
      } else if (e.target.classList.contains('edit')) {
            var tr = e.target.parentElement.parentElement;
            var currentText = tr.childNodes[1].textContent;
            var currentObjIndex = +(tr.childNodes[0].textContent)-1;
            var newText = prompt('Edit the item:', currentText);
            if (newText !== null && newText.trim() !== '') {
            tr.childNodes[1].textContent = newText;
            edited(currentObjIndex, newText);
        }
      }
}

function dele(index){
    let data = getData();
    let data2 = data.filter(e=>{
        if(e.id === data[index].id){
            console.log("matched");
            return false;
        }else{
            console.log(e.id);
            return true;
        }
   
    })
    localStorage.setItem("expense", JSON.stringify(data2));
    console.log(getData());
}

function edited(index, amount){
    let data = getData();
    data.map(e=>{
        if(e.id === data[index].id){
            e.amount = amount;
        }
    })
    localStorage.setItem("expense", JSON.stringify(data));
}


