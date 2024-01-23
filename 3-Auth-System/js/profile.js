const logout = document.querySelector("#logout");
const message = document.querySelector("#message");
const edit = document.querySelector("#edit");
const update = document.querySelector("#update");

const user = new URLSearchParams(location.search);
console.log(user.get("id"));
const id = user.get("id");
const findUser = JSON.parse(localStorage.getItem(id));
console.log(findUser);
message.append(` ${findUser.firstname}, ${findUser.lastname}`);

logout.addEventListener("click", (e) => {
  e.preventDefault();
  sessionStorage.removeItem(id);
  alert("User loggedout successfully");
  window.location.href = "./index.html";
});

const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
firstname.value = findUser.firstname;
lastname.value = findUser.lastname;
email.value = findUser.email;
password.value = findUser.password;
confirmPassword.value = findUser.confirmPassword;

update.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to update the details?")) {
    document.querySelector("#form").classList.add("was-validated");
    if (
      firstname.value &&
      lastname.value &&
      email.value &&
      password.value &&
      confirmPassword.value
    ) {
      if (password.value === confirmPassword.value) {
        const userdetails = {
          id: id,
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value,
        };
        console.log(userdetails);
        localStorage.setItem(userdetails.id, JSON.stringify(userdetails));
        sessionStorage.removeItem(id);
        alert("User updated successfully");
        window.location.href = "./index.html";
      } else {
        alert("Password and Confirm Password must be same");
      }
    } else {
      alert("All fields are mandatory");
    }
  }
});
