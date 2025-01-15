
let ID
let SubSec = 0;
let Sec = 0;
let Min = 0;
let Hour = 0;
let running = false;

function Start() {

    if (running == false) {
        running = true;

        function AddToTimer() {
            SubSec++;

            if (SubSec === 100) {
                SubSec = 0;
                Sec++;

                if (Sec === 60) {
                    Sec = 0;
                    Min++;

                    if (Min === 60) {
                        Min = 0;
                        Hour++;
                    }
                }
            }

            Hour = String(Hour).padStart(2, 0)
            Min = String(Min).padStart(2, 0)
            Sec = String(Sec).padStart(2, 0)
            SubSec = String(SubSec).padStart(2, 0)
            stopwatch.innerHTML = `${Hour}:${Min}:${Sec}.${SubSec}`;
        };





        ID = setInterval(AddToTimer, 10);

    }


}

function Stop() {
    if (running == true) {
        running = false;
        clearInterval(ID)
    }

}

function Reset() {
    SubSec = 0;
    Sec = 0;
    Min = 0;
    Hour = 0;
    stopwatch.innerHTML = `00:00:00.00`;
}
