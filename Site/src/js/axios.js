const url = 'http://localhost:3000/user'

axios.get(url)
    .then((res) => {
        document.getElementById('table-data').innerHTML = res.data.map((user) => {
            return (
                '<tr>' +
                '<td>' + user._id + '</td>' +
                '<td>' + user.name + '</td>' +
                '</tr>'
            );
        }).join('');
    })

document.getElementById('post-btn').onclick = () => {
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