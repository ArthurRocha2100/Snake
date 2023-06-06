document.getElementById('login-btn').onmousedown = () => {
            
    const url = 'http://localhost:3000/auth/login/user'
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    const key ='';
    const data =  {
        email: email,
        password: password
    }

    axios.post(url, data)
        .then((res) => {
            key.innerHTML = res.data;
            window.location.href='arena.html'
        })
        .catch((err) => {
            output.innerHTML = err.message;
            alert('usuário ou senha inválido')
        })
}