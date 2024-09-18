
        const app =document.getElementById("app")
        const url="https://picsum.photos/id/"
        const size= "/200/200"
        const Picture =parametros => {
            const src= url+parametros+size
            return `
            <figure>
                <img src="https://picsum.photos/id/${parametros}/200/200"  alt="" id="$(parametros)">
        <figcaption >${parametros}</figcaption>
         </figure>`
        }
        console.log(Picture())
        app.innerHTML=Picture(1)+Picture(2)+Picture(3)

        const elemento = document.getElementById("1")
        
        const elemento2 = document.getElementById("2")
        
        const elemento3 = document.getElementById("3")

        elemento.addEventListener("click",miFuncion)
        elemento2.addEventListener("click",miFuncion)
        elemento3.addEventListener("click",miFuncion)

        function miFuncion(){
            console.log("hayyy: ")
            console.log(parametros)
        }