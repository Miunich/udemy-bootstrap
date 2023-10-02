console.log('funcionando')

const formulario = document.querySelector("#formulario")

formulario.addEventListener("submit", (e)=>{
    console.log("Me diste click")
    e.preventDefault()
    
    const datos = new FormData(formulario)

    console.log("campo Email", datos.get('emailCampo'))
    console.log("campo Password", datos.get('passwordCampo'))
    console.log("campo Checkbox", datos.get('checkCampo'))

    formulario.reset()
})