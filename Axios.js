//Axios globals
axios.defaults.headers.common['X-Auth-Token']='abcdefghij'


// GET REQUEST
function getTodos() {

 axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5',{timeout:5})
  .then(res=>{console.log(res)})
  .catch(error=>{console.log(error);})
}

// POST REQUEST
function addTodo() {
  axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:'New todo',
      completed:true
    }
  ).then(res=>{
    showOutput(res);
  })
  .catch(error=>{
    showOutput(res);
  })
  
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put('https://jsonplaceholder.typicode.com/todos/1',{
    title:'Updated todo',
    completed:true
  
  })
  .then(res=>{
  showOutput(res);
})
.catch(error=>{
  showOutput(res);
})
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=>{
  showOutput(res);
})
.catch(error=>{
  showOutput(res);

})
}

// SIMULTANEOUS DATA
function getData() {
axios.all([
  axios.get('https://jsonplaceholder.typicode.com/todos'),
  axios.get('https://jsonplaceholder.typicode.com/posts')
])
.then(axios.spread((a,posts)=>{
  console.log(a);
  console.log(posts);
}))
.catch(error=>{
  console.log(error);
})
}

// CUSTOM HEADERS
function customHeaders() {


  const config={
    headers:{
      'Content-Type':'application/json',
      Authorization:'sometokens'
    }
  }

  axios.post('https://jsonplaceholder.typicode.com/todos',{
      title:'New todo',
      completed:true
    },config
  ).then(res=>{
    showOutput(res);
  })
  .catch(error=>{
    showOutput(res);
  })
  

}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {

  const options={
    method:'post',
    url:'https://jsonplaceholder.typicode.com/todos',
    data:{
      title:'Hello World'
    }
,
    transformResponse:axios.defaults.transformResponse.concat(data=>{
      data.title=data.title.toUpperCase();
      return data;
    })
  }

  axios(options).then(res=>showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios.get('https://jsonplaceholder.typicode.com/todosss')
  .then(res=>{console.log(res)})
  .catch(error=>{

    if(error.response){
//server responsed with a status other than 200 range
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    else if(error.request){
      //Request was made but no response
      console.error(error.request);
    }
    else{
      console.log(error.message);
    }
  })



}

// CANCEL TOKEN
function cancelToken() {

  const source =axios.CancelToken.source();

  axios.get('https://jsonplaceholder.typicode.com/todos',{
    cancelToken:source.token
  })
  .then(res=>{console.log(res)})
.catch(thrown=>{
  if(axios.isCancel(thrown)){
    console.log('Request Canceled',thrown.message);
  }
});
if(true){
  source.cancel('Request cancelled')
}

}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(config=>{
  console.log(`${config.method.toUpperCase()} request send to ${config.url} at${new Date().getTime()}`);

return config;
}, error=>{
  return Promise.reject(error)
})


// AXIOS INSTANCES
const axiosInstance=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})

axiosInstance.get('/comments').then(res=>showOutput(res)).catch(error)

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
