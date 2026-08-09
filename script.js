const imageInput = document.getElementById("imageInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if (!file) return;

    preview.src = URL.createObjectURL(file);

});