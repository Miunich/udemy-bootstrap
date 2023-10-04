console.log("hola a todos")

const customRange3 = document.getElementById("customRange3")
const visitas = document.getElementById("visitas")
const precio = document.getElementById("precio")
const arrayVisitas =["10K", "50K", "100K", "500K", "1M"]


customRange3.addEventListener("input",() =>{
    console.log("me diste click 🙌")
    console.log(customRange3.value)
    precio.textContent = customRange3.value
    visitas.textContent = arrayVisitas[(customRange3.value/8 - 1)]
} )