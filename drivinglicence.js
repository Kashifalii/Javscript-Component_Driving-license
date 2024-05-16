const imgInput = document.getElementById("image");
const nameInput = document.getElementById("fullName");
const idInput = document.getElementById("idNum");
const submit = document.getElementById("submit");
// ------------------------------------------------
const userImage = document.getElementById("userImg");
const userName = document.getElementById("name");
const userId = document.getElementById("id-num");
const card = document.getElementById("card");

submit.addEventListener("click", () => {
    userImage.setAttribute("src", imgInput.value);
    userName.innerText = nameInput.value;
    userId.innerText = idInput.value;
    card.style.visibility = "visible";
    card.style.opacity = 1;
});

