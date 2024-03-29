import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const login = document.querySelector("#login");

login.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("was-validated");
  if (email.value && password.value) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        /*
        Destructuring
        let userCredentials = {
          user: {
            uid:...
          }
        }
        let {user : {uid}} = userCredentials;
        let userInfo = {
          name: "John",
          age: 23
        }
       let {name, age} = userInfo
        */
        // const user = userCredential.user;
        // console.log(user);
        const {
          user: { uid },
        } = userCredential;
        sessionStorage.setItem(uid, uid);
        alert("User logged in successfully");
        window.location.href = `./profile.html?id=${uid}`;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
});
