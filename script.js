const form =document.getElementById("studentForm")
const table =document.getElementById("studenttabbody")

form.addEventListener("submit" ,(Event) => {
    Event.preventDefault()
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const pincode = document.getElementById("pincode").value;
    const address = document.getElementById("address").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name ="gender"]:checked').value;

    const newrow =document.createElement("tr")

newrow.innerHTML = `
    <td>${firstname}</td>
    <td>${lastname}</td>
    <td>${email}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${state}</td>
    <td>${country}</td>
`;
table.append(newrow)
form.reset();
})

