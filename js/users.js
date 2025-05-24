document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
      const tbody = document.getElementById("users-body");
      data.users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.firstName} ${user.lastName}</td>
          <td>${user.email}</td>
          <td><button class="btn btn-info btn-sm" onclick="showUserDetail(${user.id})">Ver</button></td>
        `;
        tbody.appendChild(row);
      });
    });
});

function showUserDetail(id) {
  fetch(`https://dummyjson.com/users/${id}`)
    .then(res => res.json())
    .then(user => {
      document.getElementById("modal-title").textContent = user.firstName + " " + user.lastName;
      document.getElementById("modal-body").innerHTML = `
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Edad:</strong> ${user.age}</p>
        <p><strong>Teléfono:</strong> ${user.phone}</p>
        <p><strong>Dirección:</strong> ${user.address.address}</p>
      `;
      new bootstrap.Modal(document.getElementById("detailModal")).show();
    });
}