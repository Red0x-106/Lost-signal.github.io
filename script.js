document.addEventListener("DOMContentLoaded", function () {

    const answerBox = document.getElementById("answerBox");
    const answerButton = document.getElementById("answerButton");
    const answerResult = document.getElementById("answerResult");

    if (answerButton) {

        answerButton.addEventListener("click", function () {

            const answer = answerBox.value.trim().toLowerCase();

            if (answer === "red0x") {

                answerResult.textContent = "signal accepted.";
                answerResult.className = "correct";

                setTimeout(function () {
                    window.location.href = "learn.html";
                }, 800);

            } else {

                answerResult.textContent = "wrong answer.";
                answerResult.className = "wrong";
            }
        });
    }

   

    const numberButtons = document.querySelectorAll(".number");
    const gridResult = document.getElementById("gridResult");
    const sourceArea = document.getElementById("sourceArea");

    if (numberButtons.length > 0) {

        const correctOrder = [18, 5, 4, 24];

        let currentStep = 0;

        numberButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const number = Number(button.textContent);

                if (number === correctOrder[currentStep]) {

                    button.classList.add("used");

                    currentStep++;

                    if (currentStep === correctOrder.length) {

                        gridResult.innerHTML =
                            "signal accepted.<br>" +
                            "<span class='hint'>> SIGNAL SOURCE FOUND.</span><br>" +
                            "<span class='hint'>> click SIGNAL SOURCE and go to Instagram.</span><br>" +
                            "<span class='hint'>> check the number after the ID name.</span>";

                        gridResult.className = "correct";

                        sourceArea.classList.remove("hidden");
                    }

                } else {

                    currentStep = 0;

                    gridResult.textContent = "wrong order.";
                    gridResult.className = "wrong";

                    numberButtons.forEach(function (button) {
                        button.classList.remove("used");
                    });
                }
            });
        });
    }


    const sourceButton = document.getElementById("sourceBtn");
    const numberArea = document.getElementById("numberArea");

    if (sourceButton) {

        sourceButton.addEventListener("click", function () {

            window.open(
                "https://instagram.com/redox_106",
                "_blank"
            );

            numberArea.classList.remove("hidden");
        });
    }



    const numberButton = document.getElementById("numberBtn");
    const numberInput = document.getElementById("instagramNumber");
    const numberResult = document.getElementById("numberResult");
    const nextArea = document.getElementById("nextArea");
    const nextMessage = document.getElementById("nextMessage");

    if (numberButton) {

        numberButton.addEventListener("click", function () {

            const number = numberInput.value.trim();

            if (number === "106") {

                numberResult.textContent = "correct.";
                numberResult.className = "correct";

                nextMessage.textContent = "source confirmed.";
                nextMessage.className = "correct";

                nextArea.classList.remove("hidden");

            } else {

                numberResult.textContent = "wrong number.";
                numberResult.className = "wrong";
            }
        });
    }




    const signal03Button = document.getElementById("signal03Btn");

    if (signal03Button) {

        signal03Button.addEventListener("click", function () {
            window.location.href = "signal-03.html";
        });
    }



    const signal02Button = document.getElementById("signal02Continue");

    if (signal02Button) {

        signal02Button.addEventListener("click", function () {
            window.location.href = "signal-03.html";
        });
    }



    const riddleButton = document.getElementById("riddleButton");
    const riddleAnswer = document.getElementById("riddleAnswer");
    const riddleResult = document.getElementById("riddleResult");
    const equationArea = document.getElementById("equationArea");

    if (riddleButton) {

        riddleButton.addEventListener("click", function () {

            const answer = riddleAnswer.value.trim().toLowerCase();

            if (answer === "map") {

                riddleResult.textContent = "correct.";
                riddleResult.className = "correct";

                equationArea.classList.remove("hidden");

            } else {

                riddleResult.textContent = "wrong answer.";
                riddleResult.className = "wrong";
            }
        });
    }




    const equationButton = document.getElementById("equationButton");
    const equationAnswer = document.getElementById("equationAnswer");
    const equationResult = document.getElementById("equationResult");
    const equation2Area = document.getElementById("equation2Area");

    if (equationButton) {

        equationButton.addEventListener("click", function () {

            const answer = equationAnswer.value.trim();

            if (answer === "35") {

                equationResult.textContent = "35 accepted.";
                equationResult.className = "correct";

                equation2Area.classList.remove("hidden");

            } else {

                equationResult.textContent = "wrong.";
                equationResult.className = "wrong";
            }
        });
    }


  
   

    const equation2Button = document.getElementById("equation2Button");
    const equation2Answer = document.getElementById("equation2Answer");
    const equation2Result = document.getElementById("equation2Result");
    const locationArea = document.getElementById("locationArea");

    if (equation2Button) {

        equation2Button.addEventListener("click", function () {

            const answer = equation2Answer.value.trim();

            if (answer === "139") {

                equation2Result.textContent = "139 accepted.";
                equation2Result.className = "correct";

                locationArea.classList.remove("hidden");

            } else {

                equation2Result.textContent = "wrong.";
                equation2Result.className = "wrong";
            }
        });
    }


  

    const locationButton = document.getElementById("locationButton");
    const locationAnswer = document.getElementById("locationAnswer");
    const locationResult = document.getElementById("locationResult");
    const shibuyaArea = document.getElementById("shibuyaArea");

    if (locationButton) {

        locationButton.addEventListener("click", function () {

            const answer = locationAnswer.value.trim().toLowerCase();

            if (answer === "tokyo") {

                locationResult.textContent = "location found.";
                locationResult.className = "correct";

                shibuyaArea.classList.remove("hidden");

            } else {

                locationResult.textContent = "wrong place.";
                locationResult.className = "wrong";
            }
        });
    }


    /*SIGNAL 03 - SHIBUYA*/

    const shibuyaButton = document.getElementById("shibuyaButton");
    const shibuyaAnswer = document.getElementById("shibuyaAnswer");
    const shibuyaResult = document.getElementById("shibuyaResult");
    const gameArea = document.getElementById("gameArea");

    if (shibuyaButton) {

        shibuyaButton.addEventListener("click", function () {

            const answer = shibuyaAnswer.value.trim().toLowerCase();

            if (
                answer === "shibuya" ||
                answer === "shibuya crossing"
            ) {

                shibuyaResult.textContent = "place confirmed.";
                shibuyaResult.className = "correct";

                gameArea.classList.remove("hidden");

            } else {

                shibuyaResult.textContent = "look again.";
                shibuyaResult.className = "wrong";
            }
        });
    }


    /*SIGNAL 03 - CROSSING GAME*/

    const startGame = document.getElementById("startGame");
    const player = document.getElementById("player");
    const finish = document.getElementById("finish");
    const gameResult = document.getElementById("gameResult");
    const jumbleArea = document.getElementById("jumbleArea");

    if (startGame) {

        let playerX = 10;
        let playerY = 10;

        let gameRunning = false;
        let timeLeft = 30;

        let gameTimer = null;


        function updatePlayer() {

            player.style.left = playerX + "px";
            player.style.top = playerY + "px";
        }


        function checkFinish() {

            const playerBox = player.getBoundingClientRect();
            const finishBox = finish.getBoundingClientRect();

            if (
                playerBox.left < finishBox.right &&
                playerBox.right > finishBox.left &&
                playerBox.top < finishBox.bottom &&
                playerBox.bottom > finishBox.top
            ) {

                clearInterval(gameTimer);

                gameRunning = false;

                gameResult.textContent = "signal crossed.";
                gameResult.className = "correct";

                jumbleArea.classList.remove("hidden");
            }
        }


        startGame.addEventListener("click", function () {

            clearInterval(gameTimer);

            playerX = 10;
            playerY = 10;

            timeLeft = 30;

            gameRunning = true;

            updatePlayer();

            gameResult.textContent = "30 seconds.";
            gameResult.className = "";


            gameTimer = setInterval(function () {

                timeLeft--;

                gameResult.textContent =
                    timeLeft + " seconds.";


                if (timeLeft <= 0) {

                    clearInterval(gameTimer);

                    gameRunning = false;

                    gameResult.textContent =
                        "time finished. try again.";

                    gameResult.className = "wrong";
                }

            }, 1000);
        });


        document.addEventListener("keydown", function (event) {

            if (!gameRunning) {
                return;
            }


            const key = event.key.toLowerCase();


            if (
                key === "arrowright" ||
                key === "d"
            ) {
                playerX += 10;
            }


            if (
                key === "arrowleft" ||
                key === "a"
            ) {
                playerX -= 10;
            }


            if (
                key === "arrowup" ||
                key === "w"
            ) {
                playerY -= 10;
            }


            if (
                key === "arrowdown" ||
                key === "s"
            ) {
                playerY += 10;
            }


            if (playerX < 0) {
                playerX = 0;
            }

            if (playerY < 0) {
                playerY = 0;
            }

            if (playerX > 560) {
                playerX = 560;
            }

            if (playerY > 240) {
                playerY = 240;
            }


            updatePlayer();

            checkFinish();
        });
    }


    /*SIGNAL 03 - JUMBLE */

    const jumbleButton = document.getElementById("jumbleButton");
    const jumbleAnswer = document.getElementById("jumbleAnswer");
    const jumbleResult = document.getElementById("jumbleResult");
    const hiddenArea = document.getElementById("hiddenArea");

    if (jumbleButton) {

        let jumbleTries = 0;

        jumbleButton.addEventListener("click", function () {

            const answer = jumbleAnswer.value.trim().toLowerCase();

            if (answer === "follow the signal") {

                jumbleResult.textContent = "correct.";
                jumbleResult.className = "correct";

                hiddenArea.classList.remove("hidden");

            } else {

                jumbleTries++;

                const triesLeft = 3 - jumbleTries;

                if (triesLeft > 0) {

                    jumbleResult.textContent =
                        "wrong. tries left: " + triesLeft;

                } else {

                    jumbleResult.textContent =
                        "no more attempts.";

                    jumbleButton.disabled = true;
                }

                jumbleResult.className = "wrong";
            }
        });
    }


    /*SIGNAL 03 - HIDDEN MESSAGE*/

    const hiddenButton = document.getElementById("hiddenButton");
    const hiddenResult = document.getElementById("hiddenResult");
    const memoryArea = document.getElementById("memoryArea");

    if (hiddenButton) {

        hiddenButton.addEventListener("click", function () {

            hiddenButton.disabled = true;

            hiddenResult.textContent =
                "searching...";

            setTimeout(function () {

                hiddenResult.textContent =
                    "signal detected.";

                setTimeout(function () {

                    hiddenResult.textContent =
                        "the signal remembers.";

                    memoryArea.classList.remove("hidden");

                }, 700);

            }, 1000);
        });
    }


    /*SIGNAL 03 - MEMORY*/

    const memoryCards = document.querySelectorAll(".memory-card");
    const signal03Complete =
        document.getElementById("signal03Complete");

    if (memoryCards.length > 0) {

        let firstCard = null;
        let secondCard = null;

        let locked = false;

        let matches = 0;


        memoryCards.forEach(function (card) {

            card.addEventListener("click", function () {

                if (locked) {
                    return;
                }

                if (card.classList.contains("open")) {
                    return;
                }


                card.classList.add("open");

                card.textContent =
                    card.dataset.value;


                if (firstCard === null) {

                    firstCard = card;

                    return;
                }


                secondCard = card;

                locked = true;


                if (
                    firstCard.dataset.value ===
                    secondCard.dataset.value
                ) {

                    matches++;

                    firstCard = null;
                    secondCard = null;

                    locked = false;


                    if (matches === 4) {

                        signal03Complete.classList.remove("hidden");
                    }

                } else {

                    setTimeout(function () {

                        firstCard.classList.remove("open");
                        secondCard.classList.remove("open");

                        firstCard.textContent = "?";
                        secondCard.textContent = "?";

                        firstCard = null;
                        secondCard = null;

                        locked = false;

                    }, 700);
                }
            });
        });
    }


    /*SIGNAL 04 - CHECK SIGNAL */

    const staticButton =
        document.getElementById("staticButton");

    const wakeUp =
        document.getElementById("wakeUp");

    if (staticButton) {

        staticButton.addEventListener("click", function () {

            wakeUp.classList.remove("hidden");
        });
    }


    /*SIGNAL 04 - WAKE UP*/

    const wakeButton =
        document.getElementById("wakeButton");

    const investigation =
        document.getElementById("investigation");

    if (wakeButton) {

        wakeButton.addEventListener("click", function () {

            investigation.classList.remove("hidden");
        });
    }


    /*SIGNAL 04 - INVESTIGATION*/

    const actionButtons =
        document.querySelectorAll("[data-action]");

    const output =
        document.getElementById("output");

    const fragmentArea =
        document.getElementById("fragmentArea");

    if (actionButtons.length > 0) {

        const correctOrder = [
            "archive",
            "logs",
            "status",
            "unknown"
        ];

        let currentStep = 0;


        actionButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const action = button.dataset.action;


                if (action === correctOrder[currentStep]) {

                    button.classList.add("used");

                    currentStep++;


                    if (currentStep === correctOrder.length) {

                        output.textContent =
                            "sequence accepted.";

                        output.className =
                            "correct";

                        fragmentArea.classList.remove("hidden");
                    }

                } else {

                    currentStep = 0;

                    output.textContent =
                        "wrong sequence.";

                    output.className =
                        "wrong";


                    actionButtons.forEach(function (button) {
                        button.classList.remove("used");
                    });
                }
            });
        });
    }


    /*  SIGNAL 04 - FRAGMENTS */

    const fragmentButtons =
        document.querySelectorAll("[data-fragment]");

    const fragmentResult =
        document.getElementById("fragmentResult");

    const answerArea =
        document.getElementById("answerArea");

    if (fragmentButtons.length > 0) {

        fragmentButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                const fragment =
                    button.dataset.fragment;


                if (fragment === "one") {

                    fragmentResult.textContent =
                        "Signal 01 was the beginning.";

                    fragmentResult.className =
                        "correct";

                    answerArea.classList.remove("hidden");

                } else {

                    fragmentResult.textContent =
                        "that is not the first signal.";

                    fragmentResult.className =
                        "wrong";
                }
            });
        });
    }


    /* SIGNAL 04 - FINAL ANSWER*/
    

    const finalButton =
        document.getElementById("finalBtn");

    const finalAnswer =
        document.getElementById("finalAnswer");

    const finalResult =
        document.getElementById("finalResult");

    const ending =
        document.getElementById("ending");

    const identityOutput =
        document.getElementById("identityOutput");


    if (finalButton) {

        finalButton.addEventListener("click", function () {

            const answer =
                finalAnswer.value.trim();


            if (answer === "18-5-4-0-24") {

                finalResult.textContent =
                    "pattern confirmed.";

                finalResult.className =
                    "correct";


                ending.classList.remove("hidden");


                identityOutput.innerHTML =
                    "IDENTITY CONFIRMED.<br>" +
                    "SOURCE: RED0X<br>" +
                    "SIGNALS FOUND: 04<br>" +
                    "CONNECTION TERMINATED.<br>" +
                    "OBSERVER OFFLINE.";

            } else {

                finalResult.textContent =
                    "wrong pattern.";

                finalResult.className =
                    "wrong";
            }
        });
    }

});
