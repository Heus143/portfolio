// JavaScript Object

const student = {

    name: "Hemanth Kumar",
    course: "Python Full Stack",
    institute: "Codegnan",
    city: "Hyderabad"

};


// Display Object Data using DOM

function showProfile() {

    document.getElementById("student").innerHTML = `

    <h2>Student Information</h2>

    <p><b>Name:</b> ${student.name}</p>

    <p><b>Course:</b> ${student.course}</p>

    <p><b>Institute:</b> ${student.institute}</p>

    <p><b>City:</b> ${student.city}</p>

    `;

}



// Fetch API using async/await

async function getUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    let output = "<h2>Users from API</h2>";

    data.forEach(user => {

        output += `

        <div style="border:1px solid gray;
                    margin:10px;
                    padding:10px;
                    border-radius:8px;">

            <h3>${user.name}</h3>

            <p>Email : ${user.email}</p>

            <p>City : ${user.address.city}</p>

        </div>

        `;

    });

    document.getElementById("users").innerHTML = output;

}