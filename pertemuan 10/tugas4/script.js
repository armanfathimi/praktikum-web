function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "img/gambar1";
        images.width = 300;
        images.alt = "Ini adalah gambar foto1.jpg";
        alert("Ini adalah gambar gambar1.jpg");
    } else if (picker == "water") {
        images.src = "img/gambar2.png";
        images.width = 300;
        images.alt = "Ini adalah gambar foto2";
        alert("Ini adalah gambar gambar2.png");
    } else if (picker == "electric") {
        images.src = "img/gambar7.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar foto7.jpg";
        alert("Ini adalah gambar foto7.jpg");
    } else if (picker == "dark") {
        images.src = "img/gambar3.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar foto3.jpg";
        alert("Ini adalah gambar foto3.jpg");
    } else if (picker == "psyhic") {
        images.src = "img/gambar4.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar foto4.jpg";
        alert("Ini adalah gambar foto4,jpg");
    } else if (picker == "fairy") {
        images.src = "img/gambar5.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar foto5.jpg";
        alert("Ini adalah gambar foto5.jpg");
    } else if (picker == "grass") {
        images.src = "img/gambar6.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar foto6.jpeg";
        alert("Ini adalah gambar foto6.jpeg");
    } else if (picker == "ice") {
        images.src = "img/gambar8.jpg";
        images.width = 300;
        images.alt = "Ini adalah gambar foto8.jfif";
        alert("Ini adalah gambar foto8.jfif");
    } else {
        alert("Gagal");
    }
}