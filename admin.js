document.getElementById('gestionar-usuarios-btn').addEventListener('click', function() {
    document.querySelector('.welcome-section').classList.add('hidden');
    document.getElementById('gestionar-usuarios').classList.remove('hidden');
    document.getElementById('gestionar-asesorias').classList.add('hidden');
    document.querySelector('.buttons').classList.add('hidden'); // Ocultar botones de gestión
});

document.getElementById('gestionar-asesoria-btn').addEventListener('click', function() {
    document.querySelector('.welcome-section').classList.add('hidden');
    document.getElementById('gestionar-asesorias').classList.remove('hidden');
    document.getElementById('gestionar-usuarios').classList.add('hidden');
    document.querySelector('.buttons').classList.add('hidden'); // Ocultar botones de gestión
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
