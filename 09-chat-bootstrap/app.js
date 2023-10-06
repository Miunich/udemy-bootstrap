const btnIngresar = document.querySelector("#btnIngresar")
const chat = document.querySelector("#chat")
const formulario = document.querySelector("#formulario")
const btnEnviar= document.querySelector("#btnEnviar")
const msgInicio = document.querySelector("#msgInicio")

import { getAuth,GoogleAuthProvider,signInWithPopup,  onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBegas_PHJ8SWXaNAovwFSjxlFiqSWugeU",
  authDomain: "firechat-bootstrap-4e9f5.firebaseapp.com",
  projectId: "firechat-bootstrap-4e9f5",
  storageBucket: "firechat-bootstrap-4e9f5.appspot.com",
  messagingSenderId: "743060244401",
  appId: "1:743060244401:web:f48a13b98f4f85b9ff1f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const eliminarElemento = (elemento) =>{
    elemento.classList.add("d-none")
}
const visualizarElemento = (elemento) =>{
    elemento.classList.remove("d-none")
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Existe el user",user);
    // btnSalir.classList.remove("d-none");
    // btnIngresar.classList.add("d-none");
    eliminarElemento(btnIngresar);
    visualizarElemento(btnSalir);
    visualizarElemento(formulario);
    visualizarElemento(chat);
    eliminarElemento(msgInicio);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    console.log("no existe el usuario");
    // btnSalir.classList.add("d-none");
    // btnIngresar.classList.remove("d-none");
    // User is signed out
    // ...
    eliminarElemento(btnSalir);
    visualizarElemento(btnIngresar);
    eliminarElemento(formulario);
    eliminarElemento(chat);
    visualizarElemento(msgInicio);
  }
});


btnIngresar.addEventListener("click", async()=>{
    try{
        
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        console.log(result);
    } catch (error){
        console.log(error);
    }
});

btnSalir.addEventListener("click", async () =>{
    await signOut(auth)
})

formulario.addEventListener("submit",async(e) =>{
    e.preventDefault();
    console.log(formulario.msg.value);
    try {
        
    } catch (error) {
        console.log(error)
        
    }
})