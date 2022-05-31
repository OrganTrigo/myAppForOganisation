let question = -1;
let chrono;
window.addEventListener("load", () => {
  // document.getElementById('nom_joueur').textContent=sessionStorage.getItem('nom');
  passer();
});

function createQuestion(title, reponses,num) {
  return `<h4 style="text-align: center">${title}</h4>
       <div>  
            <div style="display:flex;justify-content:space-between">
                <p id="progress_Quiz">Question  ${num}/15</p>
                <p id="timer"></p>
            </div>
            <progress id="pb" style="display:block;background-color:green;height:8px;border-radius:100px; width:100%;"progress max="60" value=0 ></progress>
        </div>
    <label for="a1" style="border: solid 0.1px;display:block;padding: 0.3em;margin-top:2.5rem;margin-bottom:1.5rem; border-width:0.01px ;">
        <input type="radio" name="r1" id="a1" value="a1">${reponses[0]}<br>
    </label>


    <label for="a2" style="border: solid 0.1px;display:block;padding: 0.3em;margin-bottom:1.5rem">
        <input type="radio" name="r1" id="a2" value="a2">${reponses[1]}<br>
    </label>

    <label for="a3" style="border: solid 0.1px;display:block;padding: 0.3em;margin-bottom:1.5rem">
        <input type="radio" name="r1" id="a3" value="a3">${reponses[2]}<br>
    </label>

    <label for="a4" style="border: solid 0.1px;display:block;padding: 0.3em;">
        <input type="radio"     name="r1" id="a4" value="a4">${reponses[3]}
    </label>
    `;
}

let q1 = createQuestion("Qui a crée java script", [
  "brendan eich",
  "Larry Page",
  "Mark Zuckerberg",
  "François disubi",
],1);

let q2 = createQuestion("Quel le type d'un fichier js", [".js", ".txt", ".ex"],2);

let q3 = createQuestion("comment declare t-on une variable en  js", [
  "$",
  "let",
  "echo",
  "variable",
],3);

let q4 = createQuestion("Java script a été inventé en quelle année", [
  "1978",
  "2000",
  "1990",
  "1995",
],4);

let q5 = createQuestion("javascript est un langage?", [
  "interpreté",
  "compilé",
  "traduit",
  "chinois",
],5);
let q6 = createQuestion("Une extension utile pour travailler en JavaScript avec Visual Studio Code s'appelle _",[

  "Navigator",
  "Live Server",
  "Simul.js",
  "Js Client",
  
],6);

let q7 = createQuestion("javascript est standarisé par ___",[

  
"l'ISO",
"Mozilla",
"l'ECMA",
"Apache",

  
],7);

let q8 = createQuestion("L'URL est representé par l'objet window.  __",[
  
"path",
"location",
"url",
"address",

  
],8);

let q9 = createQuestion("Pour créer une chaîne de caractères à partir d'un array, on utilise la méthode _____._",[

  "join()",  
 " cast()",
  "extract()",
  "string()",
  
  
],9);

let q10 = createQuestion("Pour créer un text on utilise la methode? _",[

"createElement()",
"createTextNode()",
"addElement()",
"addTextNode()",
 ],10);

let q11 = createQuestion("Pour modifier un élément du DOM, on peut utiliser la méthode _____. _",[

  
"writeElement()",
"setAttribute()",
"setElement()",
"writeAttribute()",
  
],11);

let q12 = createQuestion("L'évènement _____ se déclenche quand on entre dans un champ de formulaire.",[

"select",
"focus",
"activate",
"enter",

  
    
  ],12);

  let q13 = createQuestion("Pour utiliser une boucle for sur les éléments d'un array, on utilise le mot-clé _____.",[

  
   
"between",
"loop",
"each",
"in",


    
      
    ],13); 

    let q14 = createQuestion("La syntaxe ECMA6 d'invocation directe d'une fonction est _____.",[

"$>",
"=>",
">>",
"->",

        
      ],14);

      let q15 = createQuestion("Le mot-clé _____ permet de définir la valeur de retour d'une fonction.",[

  
"result",
"set",
"return",
"define",

    ],15);




