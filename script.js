document.getElementById('btn-enviar').addEventListener('click', function(event) {
    event.preventDefault();
    
    const nome = document.querySelector('input[type="text"]');
    const idade = document.querySelector('input[type="number"]');
    const email = document.querySelector('input[type="email"]');
    const mensagem = document.querySelector('textarea');
    
    let valido = true;

    if (nome.value === '') {
        nome.nextElementSibling.style.display = 'block';
        valido = false;
    } else {
        nome.nextElementSibling.style.display = 'none';
    }

    if (idade.value.trim() === '') {
        document.getElementById('erro-idade-vazio').style.display = 'block';
        document.getElementById('erro-idade-minima').style.display = 'none';
        valido = false;
    } else if (parseInt(idade.value) < 14) {
        document.getElementById('erro-idade-minima').style.display = 'block';
        document.getElementById('erro-idade-vazio').style.display = 'none';
        valido = false;
    } else {
        document.getElementById('erro-idade-vazio').style.display = 'none';
        document.getElementById('erro-idade-minima').style.display = 'none';
    }

    if (email.value.trim() === '' || !email.value.includes('@')) {
        email.nextElementSibling.style.display = 'block';
        valido = false;
    } else {
        email.nextElementSibling.style.display = 'none';
    }

    if (mensagem.value === '') {
        mensagem.nextElementSibling.style.display = 'block';
        valido = false;
    } else {
        mensagem.nextElementSibling.style.display = 'none';
    }

    if (valido) {
        document.getElementById('mensagem-sucesso').style.display = 'block';
    
        setTimeout(function() {
        document.querySelector('form').reset();
        document.getElementById('mensagem-sucesso').style.display = 'none';
        }, 3000); // 3000 = 3 segundos
    }
});