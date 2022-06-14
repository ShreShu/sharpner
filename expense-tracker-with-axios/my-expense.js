let myform = document.getElementById("expense-form")
let submitButton = document.getElementById("submit")
let editButton = document.getElementById("edit")
let editedKey = "";


document.addEventListener("DOMContentLoaded", () => {
    viewData()
})

// const listOfPeople = []
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (editedKey === "") {
        addData()
    }
    else {
        editData()
    }
}
);


const reset = () => {

    document.getElementById("amount").value = ''
    document.getElementById("description").value = ''
    document.getElementById("category").value = ''
}




async function viewData () {
    const expenseDetails = document.getElementById("expenseDetails")
    expenseDetails.innerHTML = '';

const {data}=await axios.get("https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/expense")
console.log(data);
data.forEach((expanse) => {
            expenseDetails.innerHTML += `
            <tr>
            <td><b>Amount</b></td>
            <td>${expanse.amount}</td>
            <td><b>Description</b></td>
            <td>${expanse.description}</td>
            <td><b>Category</b></td>
            <td>${expanse.category}</td>
            <td> <button onclick="deleteExpense('${expanse._id}')">Delete</button></td>
            <td> <button onclick="editExpense('${expanse._id}')">Edit</button></td>
            </tr>
            `

        
    })
}

async function deleteExpense (key) {
    await axios.delete(`https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/expense/${key}`)
    viewData()
}
async function editExpense (key){

    editedKey = key;
    const {data} = await axios.get(`https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/expense/${editedKey}`)
    
    document.getElementById("amount").value = data.amount
    document.getElementById("description").value = data.description
    document.getElementById("category").value = data.category


}



async function editData() {
    let amount = document.getElementById("amount").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value

    const expenseObj = {
        amount,
        description,
        category
    }

    const data=  await axios.put(`https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/expense/${editedKey}`,expenseObj)
    editedKey = ""
    reset()
    viewData()
}

async function addData(){
    let amount = document.getElementById("amount").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value

    const expenseObj = {
        amount,
        description,
        category
    }

 const data=  await axios.post("https://crudcrud.com/api/c6c3e4520dc147049dc54539b3c81152/expense",expenseObj)

 console.log(data);
    
    reset();
    viewData()
}
