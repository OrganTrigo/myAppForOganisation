let form_index = document.getElementById('form_index');
form_index.addEventListener('submit',()=>{
    sessionStorage.setItem('nom',document.getElementById('nom').value);
    sessionStorage.setItem('mail',document.getElementById('mail').value);
})
