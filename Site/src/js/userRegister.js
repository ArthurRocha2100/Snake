
document.getElementById('post-btn').onclick = () => {
    const url = 'http://localhost:3000/user'
    var userName = document.getElementById('user-name').value;
    var userEmail = document.getElementById('user-email').value;
    var userPassword = document.getElementById('user-password').value;
    
    const data = {
        name: userName,
        email: userEmail,
        password: userPassword
    }

    axios.post(url, data)
        .then((res) => {
            output.innerHTML = res.data;
        })
        .catch((err) => {
            output.innerHTML = err.message;
        })

    alert('Usuário cadastrado com sucesso')
}