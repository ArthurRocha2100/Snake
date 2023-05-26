document.getElementById('edit-btn').onclick = () =>{
    document.getElementById('edit-div').classList.remove('d-none')
}

document.getElementById('close_btn-edit').onclick = () => {
    document.getElementById('edit-div').classList.add('d-none')
}

document.getElementById('edit_div-btn').onclick = () => {
    const url = 'http://localhost:3000/user'

    var idEdit = document.getElementById('user-edit_id').value;
    var nameEdit = document.getElementById('user-edit_name').value;
    var emailEdit = document.getElementById('user-edit_email').value;
    var passwordEdit = document.getElementById('user-edit_password').value;

    
    const data = {
        name: nameEdit,
        email: emailEdit,
        password: passwordEdit
    }

    axios.put(url+'/'+idEdit,data)
        .then((res) => {
            output.innerHTML = res.data;
        })
        .catch((err) => {
            output.innerHTML = err.message;
            alert('deu errado')
        })

    alert('usuario editado com sucesso')
}