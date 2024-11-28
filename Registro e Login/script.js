document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.sign-up form');
    const nameInput = form.querySelector('input[placeholder="Nome"]');
    const phoneInput = form.querySelector('input[placeholder="Telefone"]');
    const emailInput = form.querySelector('input[placeholder="E-mail"]');
    const passwordInput = form.querySelector('input[placeholder="Senha"]');
    const submitButton = form.querySelector('button');

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userData = {
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        localStorage.setItem('user', JSON.stringify(userData));

        alert('Conta criada com sucesso!');

        form.reset();
    });

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
});
