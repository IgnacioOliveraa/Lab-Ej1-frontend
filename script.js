const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

async function fetchUsers() {
  const res = await fetch("/api/users/");
  const users = await res.json();
  userList.innerHTML = "";
  users.forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.nombre} — ${u.email} — ${u.telefono}`;
    userList.appendChild(li);
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    nombre: document.getElementById("nombre").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value
  };
  await fetch("/api/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  form.reset();
  fetchUsers();
});

fetchUsers();