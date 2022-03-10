const myquize = [
    {
        question :"Who is the Father of our Nation?",
        a: "Mahatma Gandhi",
        b: "Javaharlal Naheru",
        c: "SubhashChandra Boj",
        d: "Sardar Patel",
        correct: "a"
    },
    {
        question: "Smallest state of India is?",
        a : "Gujarat",
        b : "Goa",
        c : "Rajsthan",
        d : "Kashmir",
        correct: "b"
    },
    {
        question: "Fastest animal on earth is?",
        a : "Lion",
        b : "Tiger",
        c : "cheetah",
        d : "Beer",
        correct : "c"
    },
    {
        question: "Gir National Park in Gujarat is famous for?",
        a : "Lion",
        b : "Tiger",
        c : "Beer",
        d : "Elephant",
        correct: "a"
    },
    {
        question : "Agra is situated on the bank of river?",
        a : "Ganga",
        b : "Sabarmati",
        c : "Kaveri",
        d : "Yamuna",
        correct : "d"
    },
    {
        question: "India lies in which continent?",
        a : "Afrika",
        b : "England",
        c : "Asia",
        d : "Urop",
        correct : "c"
    }
]
let question1 = document.getElementById("que1");
console.log(question1);
let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');
let quizecounter = 0;
let right = 0;
// let quize = myquize[quizecounter];
quizeload();
let nextbtn = document.getElementById("next");
function quizeload(){
    deselect();
    const quize = myquize[quizecounter];
    question1.innerText = quize.question;
    ans1.innerText = quize.a;
    ans2.innerText = quize.b;
    ans3.innerText = quize.c;
    ans4.innerText = quize.d;
}
function deselect(){
    let answered = document.querySelectorAll('.answered');
    answered.forEach(data=>{
        data.checked = false;
    });
}
nextbtn.addEventListener('click',function(){
    console.log("Clicked");
    let answered = document.querySelectorAll('.answered');
    const quize = myquize[quizecounter];
    answered.forEach(data=>{
        if(data.checked === true){
            let ansid = data.id;
            if(ansid==quize.correct){
                right += 1;
                console.log(right);
            }
            quizecounter += 1;
            if(quizecounter < myquize.length){
                quizeload();
            }
            else{
                const last = document.getElementById('last');
                last.innerHTML = `<h2>You Correct Answer Is ${right} / 6</h2>
                <button id = "retry" style = "top: ">Retry</button>`;
                document.getElementById('retry').addEventListener('click',function(){
                    location.reload();
                });
            }
        }
    });
});



