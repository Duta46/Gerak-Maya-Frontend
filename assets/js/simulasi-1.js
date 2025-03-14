let appleSketch = (p) => {
    let isAppleRunning = false;
    let appleImg;
    let x, y;
    let yspeed = 0;
    let gravity = 0.5;

    p.preload = function() {
        appleImg = p.loadImage('../assets/img/apple.png');
    };

    p.setup = function() {
        p.createCanvas(200, 200);
        x = p.width / 2;
        y = 0;
        p.background(255);

        const toggleButton = document.getElementById('toggleAppleButton');
        toggleButton.addEventListener('click', toggleSketch);
    };

    p.draw = function() {
        if (isAppleRunning) {
            p.background(255);
            yspeed += gravity;
            y += yspeed;
            p.image(appleImg, x - appleImg.width / 2, y - appleImg.height / 2);
            if (y > p.height) {
                y = p.height;
                yspeed = 0;
            }
        }
    };

    function toggleSketch() {
        const toggleAppleButton = document.getElementById('toggleAppleButton');
        if (!isAppleRunning) {
            isAppleRunning = true;
            toggleAppleButton.textContent = 'RESET';
            p.loop();
        } else {
            isAppleRunning = false;
            y = 0;
            yspeed = 0;
            p.background(255);
            toggleAppleButton.textContent = 'START';
            p.noLoop();
        }
    }
};

new p5(appleSketch, "Simulasi1");
