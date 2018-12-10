            $(document).ready(function(){
			$(".player").hide();
                $(".toggle").click(
                    function(){
                        $(".player").slideToggle();
                    }
                );
            });
            
            var lagu = document.getElementById('musik');
            var tombol_play = document.getElementById('tombol_play');
            var tombol_pause = document.getElementById('tombol_pause');
            var tombol_stop = document.getElementById('tombol_stop');
            var boxbar = document.getElementById('kotak').offsetWidth;
            var progres = document.getElementById('progres'); 
            tombol_play.disabled = false;
            tombol_pause.disabled = true;
            tombol_stop.disabled = true;
            
            function play() {
                lagu.play();
                tombol_play.disabled = true;
                tombol_pause.disabled = false;
                tombol_stop.disabled = false;
                update();
            }
            
            function pause() {
                lagu.pause();
                tombol_play.disabled = false;
                tombol_pause.disabled = true;
                tombol_stop.disabled = false;
                update();
            }
 
            function stop() {
                lagu.pause();
                lagu.currentTime = 0;
                tombol_play.disabled = false;
                tombol_pause.disabled = true;
                tombol_stop.disabled = true;
                update();
            }
 
            function update() {
                setInterval(function () {
                    var saatini = lagu.currentTime;
                    var durasi = lagu.duration;
                    var persen = (saatini / durasi) * parseInt(boxbar); 
                    progres.style.width = parseInt(persen) + 'px';
                }, 200);
            }
            
