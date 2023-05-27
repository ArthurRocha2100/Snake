document.getElementById('user-email').onchange = () => {
    const url = 'http://localhost:3000/auth/login';

    var emailLogin = document.getElementById('user-email').value;

    const emailRequired = {
        email: emailLogin

    } 
    console.log(emailRequired);

    axios.post(url, emailRequired)
        .then(() => {
            document.getElementById('msg').innerHTML = (
                '<div class=" w-75 mt-5 alert alert-danger position-fixed top-0 start-50 translate-middle" role="alert">' +
                'O e-mail informado já está em utilização'+
                '</div>'
            )
            setTimeout(()=>{
                document.getElementById('msg').classList.add('d-none')
            },4000)
        })
        .catch((err) => {
            console.log(err.message);
        })
}


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
}