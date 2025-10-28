# 🌐 Frontend — Laboratorio Ejercicio 1

Este proyecto implementa el **frontend** de la aplicación CRUD de usuarios, utilizando **HTML, CSS y JavaScript puro**.  
Se conecta al backend de Django a través de la API REST (`http://127.0.0.1:8000/api/users/`).

---

## ⚙️ Tecnologías utilizadas

- HTML5  
- CSS3  
- JavaScript (Fetch API)

---

## 🚀 Instrucciones para ejecutar

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/IgnacioOliveraa/Lab-Ej1-frontend.git
   cd Lab-Ej1-frontend


Abrir el archivo en el navegador.index.html
Completar el formulario y probar el envío.
Se deberían mostrar los usuarios listados desde el backend.

Estructura del proyecto:

frontend/
├── index.html
├── style.css
├── script.js
└── evidencias/
    ├── frontend_after_create.png
    ├── frontend_after__create.png
    ├── frontend_form.png
    └── frontend_mail_console.png


Evidencias
Evidencia	Descripción

	Formulario inicial del frontend

	Vista después de crear un nuevo usuario

	Segunda captura posterior a la creación

	Consola mostrando confirmación del envío

Comunicación con el backend

El frontend utiliza la siguiente API para interactuar con el backend:

fetch("http://127.0.0.1:8000/api/users/")