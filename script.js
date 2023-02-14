
const end = document.getElementById("endgame");
const MprogressBar = document.getElementById("monster-health");
const Mcolor = document.getElementById("Mcolor");
const YprogressBar = document.getElementById("your-health");
const Ycolor = document.getElementById("Ycolor");


const attack = document.getElementById("attack");
const message = document.getElementById("message");
const newgame = document.getElementById("newgame");
const buttons = document.getElementById("buttons");
const results = document.getElementById("results");

//function to surrender
end.addEventListener("click", function (event) {

    event.preventDefault();
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("message").innerHTML = "MONSTER WINS!";
    newgame.style.display = "inline";
    newgame.style.visibility = "visible";

});
function subtract(a, b) {
    let difference = a - b;
    return Math.floor(difference);
}

//function for button attack
attack.addEventListener("click", function (event) {
    event.preventDefault();
    let random1 = Math.random() * 100;
    MprogressBar.value -= random1;
    let random2 = Math.random() * 100;
    YprogressBar.value -= random2;

    document.getElementById("results").innerHTML += "<p><span id='monsteee'>Monster</span> attacks and deals " + subtract(100, random1) + "<p><span id='playeee'>Player</span> attacks and deals " + subtract(100, random2);


    if (MprogressBar.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU WIN!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";

    }
    else if (YprogressBar.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU LOSE!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";
    }
    else if (YprogressBar.value === 0 && MprogressBar.value === 0) {
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "ITS A DRAW!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";
    }

});

//function for button heal
const heal = document.getElementById("heal");
let clickcount = 0;
let maxvalue = 100;

heal.addEventListener("click", function (event) {
    event.preventDefault();
    clickcount++;
    let random3 = Math.random() * 100;

    if (YprogressBar.value < maxvalue && clickcount < 3) {
        YprogressBar.value += random3;
        document.getElementById("results").innerHTML += "<p><span id='playeee'>Player</span> is healed by " + Math.floor(random3);
    } else if (YprogressBar.value = maxvalue) {
        document.getElementById("results").innerHTML += "<p><span id='playeee'>Player</span> Health is full ";
        if (clickcount >= 3) {

            heal.style.display = "none";
        }

    }
});


//function for button special attack
const Sattack = document.getElementById("Sattack");
const yourhealth = document.getElementById("your-health");
const monsthealth = document.getElementById("monster-health");


Sattack.addEventListener("click", function (event) {
    event.preventDefault();
    let random3 = Math.random() * 100;
    let random4 = Math.random() * 100;

    while (yourhealth.value < 0.8 * monsthealth.value) {
        if (random3 < random4) {

            monsthealth.value -= random4;
            yourhealth.value -= random3;

            document.getElementById("results").innerHTML += "<p><span id='monsteee'>Monster</span> Sattacks and deals " + subtract(100, random3) + "<p><span id='playeee'>Player</span> Sattacks and deals " + subtract(100, random4);


            if (MprogressBar.value === 0) {

                document.querySelector(".buttons").style.display = "none";
                document.getElementById("message").innerHTML = "YOU WIN!";
                newgame.style.display = "inline";
                newgame.style.visibility = "visible";

            }
            else if (YprogressBar.value === 0) {

                document.querySelector(".buttons").style.display = "none";
                document.getElementById("message").innerHTML = "YOU LOSE!";
                newgame.style.display = "inline";
                newgame.style.visibility = "visible";
            }
            else if (YprogressBar.value === 0 && MprogressBar.value === 0) {
                document.querySelector(".buttons").style.display = "none";
                document.getElementById("message").innerHTML = "ITS A DRAW!";
                newgame.style.display = "inline";
                newgame.style.visibility = "visible";
            }
        }





        else if (random3 > random4) {
            monsthealth.value -= random3;
            yourhealth.value -= random4;

            document.getElementById("results").innerHTML += "<p><span id='monsteee'>Monster</span> Sattacks and deals " + subtract(100, random4) + "<p><span id='playeee'>Player</span> Sattacks and deals " + subtract(100, random3);


            if (MprogressBar.value === 0) {

                document.querySelector(".buttons").style.display = "none";
                document.getElementById("message").innerHTML = "YOU WIN!";
                newgame.style.display = "inline";
                newgame.style.visibility = "visible";

            }
            else if (YprogressBar.value === 0) {

                document.querySelector(".buttons").style.display = "none";
                document.getElementById("message").innerHTML = "YOU LOSE!";
                newgame.style.display = "inline";
                newgame.style.visibility = "visible";
            }
            else if (YprogressBar.value === 0 && MprogressBar.value === 0) {
                document.querySelector(".buttons").style.display = "none";
                document.getElementById("message").innerHTML = "ITS A DRAW!";
                newgame.style.display = "inline";
                newgame.style.visibility = "visible";
            }
        }

    }

});




