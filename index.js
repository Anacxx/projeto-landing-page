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
    if (email.value === '' || !validarEmail(email.value)){
        alert('Preencha seu email corretamente.');
        return
    }
    formulario.submit()
})

// função que valida o email
function validarEmail(bla){
 //criar uma regex para validar 
 const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
)
if(emailRegex.test(bla)){
    return true
}
return false
}