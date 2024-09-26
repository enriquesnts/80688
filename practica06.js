const usuario = false
const password = false

const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", e =>{
e.preventDefault()
console.log("se presiono el botón enviar")
if(usuario && password){
    console.log("Enviando")
    formulario.submit()
}

})


const x = document.getElementById("x")//Se llama el id de
x.addEventListener("focusout",()=>{  //Cuando le cursor deja de focusear la caja de texto
    if(x.value.length == 0){
        document.getElementById("mensaje1").innerHTML = "El campo está vacío" //Si no hay nada muestra "El campo esta vacio"
    }else{
        document.getElementById("mensaje1").innerHTML = ""//Al poner algo se deja de mostrar el mensaje
        usuario = true
    }

})

const enviar = document.getElementById("xx")

const y  = document.getElementById("y")
y.addEventListener("keypress",e=>{
console.log(e.key + " " + y.value.length)
if(y.value.length == 4){
    enviar.focus()
    password = true
}
    
})


function limpiar(){
    x.value = ""
    y.value = ""
}