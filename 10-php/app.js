console.log("Vinculado")

const formulario = document.getElementById("formulario")
const usuario = document.getElementById("texto-1")
const correo =  document.getElementById("texto-2")
const mensaje = document.getElementById("texto-3")
const boton = document.getElementById("boton")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    e.stopPropagation()
    console.log("me diste a submit")

    const data = new FormData(formulario)
    console.log(data.get("mensaje"))

    // if(!data.get("usuario").trim()){
    //     console.log("No hay texto")
    //     campoError(usuario)

    //     return
    // } else{
    //     campoValido(usuario)
    // }
    // if(!data.get("correo").trim()){
    //     console.log("No hay correo")
    //     campoError(correo)
    //     return
    // }else{
    //     campoValido(correo)
    // }
    // if(!data.get("mensaje").trim()){
    //     console.log("No hay mensaje")
    //     campoError(mensaje)
    //     return
    // }else{
    //     campoValido(mensaje)
    // }
    
    console.log("campos completados")
    fetch("formulario.php",{
        method: "POST",
        body: data

    })
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            if(datos.error && datos.campo ==="usuario"){
                campoError(usuario)
                return
            }
            campoValido(usuario)
            if(datos.error && datos.campo ==="correo"){
                campoError(correo)
                return
            }
            campoValido(correo)
            if(datos.error && datos.campo ==="mensaje"){
                campoError(mensaje)
                return
            }
            campoValido(mensaje)

            if(!datos.error){
                limpiarFormulario()
                campoValido(boton)
            }
        })
        .catch(e => console.log(e))
})

const campoError = (campo)=>{
    campo.classList.add("is-invalid")
    campo.classList.remove("is-valid")
}

const campoValido = (campo) =>{
    campo.classList.remove("is-invalid")
    campo.classList.add("is-valid")

}

const limpiarFormulario = () =>{
    console.log("mensaje enviado con éxito")
    formulario.reset()
    correo.classList.remove("is-valid")
    mensaje.classList.remove("is-valid")
    usuario.classList.remove("is-valid")
}