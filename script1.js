let miniDisplay = document.getElementById("screen"); // Secondary Display
let ansDisplay = document.getElementById("result"); // Primary Display
let buttonPress = document.querySelectorAll(".btn");
console.log(buttonPress);
let screenValue = "";
let isEndEq = false;

for (item of buttonPress) {
    item.addEventListener("click", (e) => {
        let buttonText = e.target.innerText;
        console.log("buttonText: ", buttonText);

        //    All Clear Button
        if (buttonText == "AC") {
            screenValue = "";
            ansDisplay.value = screenValue;
            miniDisplay.value = screenValue;
            isEndEq = false;
        }
        // Delete Button
        else if (buttonText == "DEL") {
            screenValue = screenValue.slice(0, -1);
            ansDisplay.value = screenValue;
            isEndEq = false;
        }

        // Multiply Button
        else if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            ansDisplay.value = screenValue;
            isEndEq = false;
        }
        // Equals To Button
        else if (buttonText == "=") {
            miniDisplay.value = screenValue; // Secondary Display
            ansDisplay.value = eval(screenValue); // Primary Display
            screenValue = ansDisplay.value;
            isEndEq = true;
        }

        // Get Answer
        else {
            if (
                ((buttonText >= "0" && buttonText <= "9") ||
                    buttonText == "00" ||
                    buttonText == ".") &&
                isEndEq == true
            ) {
                screenValue = "";
                miniDisplay.value = screenValue;
                ansDisplay.value = screenValue;
                isEndEq = false;
            }

            screenValue += buttonText;
            ansDisplay.value = screenValue;
            isEndEq = false;
        }
    });
}
