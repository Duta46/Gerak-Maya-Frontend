let ballSketch = (p) => {
  let ball = {
      x: 100,
      y: 100,
      dx: 2,
      dy: 2,
      radius: 20
  };

  let isBallRunning = false;

  p.setup = function() {
      p.createCanvas(200, 200);
      p.background(255);

      const toggleBallButton = document.getElementById('toggleBallButton');
      toggleBallButton.addEventListener('click', toggleSimulation);
  };

  p.draw = function() {
      if (isBallRunning) {
          p.background(255);
          ball.x += ball.dx;
          ball.y += ball.dy;

          if (ball.x + ball.radius > p.width || ball.x - ball.radius < 0) {
              ball.dx *= -1;
              ball.dy += p.random(-2, 2);
          }
          if (ball.y + ball.radius > p.height || ball.y - ball.radius < 0) {
              ball.dy *= -1;
              ball.dx += p.random(-2, 2);
          }

          p.circle(ball.x, ball.y, ball.radius * 2);
      }
  };

  function toggleSimulation() {
      const toggleBallButton = document.getElementById('toggleBallButton');
      if (!isBallRunning) {
          isBallRunning = true;
          p.loop();
          toggleBallButton.textContent = 'RESET';
      } else {
          isBallRunning = false;
          p.noLoop();
          ball.x = 100;
          ball.y = 100;
          toggleBallButton.textContent = 'START';
      }
  }
};

new p5(ballSketch, "Simulasi2");
