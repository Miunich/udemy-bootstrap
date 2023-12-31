console.log('funcionando')

const formulario = document.querySelector("#formulario")
const btnEnviar = document.querySelector("#btnEnviar")
const btnCargando = document.querySelector("#btnCargando")
// guardando el toast de html
const toast = document.querySelector(".toast")

formulario.addEventListener("submit", (e)=>{
    console.log("Me diste click")
    e.preventDefault()
    
    const datos = new FormData(formulario)

    console.log("campo Email", datos.get('emailCampo'))
    console.log("campo Password", datos.get('passwordCampo'))
    console.log("campo Checkbox", datos.get('checkCampo'))

    btnEnviar.classList.add("d-none")
    btnCargando.classList.remove("d-none")

    window.setTimeout(()=>{

        btnEnviar.classList.remove("d-none")
        btnCargando.classList.add("d-none")

        const eventoToast = new bootstrap.Toast(toast)
        eventoToast.show()

    },3000)

    formulario.reset()
})