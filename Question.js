let question = -1;
let chrono;
window.addEventListener("load", () => {
  passer();
});
function createQuestion(title, reponses, num) {
  return `<p style="text-align: center; margin-bottom:20px">${title}</p>
       <div>  
            <div style="display:flex;justify-content:space-between ;padding:1px">
                <p id="progress_Quiz" style="font-size:80%; margin:0px ">Question  ${num}/15</p>
                <p id="timer" style="font-size:80%; margin:0px"></p>
            </div>
            <progress id="pb" style="display:block;background-color:white;color:green;height:8px;border-radius:100px; width:100%;"progress max="60" value=0 ></progress>
        </div>
    <label for="answer1" >
        <input type="radio" name="r1" id="answer1" value="answer1">${reponses[0]}<br>
    </label>
    <label for="answer2" >
        <input type="radio" name="r1" id="answer2" value="answer2">${reponses[1]}<br>
    </label>
    <label for="answer3">
        <input type="radio" name="r1" id="answer3" value="answer3">${reponses[2]}<br>
    </label>
    <label for="answer4">
        <input type="radio" name="r1" id="answer4" value="answer4">${reponses[3]}
    </label>
    `;
}
let q1 = createQuestion(
  "Qui a créé java script",
  ["brendan eich", "Larry Page", "Mark Zuckerberg", "François disubi"],
  1
);
let q2 = createQuestion(
  "Quel le type d'un fichier js",
  [".js", ".txt", ".ex"],
  2
);
let q3 = createQuestion(
  "comment declare t-on une variable en  js",
  ["$", "let", "echo", "variable"],
  3
);
let q4 = createQuestion(
  "Java script a été inventé en quelle année",
  ["1978", "2000", "1990", "1995"],
  4
);
let q5 = createQuestion(
  "javascript est un langage?",
  ["interpreté", "compilé", "traduit", "chinois"],
  5
);
let q6 = createQuestion(
  "Une extension utile pour travailler en JavaScript avec Visual Studio Code s'appelle _",
  ["Navigator", "Live Server", "Simul.js", "Js Client"],
  6
);
let q7 = createQuestion(
  "javascript est standarisé par ___",
  ["l'ISO", "Mozilla", "l'ECMA", "Apache"],
  7
);
let q8 = createQuestion(
  "L'URL est representé par l'objet window.  __",
  ["path", "location", "url", "address"],
  8
);
let q9 = createQuestion(
  "Pour créer une chaîne de caractères à partir d'un array, on utilise la méthode _____._",
  ["join()", " cast()", "extract()", "string()"],
  9
);
let q10 = createQuestion(
  "Pour créer un text on utilise la methode? _",
  ["createElement()", "createTextNode()", "addElement()", "addTextNode()"],
  10
);
let q11 = createQuestion(
  "Pour modifier un élément du DOM, on peut utiliser la méthode _____. _",
  ["writeElement()", "setAttribute()", "setElement()", "writeAttribute()"],
  11
);
let q12 = createQuestion(
  "L'évènement _____ se déclenche quand on entre dans un champ de formulaire.",
  ["select", "focus", "activate", "enter"],
  12
);
let q13 = createQuestion(
  "Pour utiliser une boucle for sur les éléments d'un array, on utilise le mot-clé _____.",
  ["between", "loop", "each", "in"],
  13
);
let q14 = createQuestion(
  "La syntaxe ECMA6 d'invocation directe d'une fonction est _____.",
  ["$>", "=>", ">>", "->"],
  14
);
let q15 = createQuestion(
  "Le mot-clé _____ permet de définir la valeur de retour d'une fonction.",
  ["result", "set", "return", "define"],
  15
);
let tab_questions = [
  { e: q1, response: "answer1" },
  { e: q2, response: "answer1" },
  { e: q3, response: "answer2" },
  { e: q4, response: "answer4" },
  { e: q5, response: "answer1" },
  { e: q6, response: "answer2" },
  { e: q7, response: "answer3" },
  { e: q8, response: "answer2" },
  { e: q9, response: "answer1" },
  { e: q10, response: "answer2" },
  { e: q11, response: "answer2" },
  { e: q12, response: "answer2" },
  { e: q13, response: "answer4" },
  { e: q14, response: "answer2" },
  { e: q15, response: "answer3" },
];
let answers_array = [
  { e: q1, response: "answer1", rc: "" },
  { e: q2, response: "answer1", rc: "" },
  { e: q3, response: "answer2", rc: "" },
  { e: q4, response: "answer4", rc: "" },
  { e: q5, response: "answer1", rc: "" },
  { e: q6, response: "answer2", rc: "" },
  { e: q7, response: "answer3", rc: "" },
  { e: q8, response: "answer2", rc: "" },
  { e: q9, response: "answer1", rc: "" },
  { e: q10, response: "answer2", rc: "" },
  { e: q11, response: "answer2", rc: "" },
  { e: q12, response: "answer2", rc: "" },
  { e: q13, response: "answer4", rc: "" },
  { e: q14, response: "answer2", rc: "" },
  { e: q15, response: "answer3", rc: "" },
]; 

function starttimer() {
  let timer = document.getElementById("timer");
  let time = 60;
  let pb = document.getElementById("pb");
  pb.value = time;
  timer.textContent = time;
  chrono = setInterval(() => {
    time--;
    timer.textContent = time;
    pb.value = time;
    if (time == 0) {
      passer();
    }
  }, 1000);
}
let next = document.getElementById("next");
next.addEventListener("click", passer);
function passer() {
  next.setAttribute("disabled", "");
  next.className = "inact";
  console.log("Avant", question);
  question++;
  console.log("Après", question);
  console.log("tab_questions.length", tab_questions.length);
  if (question < tab_questions.length) {
    document.getElementById("questionnaire").innerHTML =
      tab_questions[question].e;
    input_add_event_change();
    window.clearInterval(chrono);
    starttimer();
    if (question == tab_questions.length-1) {
      change_button();
    }
  } else {
    result_calcul();
  }
}
function change_button() {
  document.getElementById("next").innerHTML = "termier";
  window.clearInterval(chrono);
}

function catch_answers(e) {
  answers_array[question].rc = e.target.id;
  next.removeAttribute("disabled");
  next.className = "act";
}
function input_add_event_change() {
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    input.addEventListener("change", (e) => {
      catch_answers(e);
    });
  }
}

function result_calcul() {
  
  let good_answer_count = answers_array.filter((e) => e.response == e.rc).length;
  let result = `
   <figure style="text-align:center ;">
   ${
     good_answer_count >= answers_array.length / 2
       ? "<img src='validate.png' width='45%'>"
       : "<img src='croix.png' width='45%'>"
   }
  </figure>
            <h4 style="text-align:center;"> ${good_answer_count}/${ answers_array.length}</h4>
        `;
  window.clearInterval(chrono);
  timer.textContent = "";
  document.getElementById("nom_joueur").textContent =
    sessionStorage.getItem("nom");
  document.getElementById("adress_mail").textContent =
    sessionStorage.getItem("mail");
  document.getElementById("questionnaire").innerHTML = result;
  document.getElementById("btns").innerHTML = `<a href="index.html" style=" padding-left: 15%;padding-right: 15%;padding-top: 4%;padding-bottom: 4%;color:white;background-color:blue;text-decoration:none;font-weight:bold" >Accueil</a>`;
}
document.getElementById("terminer").addEventListener("click", () => {
  result_calcul();
});
