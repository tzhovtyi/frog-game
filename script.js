var counter = 1;
    function changeQuestion() {
        counter++;
        document.getElementById("ans").value = "";
        if (counter == 1) {document.getElementById("qs").innerHTML = document.getElementById("q1").innerText;}
        else if (counter == 2) {document.getElementById("qs").innerHTML = document.getElementById("q2").innerText;}
        else if (counter == 3) {document.getElementById("qs").innerHTML = document.getElementById("q3").innerText;}
        else if (counter == 4) {document.getElementById("qs").innerHTML = document.getElementById("q4").innerText;}
        else if (counter == 5) {document.getElementById("qs").innerHTML = document.getElementById("q5").innerText;}
        else if (counter == 6) {document.getElementById("qs").innerHTML = 'Победа!!! Держите ссылочки на мемы с жабами: <a target="_blank" href="https://vk.com/photo208439866_457254048?rev=1">1</a> <a target="_blank" href="https://vk.com/photo208439866_457259417">2</a> <a target="_blank" href="https://vk.com/photo208439866_457258199?rev=1">3</a> <a target="_blank" href="https://vk.com/photo208439866_457255030?rev=1">4</a> <a target="_blank" href="https://vk.com/photo208439866_457253351?rev=1">5</a> А еще можете обновить страницу и опробовать другие сложости и других жаб!';}
    }
var e1triggered = true;
var e2triggered = true;
var e3triggered = true;
var e4triggered = true;
var e5triggered = true;
    function validateAnswer() {
        const answer = document.getElementById("ans").value;
        const e1 = "всеволод"; /* easy 1st question*/ 
        const e12 = "Всеволод";
        const e2 = "-4,5";  
        const e22 = "-4.5";                  
        const e3 = "2";                    
        const e4 = "первый"; 
        const e42 = "второй";                   
        const e5 = "ми";
        const e52 = "ми минор";
        const e53 = "em"; 
        const e54 = "Em"; /* easy 5th question */
        if  ((answer === e1 && e1triggered) || (answer === e12 && e1triggered)){
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            e1triggered = false;
        }   else if ((answer === e2 && e2triggered) || (answer === e22 && e2triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();  
            e2triggered = false;
        }   else if ((answer === e3 && e3triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            e3triggered = false;
        }   else if ((answer === e4 && e4triggered) || (answer === e42 && e4triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            e4triggered = false;
        }   else if ((answer === e5 && e5triggered) || (answer === e52 && e5triggered) || (answer === e53 && e5triggered) || (answer === e54 && e5triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            e5triggered = false;
    }
    else {counter = 1; document.getElementById("reply").innerText = "Wrong!"; location.reload();}
    }