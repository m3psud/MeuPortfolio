var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header')
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;

    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}
function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

window.addEventListener('resize', function (event) {
    if (window.innerWidth > 790 && showSidebar) {

        toggleSidebar();
    }
});


//API

const repoProjects = () => {
    const url = "https://api.github.com/users/m3psud/repos"
    fetch(url)
        .then(resp => resp.json())
        .then(projects => {
            console.log(projects)
        })
}
repoProjects()
document.addEventListener("DOMContentloaded", function startApp() {

})
let api = getElementById('project-github')
append.child(api)


//validação do formulario de contato

 const form = document.getElementById('form')
 const nome = document.getElementById('username')
 const email = document.getElementById('email')
 const assunto = document.getElementById('assunto')
 const mensagem = document.getElementById('mensagem')

 form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

 function checkInputs(){
   
   
    const nomeValue = username.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()
     
    if (nomeValue === '' ) 
      {
        errorValidation(username, 'Preencha esse campo')
      }
      else if(nomeValue.length < 3){
        errorValidation(username, 'O nome deve conter pelo menos 3 caracteres')

      }
      else 
      {
       successValidation(username)
      }

      if (emailValue === '' ) 
      {
        errorValidation(email, 'Preencha esse campo')
      }
     
      else 
      {
       successValidation(email)
      }

      if (assuntoValue === '' ) 
      {
        errorValidation(assunto, 'Preencha esse campo')
      }
      else if(assuntoValue.length < 3){
        errorValidation(assunto, 'O assunto deve conter pelo menos 3 caracteres')

      }
      else 
      {
       successValidation(assunto)
      }


    
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message;
    formControl.className = 'form-control error'

}
 function successValidation(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
    
 }