    document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('login');

    form.addEventListener('submit' , function (event){
        event.preventDefault();
        const formData = new FormData(form);// transforma em objeto para conseguir extrair os dados 
        const user = Object.fromEntries(formData.entries());// extraindo os dados.
        console.log(user);
        let textoSaida = `Olá ${user.nome}!`;
        alert(textoSaida);
    })

})