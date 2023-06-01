const url = 'http://localhost:3030/user'

axios.get(url)
    .then((res) => {
        document.getElementById('table-data').innerHTML = res.data.map((user) => {
            return (
                '<tr>' +
                '<td>' + user._id + '</td>' +
                '<td>' + user.name + '</td>' +
                '<td>' + user.email + '</td>' +
                '</tr>'
            );
        }).join('');
    })