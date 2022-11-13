const quizData = [
    {
        question: "1. Bez práce ... ",
        a: "se proměníš na rybu.",
        b: "nejsou koláče.",
        
        correct: "b",
    },
    {
      question: "2. Co je šeptem, ...",
      a: "to se stane breptem.",
      b: "to je s čertem.",
      
      correct: "b",
  },
  {
    question: "3. Darovanému koni ...",
    a: "se koukni na zadek.",
    b: "na zuby nekoukej.",
    
    correct: "b",
},
{
  question: "4. Dočkej času ...",
  a: "jako husa klasu.",
  b: "udělej grimasu.",
  
  correct: "a",
},{
  question: "5. Jablko nepadá ...",
  a: "veverkám na hlavu.",
  b: "daleko od stromu.",
  
  correct: "b",
},
{
question: "6. Dvakrát měř, ...",
a: "nikomu nevěř.",
b: "jednou řež.",

correct: "b",
},{
  question: "7. Chybami se člověk...",
  a: "loučí.",
  b: "učí.",
  
  correct: "b",
},
{
question: "8. Kto po tobě kamenem, ...",
a: "ty po něm chlebem.",
b: "ty po něm pokemonem.",

correct: "a",
},{
  question: "9. Láska hory ...",
  a: "přeskakuje.",
  b: "přenáší.",
  
  correct: "b",
},
{
question: "10. Když se dva perou, ...",
a: "třetí se směje.",
b: "třetí jde na záchod.",

correct: "a",
},{
  question: "11. Kto jinému jámu kopá, ...",
  a: "sám do ní padá.",
  b: "bude z něho liška hloupá.",
  
  correct: "a",
},
{
question: "12. Komu se nelení, ...",
a: "tomu se zelení.",
b: "ten se rychle ožení.",

correct: "a",
},{
  question: "13. Hlad má ...",
  a: "velké oči.",
  b: "malé břicho.",
  
  correct: "a",
},
{
question: "14. Lepší vrabec v hrsti, ...",
a: "nežli holub na střeše.",
b: "nežli slepice na dvoře.",

correct: "a",
},{
  question: "15. Kolik řečí umíš, ...",
  a: "tolikrát jsi člověkem.",
  b: "tolikrát ti narostou vlasy.",
  
  correct: "a",
},
{
question: "16. Lež má ...",
a: "krátké nohy.",
b: "dlhé ruce.",

correct: "a",
},{
  question: "17. S jídlem ...",
  a: "roste chuť.",
  b: "roste břicho.",
  
  correct: "a",
},
{
question: "18. Ranní ptáče ...",
a: "pořád pláče.",
b: "dál doskáče.",

correct: "b",
},{
  question: "19. Nové koště ...",
  a: "dobře mete.",
  b: "ještě kvete.",
  
  correct: "a",
},
{
question: "20. Není všechno zlato, ....",
a: "co se třpytí.",
b: "co je těžký.",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })