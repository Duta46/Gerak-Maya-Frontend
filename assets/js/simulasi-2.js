let ball = {
    x: 100,
    y: 100,
    dx: 2,
    dy: 2,
    radius: 20
  };
  
  let isBallRunning = false; // Status untuk mengecek apakah simulasi berjalan
  
  function setup() {
    createCanvas(200, 200);
    background(255); // Mengatur latar belakang menjadi putih
  
    // Menambahkan event listener untuk tombol
    const toggleBallButton = document.getElementById('toggleBallButton');
    toggleBallButton.addEventListener('click', toggleSimulation);
  }
  
  function draw() {
    if (isBallRunning) { // Hanya menggambar jika simulasi berjalan
      background(255);
  
      // Update posisi bola
      ball.x += ball.dx;
      ball.y += ball.dy;
  
      // Deteksi tumbukan dan pantulan
      if (ball.x + ball.radius > width || ball.x - ball.radius < 0) {
        ball.dx *= -1;
        ball.dy += random(-2, 2); // Tambahkan gerak acak pada sumbu y
      }
      if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
        ball.dx += random(-2, 2); // Tambahkan gerak acak pada sumbu x
      }
  
      // Gambar bola
      circle(ball.x, ball.y, ball.radius * 2);
    }
  }
  
  function toggleSimulation() {
    const toggleBallButton = document.getElementById('toggleBallButton');
    if (!isBallRunning) { // Perbaiki dari isRunning menjadi isBallRunning
      isBallRunning = true; // Set status menjadi running
      loop(); // Mulai simulasi
      toggleBallButton.textContent = 'RESET'; // Ubah teks tombol
    } else {
      isBallRunning = false; // Set status menjadi tidak running
      noLoop(); // Hentikan simulasi
      ball.x = 100; // Reset posisi bola
      ball.y = 100;
      toggleBallButton.textContent = 'START'; // Ubah teks tombol kembali
    }
  }