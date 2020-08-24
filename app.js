let submitted = false;

const myForm = document.getElementById("gform");
const cookie = document.getElementById("cookieAlert");

const myFormName = document.getElementById("entry.2005620554");
const myFormCompany = document.getElementById("entry.440159136");
const myFormEmail = document.getElementById("entry.1045781291");
const myFormPhone = document.getElementById("entry.1166974658");
const myFormMessage = document.getElementById("entry.839337160");

const resetButton = document.getElementById("resetButton");
const confirmation = document.getElementById("confirmation");

myForm.onsubmit = function () {
  confirm();
};

resetButton.onclick = function () {
  resetForm();
};

function resetForm() {
  myFormName.value = "";
  myFormCompany.value = "";
  myFormEmail.value = "";
  myFormPhone.value = "";
  myFormMessage.value = "";
}

// confirm modal message submission and then hide the alert
function confirm() {
  confirmation.classList.remove("d-none");
  confirmation.innerText = "Your submission has been processed...";
  window.setTimeout(function () {
    confirmation.innerText = "";
    confirmation.classList.add("d-none");
    resetForm();
  }, 4000);
}

function hideCookieAlert() {
  cookie.classList.add("dispose");
}

window.onload = window.setTimeout(function () {
  hideCookieAlert();
}, 5000);
