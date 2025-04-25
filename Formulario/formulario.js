document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('login');

    form.addEventListener('submit' , function (event){
        event.preventDefault();
        const formData = new FormData(form);
        const user = Object.fromEntries(formData.entries());
        console.log(user);
        let textoSaida = `Olá ${user.nome}!`;
        alert(textoSaida);
    })

})