const track = document.querySelector(".slider-track");

setInterval(() => {

    const firstCard = track.firstElementChild;

    // geser kiri
    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = "translateX(-280px)";

    setTimeout(() => {

        // reset tanpa animasi
        track.style.transition = "none";

        // pindahkan card pertama ke belakang
        track.appendChild(firstCard);

        // balik posisi
        track.style.transform = "translateX(0)";

    }, 800);

}, 2500);