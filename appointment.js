myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var n = document.getElementById("name");
  var e = document.getElementById("email");
  container.innerHTML = "";
  axios
    .post("https://crudcrud.com/api/fbeb67f713f048c89d57f851b4c77102/users", {
      name: n.value,
      email: e.value,
    })
    .then(
        location.reload()
    )
    .catch((error) => {console.log(error);});
   n.value = "";
   e.value = "";

  //console.log(myObj_Serialized);
});


function showOutput(res) {
  res.forEach((user) => {
    let email = user.email;
    container.innerHTML += `
    <p>name : ${user.name}
    email: ${user.email}
    <button id="delete" onclick="deleteUser('${email}')">Delete</button>
    <button id="edit" onclick="editUser('${user}'}')">Edit</button>
    </p>
`;
  });
}
