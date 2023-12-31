// axios globals

axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


// GET REQUEST
function getTodos() {
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res=>{
        showOutput(res);
    })
    .catch(err=>{
        console.error(err);
    })
  }
  
  // POST REQUEST
  function addTodo() {
    axios.post('https://jsonplaceholder.typicode.com/todos', {userId: 1, title:'Hello todos', completed: false})
    .then((res)=>{
        showOutput(res);
    })
    .catch((err)=>{
        console.error(err);
    })
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    axios
    .put('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
        showOutput(res)
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  
  // DELETE REQUEST
  function removeTodo() {
    axios
    .put('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
        showOutput(res)
    })
    .catch((err)=>{
        console.log(err);
    })
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10'), 
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')])
    .then(axios.spread((todos, users) => {
        showOutput(todos);
        console.log(users);
    }))
    .catch(error => {
        console.error('Error:', error);
    });
}

  // CUSTOM HEADERS
  function customHeaders() {
    const config = {
        headers:{
            'Content-Type': 'Application/json',
            "Authorization-Token": "this-Token"
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/todos', {userId: 1, title:'Hello todos', completed: false},config)
    .then((res)=>{
        showOutput(res);
    })
    .catch((err)=>{
        console.error(err);
    })
  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const option = {
        method : 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data : {
            userId: 1, 
            title:'Hello todos', 
            completed: false
        },
        transformResponse : axios.defaults.transformResponse.concat(data=>{
            data.title = data.title.toUpperCase();
            return data;
        })
    }
    axios(option).then(res=>showOutput(res));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios
    .get('https://jsonplaceholder.typicode.com/todoss?_limit=5')
    .then(res=>{
        showOutput(res);
    })
    .catch(err=>{
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.message);

            if(err.response.status === 404){
                alert("Page not found");
            }
        }else{
            console.log(err.message);
        }
    })
  }
  
  // CANCEL TOKEN
  function cancelToken() {
   const source = axios.CancelToken.source();
   axios
    .get('https://jsonplaceholder.typicode.com/todoss?_limit=5',{cancelToken: source.token})
    .then(res=>{
        showOutput(res);
    })
    .catch(err =>{
        if(axios.isCancel(err)){
            console.log('Request cancelled', err)
        }
    });
    if(true){
        source.cancel("Request cancelled")
    }
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);