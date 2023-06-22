// THIS IS A COMMENT

const displayThyLEVEL = document.getElementById("simPointsTarget");
const cycleQuestion = document.getElementById("cycleQuestion");
const questionNumber = document.getElementById("questionNumber");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const full_List = document.getElementById("platDes");


//Sound Design
const tripleSound = new Audio();
tripleSound.src = "./triple.mp3";
const trophySound = new Audio();
trophySound.src = "./trophyEarned.mp3";
const bigBridge = new Audio();
bigBridge.src = "./neoBridge.mp3";


//Totals

let greggy = 0;
let questionCounter = 1;
let correctStreak = 0;
let round = 1;

function gameReset() {
    greggy = 0;
    questionCounter = 1;
    correctStreak = 0;
    cycleQuestion.innerHTML = "You just woke up. Are you attending school for the day?";
    button1.innerHTML = "YES";
    button2.innerHTML = "NO";
    questionNumber.innerHTML = "Question I";
    displayThyLEVEL.innerHTML = greggy;
    button1.style.visibility = "visible";
    button2.style.visibility = "visible";
}

function one(argument) {

    ascertained();

    //Question 7 LOGIC 
    if (questionCounter == 7) {
        if (argument == 0 && questionCounter == 7) {
            greggy++;
            displayThyLEVEL.innerHTML = greggy;
            correctStreak++;
        }
        if (argument == 1 && questionCounter == 7) {
            displayThyLEVEL.innerHTML = greggy;
            correctStreak = 0;
        }
        totalResult();
    }

    // Question 6 LOGIC

    if (questionCounter == 6) {
        if (argument == 0 && questionCounter == 6) {
            displayThyLEVEL.innerHTML = greggy;
            correctStreak = 0;
        }
        if (argument == 1 && questionCounter == 6) {
            greggy++;
            displayThyLEVEL.innerHTML = greggy;
            correctStreak++;
        }
        questionSeven();
        questionNumber.innerHTML = "QUESTION VII";
        questionCounter++;
    }

    //Question 5 LOGIC

    if (questionCounter == 5) {
        if (argument == 0 && questionCounter == 5) {
            greggy++;
            displayThyLEVEL.innerHTML = greggy;
            correctStreak++;
        }
        if (argument == 1 && questionCounter == 5) {
            displayThyLEVEL.innerHTML = greggy;
            correctStreak = 0;
        }
        questionSix();
        questionNumber.innerHTML = "QUESTION VI";
        questionCounter++;
    }

    //Question 4 LOGIC

    if (questionCounter == 4) {
        if (argument == 0 && questionCounter == 4) {
            greggy++;
            displayThyLEVEL.innerHTML = greggy;
            correctStreak++;
        }
        if (argument == 1 && questionCounter == 4) {
            displayThyLEVEL.innerHTML = greggy;
            correctStreak = 0;
        }
        questionFive();
        questionNumber.innerHTML = "Question V";
        questionCounter++;
    }

    //Question 3 LOGIC

    if (questionCounter == 3) {
        if (argument == 1 && questionCounter == 3) {
            displayThyLEVEL.innerHTML = greggy;
            correctStreak = 0;
        }
        if (argument == 0 && questionCounter == 3) {
            greggy++;
            displayThyLEVEL.innerHTML = greggy;
            correctStreak++;
        }
        questionFour();
        questionNumber.innerHTML = "Question IV";
        questionCounter++;
    }

    // Question 2 LOGIC    

    if (questionCounter == 2) {
        if (argument == 1 && questionCounter == 2) {
            greggy++;
            displayThyLEVEL.innerHTML = greggy;
            correctStreak++;
        }
        if (argument == 0 && questionCounter == 2) {
            displayThyLEVEL.innerHTML = greggy;
            correctStreak = 0;
        }
        questionThree();
        questionNumber.innerHTML = "Question III";
        questionCounter++;
    }

    //Question 1 LOGIC

    if (questionCounter == 1) {
        if (argument == 1 && questionCounter == 1) {
            greggy++;
            displayThyLEVEL.innerHTML = greggy;
            correctStreak++;
        }
        if (argument == 0 && questionCounter == 1) {
            displayThyLEVEL.innerHTML = greggy;
            correctStreak = 0;
        }
        questionTwo();
        questionNumber.innerHTML = "Question II";
        questionCounter++;
    }
    OH_BABY_A_TRIPLE();
}

function questionTwo() {
    cycleQuestion.innerHTML = "You see an elderly lady struggling with her shopping. Do you help her?";
}

function questionThree() {
    cycleQuestion.innerHTML = "You are feeling thristy. Do you reach for a Pepsi?";
}

function questionFour() {
    cycleQuestion.innerHTML = "Finish the quote: Woah that's...";
    button1.innerHTML = "Cool lookin'";
    button2.innerHTML = "not cool";
}

function questionFive() {
    cycleQuestion.innerHTML = "Is cold chili good?";
    button1.innerHTML = "YES";
    button2.innerHTML = "NO";
}

