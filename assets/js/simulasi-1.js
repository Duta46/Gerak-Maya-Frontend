let isAppleRunning = false;
let appleImg;
let x, y;
let yspeed = 0;
let gravity = 0.5;

function preload() {
    appleImg = loadImage('../assets/img/apple.png');
}

function setup() {
    createCanvas(200, 200);
    x = width / 2;
    y = 0;
    background(255); // Bersihkan canvas saat setup

    const toggleButton = document.getElementById('toggleAppleButton');
    toggleButton.addEventListener('click', toggleSketch); // Menambahkan event listener ke tombol
}

function draw() {
    if (isAppleRunning) {
        background(255);
        // Tambahkan gaya gravitasi ke kecepatan
        yspeed += gravity;
        // Perbarui posisi y
        y += yspeed;
        // Gambar apel
        image(appleImg, x - appleImg.width / 2, y - appleImg.height / 2);
        // Jika apel menyentuh dasar, berhentikan
        if (y > height) {
            y = height;
            yspeed = 0;
        }
    }
}

function toggleSketch() {
    const toggleAppleButton = document.getElementById('toggleAppleButton');
    
    if (!isAppleRunning) {
        isAppleRunning = true; // Set status menjadi running
        toggleAppleButton.textContent = 'RESET'; // Ubah teks tombol menjadi "Reset"
        loop(); // Mulai loop draw
    } else {
        isAppleRunning = false; // Set status menjadi tidak running
        y = 0; // Reset posisi y
        yspeed = 0; // Reset kecepatan
        background(255); // Bersihkan canvas
        toggleAppleButton.textContent = 'START'; // Ubah teks tombol kembali menjadi "Start"
        noLoop(); // Hentikan loop draw
    }
}