
myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var n = document.getElementById('name');
    var e = document.getElementById('email');

axios.post("https://crudcrud.com/api/fbeb67f713f048c89d57f851b4c77102/users",{
    name:n.value,
    email:e.value
})
    n.value = '';
    e.value = ''

})