function questionSix() {
    cycleQuestion.innerHTML = "A person drops a 20 dollar bill behind them. Do you return it?";
    button1.innerHTML = "YES";
    button2.innerHTML = "NO";
}

function questionSeven() {
    cycleQuestion.innerHTML = "Final Question : My ___ is higher!! ";
    button1.innerHTML = "DPS";
    button2.innerHTML = "level";
}

function OH_BABY_A_TRIPLE() {
    if (correctStreak === 3 && ohTriple == false) {
        tripleSound.play();
        trophySound.play();
        ohTriple = true;
        const changeToGreenTriple = document.getElementById("T2Des");
        changeToGreenTriple.style.color = "lime";
        changeToGreenTriple.style.fontStyle = "italic";
    }
}

// TROPHIES!!!!!!!

let plat = false;
let bridge = false;
let ohTriple = false;
let blueGreg = false;
let numberHover = false;
let round1 = false;
let newGamePlus = false;

function battleOnTheBigBridge() {
    if (questionCounter == 5 && bridge == false) {
        bigBridge.play();
        bridge = true;
        const bridgeGreen = document.getElementById("T1Des");
        bridgeGreen.style.color = "lime";
        bridgeGreen.style.fontStyle = "italic";
        trophySound.play();
        showVideo();
    }
}

const video = document.getElementById("my-video");

function showVideo() {
    const videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "block";
    video.play();
}

function hideVideo() {
    const videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "none";
    video.pause();
}

function removeVideoContainer() {
    const videoContainer = document.getElementById("video-container");
    videoContainer.remove();
    bigBridge.pause();
}

video.addEventListener("ended", function () {
    hideVideo();
    removeVideoContainer();
});


hideVideo();

//TRUE COLORS KIDDO!!!

const expectedSequence = ['b', 'l', 'u', 'e'];

let userInput = [];

document.addEventListener('keydown', event => {
    const keyPressed = event.key.toLowerCase();

    if (keyPressed === expectedSequence[userInput.length]) {
        userInput.push(keyPressed);

        if (userInput.length === expectedSequence.length && blueGreg == false) {
            // User input matches the expected sequence
            console.log('Sequence matched!');
            blueDaywalker();
            const blue65 = new Audio("./BLUE.mp3");
            blueGreg = true;
            blue65.play();
            trophySound.play();
            const blueGrab = document.getElementById('T3Des');
            blueGrab.style.color = 'lime';
            blueGrab.style.fontStyle = "italic";

            userInput = [];
        }
    } else {
        userInput = [];
    }
});

function blueDaywalker() {
    setTimeout(showPopup, 1_000);
    setTimeout(showPopup, 7_000);

    let popup; // global variable for state management
    function showPopup() { // call twice to remove popup
        // if the popup already exists, remove it
        if (popup) {
            popup.parentNode.removeChild(popup);
            popup = undefined;
            return;
        }

        // create image popup
        popup = document.createElement("img");
        popup.src = "art_greg.jpg";

        Object.assign(popup.style, {
            zIndex: 10000,
            position: "fixed",
            top: "50%",
            left: "50%",
            width: "100vh",
            transform: "translate(-50%,-50%)",

        });

        document.body.appendChild(popup);

    }

}

function hoverColorCheck() {
    if (numberHover == false) {
        numberHover = true;
        trophySound.play();
        const grabbingHover = document.getElementById("T4Des");
        grabbingHover.style.fontStyle = "italic";
        grabbingHover.style.color = "lime";
    }
}


const TARGET = document.getElementById("targetMe");

function createRainbowEffect(elementId) {
    var rainbowColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'lime'
    ];

    var text = TARGET.innerHTML;
    let rainbowText = '';

    for (var i = 0; i < text.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText += '<span style="color:' + color + '">' + text[i] + '</span>';
    }
    TARGET.innerHTML = rainbowText;
}
createRainbowEffect();

function totalResult() {
    questionNumber.innerHTML = "CONST || LET || VAR";
    cycleQuestion.innerHTML = "<<<GREG SIMULATION COMPLETE>>>";
    button1.style.visibility = "hidden";
    button2.style.visibility = "hidden";
    if (round1 == false) {
        trophySound.play();
        round1 = true;
        const gettingIt = document.getElementById("T5Des");
        gettingIt.style.color = "lime";
        gettingIt.style.fontStyle = "italic";
    }
    if (round > 1 && newGamePlus == false) {
        newGamePlus = true;
        trophySound.play();
        const grabbedVAR = document.getElementById("T6Des");
        grabbedVAR.style.color = "lime";
        grabbedVAR.style.fontStyle = "italic";
    }
    round++;
}

function ascertained() {
    if (
         bridge == true &&
         ohTriple == true &&
         blueGreg == true &&
         numberHover == true &&
         round1 == true &&
         newGamePlus == true 
    ){
        plat = true;
    }
    if (plat == true){
    trophySound.play();
    full_List.style.color ="lime";
    full_List.style.fontStyle = "italic";
}
}