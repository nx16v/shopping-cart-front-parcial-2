document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!email || !password) {
    alert("Todos los campos son obligatorios.");
  } else if (!email.includes("@")) {
    alert("Correo inválido.");
  } else {
    window.location.href = "index.html";
  }
});
