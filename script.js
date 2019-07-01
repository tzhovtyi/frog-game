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
var w1triggered = true;
var w2triggered = true;
var w3triggered = true;
var w4triggered = true;
var w5triggered = true;
var c1triggered = true;
var c2triggered = true;
var c3triggered = true;
var c4triggered = true;
var c5triggered = true;
var r1triggered = true;
var r2triggered = true;
var r3triggered = true;
var r4triggered = true;
var r5triggered = true;
var i1triggered = true;
var i2triggered = true;
var i3triggered = true;
var i4triggered = true;
var i5triggered = true;
var m1triggered = true;
var m2triggered = true;
var m3triggered = true;
var m4triggered = true;
var m5triggered = true;
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
        const w1 = "обломов"; //ЧГК 1 вопрос         
        const w2 = "орео";         
        const w3 = "сибирь";       
        const w4 = "где она будет";                     
        const w5 = "философский пароход"; /* ЧГК 5th question */ 
        const c1 = "антарктика"; /* Энциклопедия 1st question */ 
        const c12 = "антарктида";    
        const c2 = "колибри";     
        const c3 = "лезвие"; 
        const c32 = "хуй";       
        const c4 = "18";            
        const c5 = "вашингтон";
        const c52 = "washington"; /* Энциклопедия 5th question */   
        const r1 = "storm"; //Загадки
        const r2 = "тапочки";
        const r3 = "death";
        const r4 = "gum";
        const r5 = "ямщик"; 
        const r52 = "кучер"; //Загадки
        const i1 = "реализм"; // Международные..
        const i2 = "один пояс один путь";
        const i22 = "один пояс и один путь";
        const i3 = "28";
        const i32 = "28000000000000";
        const i4 = "huntington";
        const i5 = "нобелевская премия"; //...Отнощения
        const m1 = "floppa"; //мемы
        const m12 = "шлепа";
        const m13 = "шлёпа"; 
        const m14 = "каракал";
        const m15 = "caracal";
        const m2 = "лягушка";
        const m22 = "легушка";
        const m23 = "легушька";
        const m24 = "легущка";
        const m25 = "аннигиляторная пушка";
        const m3 = "he turned himself into a pickle";
        const m32 = "he turns himself into a pickle";
        const m4 = "omg me";
        const m42 = "OMG me";
        const m5 = "nigga";
        if  ((answer === e1 && e1triggered) || (answer === e12 && e1triggered) || (answer === w1 && w1triggered) || (answer === c1 && c1triggered) || (answer === c12 && c1triggered) ||  (answer === r1 && r1triggered) || (answer === m1 && m1triggered) || (answer === m12 && m1triggered) || (answer === m13 && m1triggered) || (answer === m14 && m1triggered) || (answer === m15 && m1triggered) || (answer === i1 && i1triggered)){
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            anime({
            targets: '#zhaba',
            easing: 'easeInOutQuad',
            duration: 800,
            left: "75%",
            top: "65%"
});
            e1triggered = false;
            w1triggered = false;
            c1triggered = false;
            r1triggered = false;
            i1triggered = false;
            m1triggered = false;
        }   else if ((answer === e2 && e2triggered) || (answer === e22 && e2triggered) || (answer === w2 && w2triggered) || (answer === c2 && c2triggered) || (answer === r2 && r2triggered) || (answer === m2 && m2triggered) || (answer === m22 && m2triggered) || (answer === m23 && m2triggered) || (answer === m24 && m2triggered) || (answer === m25 && m2triggered) || (answer === m2 && m2triggered) || (answer === i22 && i2triggered) || (answer === i2 && i2triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();  
            anime({
            targets: '#zhaba',
            easing: 'easeInOutQuad',
            left: "50%",
            duration: 800,
            top: "47%",
});
            e2triggered = false;
            w2triggered = false;
            c2triggered = false;
            r2triggered = false;
            i2triggered = false;
            m2triggered = false;
        }   else if ((answer === e3 && e3triggered) || (answer === w3 && w3triggered) || (answer === c3 && c3triggered) || (answer === c32 && c3triggered) || (answer === r3 && r3triggered) || (answer === i3 && i3triggered) || (answer === i32 && i3triggered) || (answer === m3 && m3triggered) || (answer === m32 && m3triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            anime({
            targets: '#zhaba',
            easing: 'easeInOutQuad',
            duration: 800,
            left: "75%",
            top: "33%"
});
            e3triggered = false;
            w3triggered = false;
            c3triggered = false;
            r3triggered = false;
            i3triggered = false;
            m3triggered = false;
        }   else if ((answer === e4 && e4triggered) || (answer === e42 && e4triggered) || (answer === w4 && w4triggered) || (answer === c4 && c4triggered) || (answer === r4 && r4triggered) || (answer === i4 && i4triggered) || (answer === m4 && m4triggered) || (answer === m42 && m4triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            anime({
            targets: '#zhaba',
            easing: 'easeInOutQuad',
            duration: 800,
            left: "40%",
            top: "20%"
});
            e4triggered = false;
            w4triggered = false;
            c4triggered = false;
            r4triggered = false;
            i4triggered = false;
            m4triggered = false;
        }   else if ((answer === e5 && e5triggered) || (answer === e52 && e5triggered) || (answer === e53 && e5triggered) || (answer === e54 && e5triggered) || (answer === w5 && w5triggered) || (answer === c5 && c5triggered) || (answer === c52 && c5triggered) || (answer === r5 && r5triggered) || (answer === r52 && r5triggered) || (answer === i5 && i5triggered) || (answer === m5 && m5triggered)) {
            document.getElementById("reply").innerText = "good";
            changeQuestion();
            anime({targets: '#zhaba', easing: 'easeInOutQuad', duration: 800, left: "10%", 
            top: "13%", 
            rotate: {
                delay: 270,
                value: 360,
                duration: 400,
                easing: 'easeInOutSine'}
});
            e5triggered = false;
            w5triggered = false;
            c5triggered = false;
            r5triggered = false;
            i5triggered = false;
            m5triggered = false;
    }
    else {counter = 1; document.getElementById("reply").innerText = "Wrong!"; location.reload();}
    }
    function chooseAFrog1() {modal.style.display = "none"; document.getElementById('images').innerHTML = '<img src="hearts.png" alt="image1" style="width: 100%; height: 100%; position: absolute">'}
    function chooseAFrog2() {modal.style.display = "none"; document.getElementById('images').innerHTML = '<img src="magician.png" alt="image2" style="width: 100%; height: 100%; position: absolute">'}
    function chooseAFrog3() {modal.style.display = "none"; document.getElementById('images').innerHTML = '<img src="realism.png" alt="image3" style="width: 100%; height: 80%; position: absolute">'}
    function chooseAFrog4() {modal.style.display = "none"; document.getElementById('images').innerHTML = '<img src="https://image.flaticon.com/icons/png/512/2742/2742178.png" alt="image4" style="width: 100%; height: 100%; position: absolute">'}
    function chooseAFrog5() {modal.style.display = "none"; document.getElementById('images').innerHTML = '<img src="https://image.flaticon.com/icons/png/512/1808/1808086.png" alt="image5" style="width: 100%; height: 100%; position: absolute">'}
var modal = document.getElementById("myModal"); // Get the modal
var btn = document.getElementById("myBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
btn.onclick = function() {modal.style.display = "block";} // When the user clicks on the button, open the modal
span.onclick = function() {modal.style.display = "none";} // When the user clicks on <span> (x), close the modal
var modal2 = document.getElementById("myModal2"); // Get the modal
var btn2 = document.getElementById("ButtonQuestions"); // Get the button that opens the modal
var span2 = document.getElementsByClassName("close2")[0]; // Get the <span> element that closes the modal
btn2.onclick = function() {modal2.style.display = "block";} // When the user clicks on the button, open the modal
span2.onclick = function() {modal2.style.display = "none";} // When the user clicks on <span> (x), close the modal
function chooseDifficultyEasy() { 
    var a = document.getElementById("q1").innerHTML;
a = "Напишите имя первого князя, которого выгнали бояре Новгородской республики";
modal2.style.display = "none";
document.getElementById("q2").innerHTML = "Найдите x: <br> 3x(x-1)-17=x(1+3x)+1";
document.getElementById("q3").innerHTML = "Сколько всего гендеров? Ответ запишите цифрой";
document.getElementById("q4").innerHTML = "Какой Шрек лучше? Ответ запишите порядковым числительным";
document.getElementById("q5").innerHTML = "Напишите параллельный минор соль мажора";
document.getElementById("qs").innerHTML = a;
}
function chooseDifficultyWWW() {
    var a = document.getElementById("q1").innerHTML;
a = "По мнению Набокова, Россию погубили два Ильича. Один - Ленин, а второй? Запишите его фамилию";
modal2.style.display = "none";
document.getElementById("q2").innerHTML = "Негров, которые стремятся примазаться к белым сливкам общества, в США презрительно называют словом, первая и последняя буква которого одинаковы. Каким?";
document.getElementById("q3").innerHTML = "Рассказывают, что Наполеон и его окружение называли остров Святой Елены 'Тропическая ОНА'. Получившееся словосочетание является оксюмороном. Что мы заменили словом 'ОНА'? Ответ запишите строчными буквами";
document.getElementById("q4").innerHTML = "Закончите афоризм великого хоккеиста Уэйна Гретцки: «Хорошие игроки находятся там, где шайба, а великие — там, ...»";
document.getElementById("q5").innerHTML = "Дуплет. 1. На НЕГО можно было взять с собой ценностей на сумму не более 50 рублей золотом, но ГПУ оплачивало билет второго класса. Назовите ЕГО двумя словами. 2. Цитата из стихотворения Александра Кушнера: <br>Есть на нем биллиард и буфет, <br>А гудок его смутный и жалобный: <br>ни Толстого, ни Пушкина нет. <br>Назовите ЕГО двумя словами.";
document.getElementById("qs").innerHTML = a;
}
function chooseDifficultyEncyclopedia() {
    var a = document.getElementById("q1").innerHTML;
a = "Как называется материк, на котором находится самая большая пустыня?";
modal2.style.display = "none";
document.getElementById("q2").innerHTML = "Единственная птица, которая может летать задом наперед";
document.getElementById("q3").innerHTML = "Между плитами пирамиды Хеопса невозможно просунуть _____";
document.getElementById("q4").innerHTML = "Сколько выборов проиграл Линкольн до президенства?";
document.getElementById("q5").innerHTML = "В каком штате Америки снимали Twin Peaks?";
document.getElementById("qs").innerHTML = a;
}
function chooseDifficultyRiddles() {
    var a = document.getElementById("q1").innerHTML;
a = "I have an eye <br><br>But cannot see. <br><br>You’ll head inside <br><br>When you see me. <br>Все ответы строчными буквами";
modal2.style.display = "none";
document.getElementById("q2").innerHTML = "Сзади подошёл, <br><br>Два раза сунул и пошёл";
document.getElementById("q3").innerHTML = "They try to beat me,<br><br>They try in vain,<br><br>And when I win<br><br>I end the pain";
document.getElementById("q4").innerHTML = "I go in hard. <br><br>I come out soft. <br><br>You blow me hard. <br><br>What am I?";
document.getElementById("q5").innerHTML = "На попе сидит <br><br>И в попу глядит. <br><br>Что это за профессия?";
document.getElementById("qs").innerHTML = a;
}
function chooseDifficultyIR() {
    var a = document.getElementById("q1").innerHTML;
a = "Какой классической теории международных отношений противоречит понятие 'power diffusion'? Запишите строчными буквами";
modal2.style.display = "none";
document.getElementById("q2").innerHTML = "Как называется Внешнеполитическая экономическая инициатива 习近平? Запишите без знаков препинания строчными буквами";
document.getElementById("q3").innerHTML = "Внешний долг США, округленный до трлн (в долларах). Ответ запишите числом";
document.getElementById("q4").innerHTML = "Автор концепции этнокультурного разделения цивилизаций. Запишите его фамилию по-английски с маленькой буквы";
document.getElementById("q5").innerHTML = "Это было у Обамы и Г.Киссинджера. Трамп тоже это хотел, что привело к его попыткам стать посрединком в отношениях стран Корейского полуострова. Что это? Ответ запишите строчными буквами";
document.getElementById("qs").innerHTML = a;
}
function chooseDifficultyMemes() {
    var a = document.getElementById("q1").innerHTML;
a = "Comitted several war crimes in Serbia (not proved). Now is a citizen of the world. Is also known as the big Russian cat";
modal2.style.display = "none";
document.getElementById("q2").innerHTML = "Я шепну тебе на ушко:";
document.getElementById("q3").innerHTML = "What is the funniest shit we've ever seen? (Start your answer with 'he')";
document.getElementById("q4").innerHTML = "Who wants their juissy ate?";
document.getElementById("q5").innerHTML = "Вставьте последнее слово, которое говорящий напевает, строчными буквами:'Ah, nigga, don't hate me 'cause I'm beautiful, nigga. Maybe if you got rid of that old yee-yee ass haircut you got you'd get some bitches on your dick. Oh, better yet, maybe Tanisha'll call your dog-ass if she ever stop fuckin' with that brain surgeon or lawyer she fucking with. _____'";
document.getElementById("qs").innerHTML = a;
}
var input = document.getElementById("ans"); //даня твой код был гавно, а этот работает, но я не понимаю вообще, зачем вот эта строчка, 
input.addEventListener("keyup", function(event) {  //типа зачем нам var input, у нас все равно кнопка затриггерит функцию, которая свзязна с input, здесь он что вообще делает 
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("butt1").click();
    }
});