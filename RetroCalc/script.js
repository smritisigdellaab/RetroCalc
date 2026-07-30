const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calc-buttons button");

let currentInput = "";


buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;


        
        if(value === "AC"){

            currentInput = "";
            display.textContent = "0";

        }


        
        else if(value === "DEL"){

            currentInput = currentInput.slice(0,-1);
            display.textContent = currentInput || "0";

        }


        else if(value === "√"){

            if(currentInput){

                currentInput = Math.sqrt(Number(currentInput)).toString();

                display.textContent = currentInput;

            }

        }


       
        else if(value === "%"){

            currentInput = (Number(currentInput)/100).toString();

            display.textContent=currentInput;

        }


        
        else if(value === "±"){

            currentInput = (Number(currentInput)*-1).toString();

            display.textContent=currentInput;

        }


        
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


        
        else if(value==="ON"){

            display.textContent="0";
            currentInput="";

        }


        
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