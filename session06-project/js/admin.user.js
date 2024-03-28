const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const nameAdmin = document.getElementById("name");
const users = JSON.parse(localStorage.getItem("users"));

nameAdmin.innerHTML = userLogin.userAcc;

function display(users) {
  const table = document.querySelector(".table");

  table.innerHTML += `
    <tr>  
      <th>#</th>
      <th>id</th>
      <th>Email</th>
      <th>Name</th>
      <th>status</th>
      <th></th>
    </tr>`;

  users.forEach((user, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.userAcc}</td>
        <td>${user.status}</td>
        <td><button onclick="changeStatus()">board</button></td>
      </tr>`;
  });
}
display(users);