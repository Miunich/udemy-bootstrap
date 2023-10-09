const btnIngresar = document.querySelector("#btnIngresar");
const btnSalir = document.querySelector("#btnSalir");
const chat = document.querySelector("#chat")
const formulario = document.querySelector("#formulario");
const btnEnviar= document.querySelector("#btnEnviar");
const msgInicio = document.querySelector("#msgInicio");
const msgTemplate = document.querySelector("#msgTemplate");


import { getAuth,GoogleAuthProvider,signInWithPopup,  onAuthStateChanged, signOut} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { getFirestore,collection, addDoc, query,onSnapshot, orderBy } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
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
let unsubscribe;


const db = getFirestore(app);

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

    const q = query(collection(db,"chats"), orderBy("fecha"));
    chat.innerHTML = "";
    unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            console.log("New msg: ", change.doc.data());
            // manipulando el template
            const clone = msgTemplate.content.cloneNode(true);
            clone.querySelector("span").textContent = change.doc.data().msg;
            if(user.uid === change.doc.data().uid){
              clone.querySelector("div").classList.add("text-end")
              clone.querySelector("span").classList.add("bg-success");

            }else{
              clone.querySelector("div").classList.add("text-start")
              clone.querySelector("span").classList.add("bg-secondary");
            }
            chat.append(clone);
        }
        chat.scrollTop = chat.scrollHeight;
      });
    });


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

    if(unsubscribe){
      unsubscribe();
    }
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
    await signOut(auth);
})

formulario.addEventListener("submit",async(e) =>{
    e.preventDefault();
    console.log(formulario.msg.value);
    if(!formulario.msg.value.trim()){
      
      formulario.msg.value = "";
      formulario.msg.focus();
      return console.log("Tienes que escribir algo");
    }
    try {
      btnEnviar.disabled =true
      await addDoc(collection(db,"chats"), {
        msg: formulario.msg.value.trim(),
        uid: auth.currentUser.uid,
        fecha: new Date(),
      });
      formulario.msg.value = "";
        
    } catch (error) {
        console.log(error);
        
    }finally{
      btnEnviar.disabled =false
    }
})