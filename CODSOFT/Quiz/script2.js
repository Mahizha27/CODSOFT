const questions = [
{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language",correct:true},
{text:"High Text Machine Language",correct:false},
{text:"Hyper Transfer Markup Language",correct:false},
{text:"None",correct:false}
]
},
{
question:"Which language is used for styling web pages?",
answers:[
{text:"HTML",correct:false},
{text:"CSS",correct:true},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},
{
question:"Which language is used for web interactivity?",
answers:[
{text:"JavaScript",correct:true},
{text:"C++",correct:false},
{text:"SQL",correct:false},
{text:"PHP",correct:false}
]
},
{
question:"What does HTML stand for?",
answers:[
{text:"Hyper Text Markup Language",correct:true},
{text:"High Text Machine Language",correct:false},
{text:"Hyper Transfer Markup Language",correct:false},
{text:"None",correct:false}
]
},
{
question:"Which language is used for styling web pages?",
answers:[
{text:"CSS",correct:true},
{text:"HTML",correct:false},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},
{
question:"Which language is used for web interactivity?",
answers:[
{text:"JavaScript",correct:true},
{text:"C++",correct:false},
{text:"SQL",correct:false},
{text:"PHP",correct:false}
]
},
{
question:"What does CSS stand for?",
answers:[
{text:"Cascading Style Sheets",correct:true},
{text:"Creative Style System",correct:false},
{text:"Computer Style Sheet",correct:false},
{text:"Colorful Style Sheet",correct:false}
]
},
{
question:"Which tag creates a hyperlink?",
answers:[
{text:"<a>",correct:true},
{text:"<link>",correct:false},
{text:"<href>",correct:false},
{text:"<url>",correct:false}
]
},
{
question:"Which company developed JavaScript?",
answers:[
{text:"Netscape",correct:true},
{text:"Google",correct:false},
{text:"Microsoft",correct:false},
{text:"Apple",correct:false}
]
},
{
question:"Which HTML tag is used for images?",
answers:[
{text:"<img>",correct:true},
{text:"<image>",correct:false},
{text:"<pic>",correct:false},
{text:"<src>",correct:false}
]
},
{
question:"Which symbol is used for IDs in CSS?",
answers:[
{text:"#",correct:true},
{text:".",correct:false},
{text:"*",correct:false},
{text:"@",correct:false}
]
},
{
question:"Which method displays output in JavaScript?",
answers:[
{text:"console.log()",correct:true},
{text:"print()",correct:false},
{text:"display()",correct:false},
{text:"show()",correct:false}
]
},
{
question:"Which HTML tag is used for headings?",
answers:[
{text:"<h1>",correct:true},
{text:"<head>",correct:false},
{text:"<title>",correct:false},
{text:"<p>",correct:false}
]
},
{
question:"What does SQL stand for?",
answers:[
{text:"Structured Query Language",correct:true},
{text:"Simple Query Language",correct:false},
{text:"System Query Language",correct:false},
{text:"Sequential Query Language",correct:false}
]
},
{
question:"Which database is commonly used with Node.js?",
answers:[
{text:"MongoDB",correct:true},
{text:"MS Paint",correct:false},
{text:"Photoshop",correct:false},
{text:"Excel",correct:false}
]
},
{
question:"Which property changes text color in CSS?",
answers:[
{text:"color",correct:true},
{text:"background",correct:false},
{text:"font-size",correct:false},
{text:"text-style",correct:false}
]
},
{
question:"Which keyword declares a variable in JavaScript?",
answers:[
{text:"let",correct:true},
{text:"varible",correct:false},
{text:"int",correct:false},
{text:"string",correct:false}
]
},
{
question:"Which HTML element is used for paragraphs?",
answers:[
{text:"<p>",correct:true},
{text:"<para>",correct:false},
{text:"<text>",correct:false},
{text:"<paragraph>",correct:false}
]
}
];


let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next");

function showQuestion(){
resetState();

let q = questions[currentQuestion];
questionElement.innerText = q.question;

q.answers.forEach(answer=>{
const button = document.createElement("button");
button.innerText = answer.text;
button.classList.add("answer-btn");
button.addEventListener("click",()=>{
if(answer.correct) score++;
nextButton.style.display="block";
});
answersElement.appendChild(button);
});
}

function resetState(){
answersElement.innerHTML="";
nextButton.style.display="none";
}

nextButton.addEventListener("click",()=>{
currentQuestion++;

if(currentQuestion < questions.length){
showQuestion();
}else{
document.getElementById("quiz").classList.add("hide");
document.getElementById("result").classList.remove("hide");
document.getElementById("score").innerText =
score + "/" + questions.length;
}
});

showQuestion();