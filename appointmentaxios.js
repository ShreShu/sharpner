var myForm = document.getElementById("my-form");
var container = document.getElementById("userData");

let idEdit=""

function editUser(id){
    idEdit=id;
    axios.get(
        `https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/userdata/${id}`
      ).then(res=>{
        document.getElementById("name").value=res.data.name
        document.getElementById("email").value=res.data.email
      })
      .catch(error=>{console.log(error);})
    
}



function showAllData(){
    container.innerHTML = "";
  axios
    .get("https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/userdata")
    .then((res) => showOutput(res.data))
    .catch((error) => {
      console.log(error);
    });
}


function deleteUser(id) {
console.log(id);
  axios.delete(
    `https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/userdata/${id}`
  ).then(showAllData)
  .catch(error=>{console.log(error);})

}

document.addEventListener("DOMContentLoaded", () => {
  container.innerHTML = "";
  axios
    .get("https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/userdata")
    .then((res) => showOutput(res.data))
    .catch((error) => {
      console.log(error);
    });
});

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var n = document.getElementById("name");
  var e = document.getElementById("email");
  container.innerHTML = "";


  if(idEdit===""){
    axios
    .post("https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/userdata", {
      name: n.value,
      email: e.value,
    })
    .then(showAllData)
    .catch((error) => {console.log(error);});
  }
else{
    axios
    .put(`https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/userdata/${idEdit}`, {
      name: n.value,
      email: e.value,
    })
    .then(showAllData)
    .catch((error) => {console.log(error);});

}
   n.value = "";
   e.value = "";
idEdit=""
  //console.log(myObj_Serialized);
});

function showOutput(res) {
  res.forEach((user) => {
    container.innerHTML += `
    <p>name : ${user.name}
    email: ${user.email}
    <button id="delete" onclick="deleteUser('${user._id}')">Delete</button>
    <button id="edit" onclick="editUser('${user._id}')">Edit</button>
    </p>
`;
  });
}


