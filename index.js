function aparecerMenu(){
    const menu = document.querySelector('.navCel')
    if (menu.classList.contains('open')){
        menu.classList.remove('open')
    }else{
        menu.classList.add('open')
    }
}

const formulario = document.querySelector('#formulario1');
const nomeInput = document.querySelector("#nome");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const areaTxt = document.querySelector("#texto");

console.log(nomeInput)
formulario.addEventListener("submit",(event) => {
    event.preventDefault();
    if (nomeInput.value === ''){
        alert('Digite seu nome');
        return
    }
    if (email.value === ''){
        alert('Digite seu e-mail');
        return
    }
    if (senha.value === ''){
        alert('Digite sua senha');
        return
    }
    if (email.value === '' || !validarEmail(email.value)){
        alert('Preencha seu email corretamente.');
        return
    }
    alert('Entraremos em contato através do endereço '+email.value)
    formulario.submit()
})

// função que valida o email
function validarEmail(emaill){
 //criar uma regex para validar 
 const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
)
if(emailRegex.test(emaill)){
    return true
}
return false
}
(function(){
    var text = document.querySelector('input#cpf')
    var btn = document.querySelector('button.botao')
    var padraoCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
    text.addEventListener('input',function(){
        var texto = this.value
        if(padraoCPF.test(texto)){
            btn.disabled = false
        }else{
            btn.disabled = true
        }
    })
})()
