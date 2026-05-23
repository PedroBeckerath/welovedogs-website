function toggleDark() {
    document.body.classList.toggle('dark');
    
    const btn = document.getElementById('btn-dark');
    if (document.body.classList.contains('dark')) {
        btn.textContent = 'Modo claro';
        localStorage.setItem('dark', 'true');
    } else {
        btn.textContent = 'Modo escuro';
        localStorage.setItem('dark', 'false');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('dark') === 'true') {
        document.body.classList.add('dark');
        document.getElementById('btn-dark').textContent = 'Modo claro';
    }
});

function toggleMenu() {
    document.querySelector('.nav-menu').classList.toggle('aberto');
}