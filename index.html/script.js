/* =========================
   MOBILE NAVIGATION
========================= */

function toggleMenu() {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("show");

}


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================
   CONTACT FORM
========================= */

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value;

    const formMessage =
        document.getElementById("form-message");


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;

    }


    formMessage.textContent =
        "Thank you! Your message has been received.";

    formMessage.style.color = "green";


    document.querySelector(".contact-form").reset();

}