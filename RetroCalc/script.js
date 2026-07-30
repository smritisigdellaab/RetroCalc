const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calc-buttons button");

let currentInput = "";


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;


        // AC
        if(value === "AC"){

            currentInput = "";
            display.textContent = "0";

        }


        // DELETE
        else if(value === "DEL"){

            currentInput = currentInput.slice(0,-1);
            display.textContent = currentInput || "0";

        }


        // SQUARE ROOT
        else if(value === "√"){

            if(currentInput){

                currentInput = Math.sqrt(Number(currentInput)).toString();

                display.textContent = currentInput;

            }

        }


        // PERCENT
        else if(value === "%"){

            currentInput = (Number(currentInput)/100).toString();

            display.textContent=currentInput;

        }


        // PLUS MINUS
        else if(value === "±"){

            currentInput = (Number(currentInput)*-1).toString();

            display.textContent=currentInput;

        }


        // EQUAL
        else if(value === "="){

            try{

                let result = currentInput
                .replace(/×/g,"*")
                .replace(/÷/g,"/")
                .replace(/−/g,"-");


                currentInput = eval(result).toString();

                display.textContent=currentInput;


            }catch{

                display.textContent="Error";
                currentInput="";

            }

        }


        // ON BUTTON
        else if(value==="ON"){

            display.textContent="0";
            currentInput="";

        }


        // MEMORY BUTTONS
        else if(
            value==="MC" ||
            value==="MR" ||
            value==="M+" ||
            value==="M-"
        ){

            console.log("Memory feature coming soon");

        }


        // NORMAL BUTTONS
        else{

            currentInput += value;

            display.textContent=currentInput;

        }


    });

});