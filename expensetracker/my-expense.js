let myform = document.getElementById("expense-form")
let submitButton = document.getElementById("submit")
let editButton = document.getElementById("edit")
let editedKey = "";
function generateKey() {
    localStorage.getItem()
}


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




const viewData = () => {
    const expenseDetails = document.getElementById("expenseDetails")
    expenseDetails.innerHTML = '';

    Object.keys(localStorage).forEach((key) => {

        if (key.match(/expense/g)) {
            const expenseDeserialised = JSON.parse(localStorage.getItem(key))

            expenseDetails.innerHTML += `
            <tr>
            <td><b>Amount</b></td>
            <td>${expenseDeserialised.amount}</td>
            <td><b>Description</b></td>
            <td>${expenseDeserialised.description}</td>
            <td><b>Category</b></td>
            <td>${expenseDeserialised.category}</td>
            <td> <button onclick="deleteExpense('${key}')">Delete</button></td>
            <td> <button onclick="editExpense('${key}')">Edit</button></td>
            </tr>
            `

        }
    })
}

const deleteExpense = (key) => {
    localStorage.removeItem(key)
    viewData()
}
const editExpense = (key) => {


    const expenseDetail = JSON.parse(localStorage.getItem(key))
    editedKey = key;
    console.log(editedKey)
    document.getElementById("amount").value = expenseDetail.amount
    document.getElementById("description").value = expenseDetail.description
    document.getElementById("category").value = expenseDetail.category


}



const editData = () => {
    let amount = document.getElementById("amount").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value

    const expenseObj = {
        amount,
        description,
        category
    }



    localStorage.setItem(editedKey, JSON.stringify(expenseObj))
    editedKey = ""
    reset()
    viewData()
}

const addData = () => {
    const id = Date.now()
    let amount = document.getElementById("amount").value
    let description = document.getElementById("description").value
    let category = document.getElementById("category").value

    const expenseObj = {
        amount,
        description,
        category
    }

    localStorage.setItem("expense" + id.toString(), JSON.stringify(expenseObj))
    reset();
    viewData()
}
