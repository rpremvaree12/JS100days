const btn = document.querySelector("#btn");

btn.addEventListener("click",getUsers);

// create functions

function getUsers(e){
    e.preventDefault();

    const http = new XMLHttpRequest();

    http.open("GET","users.json", true);

    http.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);

            // json is as a string. parse it to convert into object
            const users = JSON.parse(this.responseText);

            let output = "";
            users.forEach(function(user){
                output += `
                <hr>
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Age: ${user.age}</li>
                    <li>Email: ${user.email}</li>
                </ul>
                `
            })

            document.querySelector("#users").innerHTML = output
        }

    }

    http.send();
}