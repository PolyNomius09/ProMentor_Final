document.getElementById('gestionar-usuarios-btn').addEventListener('click', function() {
    document.querySelector('.welcome-section').classList.add('hidden');
    document.getElementById('gestionar-usuarios').classList.remove('hidden');
    document.getElementById('gestionar-asesorias').classList.add('hidden');
    document.querySelector('.buttons').classList.add('hidden'); // Ocultar botones de gestión
});


document.getElementById('gestionar-usuarios-btn').addEventListener('click', function() {
    document.querySelector('.welcome-section').classList.add('hidden');
    document.getElementById('gestionar-usuarios').classList.remove('hidden');
    document.getElementById('gestionar-asesorias').classList.add('hidden');
    document.querySelector('.buttons').classList.add('hidden'); // Ocultar botones de gestión

    // Obtener la URL base del servidor donde se sirve el HTML
    const baseUrl =  "http://localhost:3000/api"

    fetch(baseUrl + '/users')
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById('user-table');
            table.innerHTML = ''; // Limpiar tabla antes de agregar nuevos usuarios
            data.forEach(user => {
                const row = table.insertRow();
                row.insertCell(0).innerText = user.boleta_usuario;
                row.insertCell(1).innerText = user.nombre_usuario;
                row.insertCell(2).innerText = user.apellido_usuario;
                row.insertCell(3).innerText = user.correo_usuario;
                row.insertCell(4).innerText = user.id_unidadAcademica;
                row.insertCell(5).innerText = user.id_grupo;
                const actionsCell = row.insertCell();
                const deleteBtn = document.createElement('button');
                deleteBtn.innerText = 'Eliminar';
                deleteBtn.addEventListener('click', function() {
                    // Aquí puedes implementar la lógica para eliminar un usuario si lo deseas
                });
                actionsCell.appendChild(deleteBtn);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al cargar usuarios');
        });
});



document.querySelectorAll('.cancel-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.welcome-section').classList.remove('hidden');
        document.getElementById('gestionar-usuarios').classList.add('hidden');
        document.getElementById('gestionar-asesorias').classList.add('hidden');
        document.querySelector('.buttons').classList.remove('hidden'); // Mostrar botones de gestión
    });
});

document.getElementById('add-user-btn').addEventListener('click', function() {
    document.getElementById('user-modal').classList.remove('hidden');
    document.getElementById('user-modal').style.display = 'block';
});

document.getElementById('add-subject-btn').addEventListener('click', function() {
    document.getElementById('subject-modal').classList.remove('hidden');
    document.getElementById('subject-modal').style.display = 'block';
});

document.querySelectorAll('.modal-cancel-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.modal').classList.add('hidden');
        document.querySelector('.modal').style.display = 'none';
    });
});

// Funcionalidad para guardar usuario
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('user-name').value;
    const boleta = document.getElementById('user-boleta').value;
    const username = document.getElementById('user-username').value;
    const role = document.getElementById('user-role').value;

    const table = document.getElementById('user-table');
    const row = table.insertRow(-1);
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = boleta;
    row.insertCell(2).innerText = username;
    row.insertCell(3).innerText = role;
    const actionsCell = row.insertCell(4);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Eliminar';
    deleteBtn.addEventListener('click', function() {
        table.deleteRow(row.rowIndex);
    });
    actionsCell.appendChild(deleteBtn);

    document.getElementById('user-modal').classList.add('hidden');
    document.getElementById('user-modal').style.display = 'none';
    document.getElementById('user-form').reset();
});

// Funcionalidad para guardar materia
document.getElementById('subject-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('subject-name').value;
    const group = document.getElementById('subject-group').value;
    const cupo = document.getElementById('subject-cupo').value;
    const description = document.getElementById('subject-description').value;
    const aula = document.getElementById('subject-aula').value;
    const tema = document.getElementById('subject-tema').value;
    const horario = document.getElementById('subject-horario').value;

    const table = document.getElementById('subject-table');
    const row = table.insertRow(-1);
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = group;
    row.insertCell(2).innerText = cupo;
    row.insertCell(3).innerText = description;
    row.insertCell(4).innerText = aula;
    row.insertCell(5).innerText = tema;
    row.insertCell(6).innerText = horario;
    const actionsCell = row.insertCell(7);
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Eliminar';
    deleteBtn.addEventListener('click', function() {
        table.deleteRow(row.rowIndex);
    });
    actionsCell.appendChild(deleteBtn);

    document.getElementById('subject-modal').classList.add('hidden');
    document.getElementById('subject-modal').style.display = 'none';
    document.getElementById('subject-form').reset();
});


document.getElementById('add-user-btn').addEventListener('click', function() {
    document.getElementById('user-modal').classList.remove('hidden');
    document.getElementById('user-modal').style.display = 'block';
});

document.querySelectorAll('.modal-cancel-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelector('.modal').classList.add('hidden');
        document.querySelector('.modal').style.display = 'none';
    });
});

document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const boleta = document.getElementById('user-boleta').value;
    const password = document.getElementById('user-password').value;
    const nombre = document.getElementById('user-nombre').value;
    const apellido = document.getElementById('user-apellido').value;
    const correo = document.getElementById('user-correo').value;
    const unidadAcademica = document.getElementById('user-unidadAcademica').value;
    const grupo = document.getElementById('user-grupo').value;

    fetch('/api/crearusuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ boleta, password, nombre, apellido, correo, unidadAcademica, grupo })
    })
    .then(response => response.json())
    .then(data => {
        if (data.boleta_usuario) {
            const table = document.getElementById('user-table');
            const row = table.insertRow(-1);
            row.insertCell(0).innerText = boleta;
            row.insertCell(1).innerText = nombre;
            row.insertCell(2).innerText = apellido;
            row.insertCell(3).innerText = correo;
            row.insertCell(4).innerText = unidadAcademica;
            row.insertCell(5).innerText = grupo;
            const actionsCell = row.insertCell(6);
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Eliminar';
            deleteBtn.addEventListener('click', function() {
                table.deleteRow(row.rowIndex);
            });
            actionsCell.appendChild(deleteBtn);
    
            document.getElementById('user-modal').classList.add('hidden');
            document.getElementById('user-modal').style.display = 'none';
            document.getElementById('user-form').reset();
        } else {
            alert('Error al guardar el usuario');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al guardar el usuario');
    });
});
