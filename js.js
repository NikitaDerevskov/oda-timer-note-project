let timeEnd = 0;
function numberDefine(a) {
   let name = 'sec' + a;
   timeEnd = document.getElementById(name).innerHTML;
   startTimer(timeEnd);
}

function startTimer(timeEnd) {
    function autTimer(){
        let timeEndNumber = parseInt(timeEnd);
          for ( i = timeEndNumber; i > 0; i--) {

            setTimeout(function(i) {
                return function() {
                    document.getElementById("endTimer").innerHTML= timeEndNumber - i;
                };
            }(i), 60*1000*(i)); //переписать чтобы не надо было вычитать.


   }

setTimeout(playMusic,timeEndNumber*1000*60)
        }

    autTimer();
    function playMusic() {
        const audio = new Audio();
        audio.src = 'n.mp3';
        audio.autoplay = true;
    }

// hello
}
