const url = "https://fakestoreapi.com/users";

const giveUsers = document.querySelector("#container-users");

window.addEventListener("DOMContentLoaded",()=>{

    const giveDOM = (data)=>{
        data.forEach(dato => {
            const element = document.createElement("tr");
            element.innerHTML= `
            <td>${dato.id}</td>
            <td>${dato.name.firstname+" "+dato.name.lastname}</td>
            <td>${dato.email}</td>
            <td>${dato.username}</td>
            <td>${dato.password}</td>
            <td>${dato.address.city}</td>
            <td>${dato.address.street+" "+dato.address.number+" "+dato.address.zipcode}</td>
            `;
            giveUsers.appendChild(element);
        });

    }

    const getUsers = async (url)=>{
        let data = await fetch(url);
        let users = await data.json();
        giveDOM(users);
        console.log(users);
    } 
    getUsers(url);
})