let tab_questions = [
  { e: q1, r: "a1" },
  { e: q2, r: "a1" },
  { e: q3, r: "a2" },
  { e: q4, r: "a4" },
  { e: q5, r: "a1" },
  { e: q6, r: "a2" },
  { e: q7, r: "a3" },
  { e: q8, r: "a2" },
  { e: q9, r: "a1" },
  { e: q10, r: "a2" },
  { e: q11, r: "a2" },
  { e: q12, r: "a2" },
  { e: q13, r: "a4" },
  { e: q14, r: "a2" },
  { e: q15, r: "a3" },
];
// console.log(tab_questions);
//rc = reponse cochée
let answers_array = [
  { e: q1, r: "a1", rc: "" },     
  { e: q2, r: "a1", rc: "" },    
  { e: q3, r: "a2", rc: "" },    
  { e: q4, r: "a4", rc: "" },      
  { e: q5, r: "a1", rc: "" }, 
  { e: q6, r: "a2", rc: "" },
  { e: q7, r: "a3", rc: "" }, 
  { e: q8, r: "a2", rc: "" },
  { e: q9, r: "a1", rc: "" },
  { e: q10, r: "a2", rc: "" },
  { e: q11, r: "a2", rc: "" },
  { e: q12, r: "a2", rc: "" },  
  { e: q13, r: "a4", rc: "" }, 
  { e: q14, r: "a2", rc: "" },  
  { e: q15, r: "a3", rc: "" },      
];
// console.log(answers_array);


function starttimer() {
let timer = document.getElementById("timer");
  let time = 60;
  let pb=document.getElementById("pb");
  pb.value=time;
  timer.textContent = time;
  chrono = setInterval(() => {
    time--;
    timer.textContent = time;
    pb.value=time;
    if (time == 0) {
       passer();
    }
  }, 1000);
}

let next = document.getElementById("next");
next.addEventListener("click", passer);

function passer() {
    //next.setAttribute prend en paramettre deux arguments l'attribut(disable)et la value ''
    next.setAttribute('disabled','');
    //next.className ça permet de manipuler le contenu de la classe
  next.className='inact';
  question++;
  if (question < tab_questions.length) {
    //on accede au questionnaire html on lui ajoute les elements du tableau tab_questions
    //on ajoute l'enoncé e pour acceder à ces élements
    document.getElementById("questionnaire").innerHTML =
      tab_questions[question].e;
    //a chaque fois qu''il ya existance de nouvel input on affecte l'evenement
    input_add_event_change();
    window.clearInterval(chrono);
    starttimer();
  } else {
    result_calcul();
  }
}


function catch_answers(e) {
  //e.target.id permet d'acceder à l'id de l'element qui a declanché l'event
  //answers_array[question].rc=... nous permet d'acceder à la proprieté rc de l'element du tableau à l'indice question
  answers_array[question].rc = e.target.id;
  //dès qu'on clique sur un radio button automatiquement on supprime l'attribut disabled grace à removeattribute
  next.removeAttribute('disabled');
  //ensuite on change le nom de la classe
  next.className='act'

}
//cette fonction ajoute l'evenement 'change' à chaque input
function input_add_event_change() {
  //inputs est un tableau qui contients tous les inputs de notre page
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    //on associe l'evenement change aux inputs et on execute la fonction catch answers
    // ça permet de capter ou recuperer l'element qui a declanché l'evenement
    //e ou event
    input.addEventListener("change", (e) => {
      catch_answers(e);
      console.log(e);
      
      
    });
  }
}

function result_calcul() {
  //cette permet de compter le nombre d'elements qui correspondent cad le nombre de cases ou
  //l'assertion cochée correspnd à la reponse prevue
  // filter c'est une qui permet de filtre un array
  //e permet de l'element en cours
  let good_answer_count = answers_array.filter((e) => e.r == e.rc).length;
  console.log(good_answer_count);
  //injecter le code html du resultat.

  let result = `
   <figure style="text-align:center ;">
   ${
    good_answer_count >= answers_array.length / 2
      ? "<img src='validate.png' width='50%'>"
      : "<img src='png-faux.png' width='50%'>"
  }
  </figure>

            <h4 style="text-align:center;"> ${good_answer_count}/${answers_array.length}</h4>
         
        `;
  //on arrete le chrono
  window.clearInterval(chrono);
  timer.textContent = "";
  document.getElementById("nom_joueur").textContent =
    sessionStorage.getItem("nom");
  document.getElementById("adress_mail").textContent =
    sessionStorage.getItem("mail");

// document.getElementById("questionnaire").prepend(img);
  document.getElementById("questionnaire").innerHTML = result;
  //   document.getElementById("x").innerHTML=`
  //   <img src="validate.png" alt="">
  //   `
  //remplace le contenu html de l'id btns par un lien
  document.getElementById("btns").innerHTML = `<a href="index.html" style=" padding-left: 15%;padding-right: 15%;padding-top: 4%;padding-bottom: 4%;color:white;background-color:blue;text-decoration:none;font-weight:bold" >Accueil</a>`;
}

document.getElementById("terminer").addEventListener("click", () => {
  result_calcul();
});

