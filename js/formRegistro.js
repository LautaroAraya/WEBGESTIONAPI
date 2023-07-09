import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const formRegistro=document.getElementById('formRegistro');

formRegistro.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email=formRegistro['txtEmail'].value;
    const password=formRegistro['txtPassword'].value
    try {
      const usuario = await createUserWithEmailAndPassword(auth, email, password);
    console.log(usuario);
    const ventanaRegistro=document.getElementById('registrarseModal')
    const modal=bootstrap.Modal.getInstance(ventanaRegistro);
    modal.hide();
    } catch (error) {
    console.log(error.code);
      Toastify({
      text: error.code,
      duration: 3000,
      gravity: 'bottom',
      position: 'right',
    style: { background: '#FF4136',
      },
      }).showToast();
    }
});


