// Declaring variables to select elements by id name
let btnAdd = document.querySelector('#button');
let table = document.querySelector('#table');
let firstNameInput = document.querySelector('#first-name');
let lastNameInput = document.querySelector('#last-name');
let telInput = document.querySelector('#tel');
let birthdateInput = document.querySelector('#birthdate');

// Adding event listener for action once button is clicked
btnAdd.addEventListener('click', () => {
    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let tel = telInput.value;
    let birthdate = birthdateInput.value;

    //This is the template to insert new field inputs
    let tableRow = `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${tel}</td>
        <td>${birthdate}</td>
    </tr>
    `
    table.innerHTML += tableRow;
    
    // Once btn is clicked, input field resets /clears
    firstNameInput.value = '';
    lastNameInput.value = '';
    telInput.value = '';
    birthdateInput.value = '';
});
