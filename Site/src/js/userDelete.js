document.getElementById('delete-btn').onclick = () =>{
    document.getElementById('delete-div').classList.remove('d-none')
}

document.getElementById('close-btn').onclick = () => {
    document.getElementById('delete-div').classList.add('d-none')
}

document.getElementById('delete_div-btn').onclick = () => {
    const url = 'http://localhost:3000/user'

    const idDelete = document.getElementById('id_user-delete').value
    
    axios.delete(url+'/'+ idDelete)

    alert('usuario excluido com sucesso')
}