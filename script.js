let display = document.getElementById("display");
        let loveMeter = document.getElementById("loveMeterFill");

        function press(value) {
            display.value += value;
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Oopsie! 🥺";
            }
        }

        function clearDisplay() {
            display.value = "";
        }

        function calculateLove() {
            let name1 = document.getElementById("name1").value.trim();
            let name2 = document.getElementById("name2").value.trim();
            let loveResult = document.getElementById("loveResult");

            if (name1 === "" || name2 === "") {
                loveResult.innerHTML = "🥺 Please enter both names!";
                loveMeter.style.width = "0%";
                return;
            }

            let matchPercentage = Math.floor(Math.random() * 101);
            loveMeter.style.width = `${matchPercentage}%`;

            let messages = [
                "😭 Friend-zoned! But there’s still hope!",
                "🥲 Maybe in another universe...",
                "😢 Unlucky, but love works in mysterious ways!",
                "😏 Flirty vibes, but could be better!",
                "🔥 A strong connection! Keep it up!",
                "💖 You two are perfect together!"
            ];

            let message;
            if (matchPercentage < 30) message = messages[0];
            else if (matchPercentage < 50) message = messages[1];
            else if (matchPercentage < 70) message = messages[2];
            else if (matchPercentage < 90) message = messages[3];
            else message = messages[4];

            loveResult.innerHTML = `💘 Match: ${matchPercentage}% <br> ${message}`;
        }

        // Calculator Switcher
        document.getElementById("switchToMath").addEventListener("click", () => {
            document.getElementById("mathCalculator").classList.remove("hidden");
            document.getElementById("loveCalculator").classList.add("hidden");
        });

        document.getElementById("switchToLove").addEventListener("click", () => {
            document.getElementById("mathCalculator").classList.add("hidden");
            document.getElementById("loveCalculator").classList.remove("hidden");
        });