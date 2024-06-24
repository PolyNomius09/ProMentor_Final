document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de datos del asesor, puedes reemplazarlos con los datos reales.
    const advisorName = "Rodriguez Reyes José Manuel";
    const advisorId = "2023640198";
    
    document.getElementById('advisor-name').textContent = advisorName;
    document.getElementById('advisor-id').textContent = advisorId;
});

document.querySelector('.icon-button-menu').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
    sidebar.style.display = sidebar.classList.contains('hidden') ? 'none' : 'block';
});

document.getElementById('close-sidebar-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('hidden');
    sidebar.style.display = 'none';
});

document.getElementById('logout-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
});