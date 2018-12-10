    var lagu = document.getElementById('musik');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    play.disabled = true;
    pause.disabled = true;

    function maen() {
        lagu.play();
        play.disabled = false;
        pause.disabled = true;
        update();
    }

    function pause() {
        lagu.pause();
        play.disabled = false;
        pause.disabled = true;
        update();
    }