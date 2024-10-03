
const app =document.getElementById("formulario")

const componente = (parametro1, parametro2, parametro3) =>{
    return ` 
    <fieldset>
        <legend>${parametro1}</legend>
        <label>${parametro2}</label>
        <input class="form-control" type="text"  >
        <label>${parametro3}</label>
        <input class="form-control" type="text"  >
    </fieldset>
    
         `
}


app.innerHTML = componente("Informacion Personal:", "Nombre: ","Correo Electronico") + 
                componente(" Informacion de direccion: ", "Direccion: ", "Ciudad: ")

