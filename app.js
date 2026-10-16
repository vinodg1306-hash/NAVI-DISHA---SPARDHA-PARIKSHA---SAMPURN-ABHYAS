/* =========================================================
   📚 ENGLISH GRAMMAR LEARNING APP
   मराठी माध्यमासाठी Interactive Grammar Quiz
   ========================================================= */

/* =========================================================
   📖 TOPIC DATA
   ========================================================= */

const topicData = {

  "1": {
    title: "1. The Sentence (वाक्य)",

    html: `
      <div class="rules-list">

        <h3>वाक्य (Sentence) म्हणजे काय?</h3>

        <p>
          शब्दांचा असा समूह ज्यामधून पूर्ण आणि अर्थपूर्ण विचार व्यक्त होतो,
          त्याला <b>Sentence</b> म्हणतात.
        </p>

        <h4>वाक्याचे मुख्य ४ प्रकार</h4>

        <ul>
          <li>
            <b>Declarative / Assertive:</b>
            साधे विधान.
            <i>The sun gives us light.</i>
          </li>

          <li>
            <b>Interrogative:</b>
            प्रश्नार्थी वाक्य.
            <i>Where do you live?</i>
          </li>

          <li>
            <b>Imperative:</b>
            आज्ञा, विनंती किंवा सूचना.
            <i>Please sit down.</i>
          </li>

          <li>
            <b>Exclamatory:</b>
            आश्चर्य, आनंद, दुःख इत्यादी भावना व्यक्त करणारे वाक्य.
            <i>What a great victory!</i>
          </li>
        </ul>

      </div>
    `,

    questions: [

      {
        q: "A group of words making complete sense is called a _______.",

        opts: [
          "Letter",
          "Clause",
          "Sentence",
          "Phrase"
        ],

        ans: 2,

        exp: "पूर्ण आणि अर्थपूर्ण विचार व्यक्त करणाऱ्या शब्दसमूहाला Sentence म्हणतात."
      },

      {
        q: "'Where are you going?' is which type of sentence?",

        opts: [
          "Assertive",
          "Interrogative",
          "Imperative",
          "Exclamatory"
        ],

        ans: 1,

        exp: "प्रश्न विचारणारे वाक्य Interrogative Sentence असते."
      },

      {
        q: "'Shut the door.' is an example of _______ sentence.",

        opts: [
          "Imperative",
          "Assertive",
          "Optative",
          "Exclamatory"
        ],

        ans: 0,

        exp: "आज्ञा किंवा सूचना दर्शवणारे वाक्य Imperative Sentence असते."
      },

      {
        q: "'Hurrah! We won!' ends with which mark?",

        opts: [
          ".",
          "?",
          "!",
          ","
        ],

        ans: 2,

        exp: "उद्गारार्थी वाक्यात Exclamation Mark (!) वापरले जाते."
      },

      {
        q: "Every sentence must begin with a _______ letter.",

        opts: [
          "Small",
          "Capital",
          "Bold",
          "Cursive"
        ],

        ans: 1,

        exp: "इंग्रजी वाक्याची सुरुवात साधारणपणे Capital Letter ने केली जाते."
      }

    ]
  },


  /* ===================================================== */

  "12": {

    title: "12. Tenses (काळ व त्याचे प्रकार)",

    html: `
      <div class="rules-list">

        <h3>काळ (Tense) कशाला म्हणतात?</h3>

        <p>
          क्रियेच्या वेळेचा बोध करून देणाऱ्या क्रियापदाच्या रूपाला
          <b>Tense</b> म्हणतात.
        </p>

        <h4>काळाचे मुख्य ३ प्रकार</h4>

        <ul>

          <li>
            <b>Present Tense:</b>
            वर्तमानकाळ.
            <i>I eat an apple.</i>
          </li>

          <li>
            <b>Past Tense:</b>
            भूतकाळ.
            <i>I ate an apple.</i>
          </li>

          <li>
            <b>Future Tense:</b>
            भविष्यकाळ.
            <i>I will eat an apple.</i>
          </li>

        </ul>

        <h4>लक्षात ठेवा</h4>

        <p>
          Present = आता / नेहमी<br>
          Past = पूर्वी / काल<br>
          Future = पुढे / उद्या
        </p>

      </div>
    `,

    questions: [

      {
        q: "She _______ to school every day.",

        opts: [
          "go",
          "goes",
          "going",
          "gone"
        ],

        ans: 1,

        exp: "Simple Present Tense मध्ये 'She' सोबत 'goes' वापरले जाते."
      },

      {
        q: "I _______ a movie yesterday.",

        opts: [
          "see",
          "saw",
          "seen",
          "seeing"
        ],

        ans: 1,

        exp: "'Yesterday' हा भूतकाळ दर्शवतो. त्यामुळे 'saw' योग्य आहे."
      },

      {
        q: "We _______ play cricket tomorrow.",

        opts: [
          "will",
          "did",
          "have",
          "are"
        ],

        ans: 0,

        exp: "'Tomorrow' भविष्यकाळ दर्शवतो. त्यामुळे 'will' योग्य आहे."
      },

      {
        q: "They _______ playing right now.",

        opts: [
          "is",
          "am",
          "are",
          "was"
        ],

        ans: 2,

        exp: "Present Continuous मध्ये 'They' सोबत 'are' वापरले जाते."
      },

      {
        q: "He has _______ his work.",

        opts: [
          "finish",
          "finished",
          "finishing",
          "finishes"
        ],

        ans: 1,

        exp: "'Has' नंतर क्रियापदाचे तिसरे रूप म्हणजे V3 वापरले जाते. त्यामुळे 'finished' योग्य आहे."
      }

    ]
  },


  /* ===================================================== */

  "17": {

    title: "17. Articles (A, An, The)",

    html: `
      <div class="rules-list">

        <h3>Articles म्हणजे काय?</h3>

        <p>
          इंग्रजी भाषेत नामाच्या आधी वापरल्या जाणाऱ्या
          <b>A, An आणि The</b> या शब्दांना Articles म्हणतात.
        </p>

        <h4>Articles चे नियम</h4>

        <ul>

          <li>
            <b>A:</b>
            व्यंजनाच्या ध्वनीपूर्वी.
            <i>a boy, a pen</i>
          </li>

          <li>
            <b>An:</b>
            स्वराच्या ध्वनीपूर्वी.
            <i>an apple, an honest man</i>
          </li>

          <li>
            <b>The:</b>
            विशिष्ट किंवा एकमेव वस्तूसाठी.
            <i>The Sun</i>
          </li>

        </ul>

        <p>
          <b>महत्त्वाचे:</b>
          A किंवा An हे अक्षर पाहून नव्हे तर
          शब्दाच्या सुरुवातीच्या ध्वनीनुसार वापरले जातात.
        </p>

      </div>
    `,

    questions: [

      {
        q: "She is eating _______ apple.",

        opts: [
          "a",
          "an",
          "the",
          "no article"
        ],

        ans: 1,

        exp: "'Apple' या शब्दाची सुरुवात स्वराच्या ध्वनीने होते. त्यामुळे 'an' वापरले जाते."
      },

      {
        q: "_______ Sun rises in the east.",

        opts: [
          "A",
          "An",
          "The",
          "No article"
        ],

        ans: 2,

        exp: "Sun ही एकमेव नैसर्गिक वस्तू मानली जाते. त्यामुळे 'The Sun' असे म्हणतात."
      },

      {
        q: "He is _______ honest boy.",

        opts: [
          "a",
          "an",
          "the",
          "none"
        ],

        ans: 1,

        exp: "'Honest' मध्ये H चा उच्चार होत नाही आणि सुरुवातीचा ध्वनी स्वराचा आहे. त्यामुळे 'an' वापरले जाते."
      },

      {
        q: "I bought _______ new car.",

        opts: [
          "a",
          "an",
          "the",
          "none"
        ],

        ans: 0,

        exp: "'New' ची सुरुवात व्यंजनाच्या ध्वनीने होते. त्यामुळे 'a' वापरले जाते."
      },

      {
        q: "Mount Everest is _______ highest peak.",

        opts: [
          "a",
          "an",
          "the",
          "none"
        ],

        ans: 2,

        exp: "Superlative Degree पूर्वी सामान्यतः 'the' वापरले जाते."
      }

    ]
  }

};


/* =========================================================
   🎮 QUIZ VARIABLES
   ========================================================= */

let currentQuestions = [];
let currIdx = 0;
let score = 0;
let answered = false;


/* =========================================================
   🔧 HELPER FUNCTIONS
   ========================================================= */

function getElement(id) {
  return document.getElementById(id);
}


/* =========================================================
   📚 CHANGE TOPIC
   ========================================================= */

function changeTopic() {

  const dropdown = getElement("topicDropdown");

  if (!dropdown) {
    console.error("topicDropdown element सापडला नाही.");
    return;
  }

  const val = dropdown.value;

  const lessonBox = getElement("lessonContent");
  const lessonTitle = getElement("lessonTitle");

  const selectedTopic = topicData[val];

  if (selectedTopic) {

    lessonTitle.innerText = selectedTopic.title;
    lessonBox.innerHTML = selectedTopic.html;

    currentQuestions = selectedTopic.questions;

  } else {

    const selectedOption =
      dropdown.options[dropdown.selectedIndex];

    const selectedText =
      selectedOption
        ? selectedOption.text
        : "Grammar Topic";

    lessonTitle.innerText = selectedText;

    lessonBox.innerHTML = `
      <div class="rules-list">

        <h3>📚 हा विषय लवकरच उपलब्ध होईल</h3>

        <p>
          या घटकाची सविस्तर माहिती आणि प्रश्नसंच
          लवकरच जोडला जाईल.
        </p>

        <p>
          तोपर्यंत खालील सामान्य सराव प्रश्न सोडवा.
        </p>

      </div>
    `;

    /*
      विषयाची माहिती उपलब्ध नसल्यास
      Tenses चे प्रश्न दाखवले जातील.
    */

    currentQuestions =
      topicData["12"]
        ? topicData["12"].questions
        : [];

  }

  currIdx = 0;
  score = 0;
  answered = false;

  loadQuestion();
}


/* =========================================================
   ❓ LOAD QUESTION
   ========================================================= */

function loadQuestion() {

  if (
    !currentQuestions ||
    currentQuestions.length === 0
  ) {
    showNoQuestions();
    return;
  }

  const q = currentQuestions[currIdx];

  answered = false;

  const qcount = getElement("qcount");
  const scoreBox = getElement("score");
  const qtext = getElement("qtext");
  const progressBar = getElement("pbar");
  const optionBox = getElement("optbox");
  const feedback = getElement("feedback");
  const nextButton = getElement("nextbtn");

  /* Question number */

  qcount.innerText =
    `Question ${currIdx + 1} of ${currentQuestions.length}`;


  /* Score */

  scoreBox.innerText =
    `Score: ${score}`;


  /* Question */

  qtext.innerText =
    `${currIdx + 1}. ${q.q}`;


  /* Progress bar */

  const progress =
    ((currIdx + 1) / currentQuestions.length) * 100;

  progressBar.style.width =
    `${progress}%`;


  /* Reset options */

  optionBox.innerHTML = "";


  /* Reset feedback */

  feedback.className =
    "feedback hidden";

  feedback.innerText =
    "";


  /* Next button */

  nextButton.innerText =
    currIdx === currentQuestions.length - 1
      ? "Finish Quiz ✓"
      : "Next Question ➜";

  nextButton.onclick =
    nextQuestion;


  /* Create option buttons */

  q.opts.forEach((opt, idx) => {

    const button =
      document.createElement("button");

    button.className =
      "option";

    button.type =
      "button";

    button.innerText =
      opt;

    button.setAttribute(
      "aria-label",
      `Option ${idx + 1}: ${opt}`
    );

    button.onclick = () => {

      selectAnswer(button, idx);

    };

    optionBox.appendChild(button);

  });

}


/* =========================================================
   ❌ NO QUESTIONS
   ========================================================= */

function showNoQuestions() {

  const qtext = getElement("qtext");
  const optionBox = getElement("optbox");
  const feedback = getElement("feedback");
  const nextButton = getElement("nextbtn");

  qtext.innerText =
    "या विषयासाठी सध्या प्रश्न उपलब्ध नाहीत.";

  optionBox.innerHTML = "";

  feedback.className =
    "feedback bad";

  feedback.innerText =
    "कृपया दुसरा विषय निवडा.";

  nextButton.innerText =
    "Select Topic";

  nextButton.onclick = () => {

    const dropdown =
      getElement("topicDropdown");

    if (dropdown) {
      dropdown.focus();
    }

  };

}


/* =========================================================
   ✅ SELECT ANSWER
   ========================================================= */

function selectAnswer(btn, idx) {

  /*
    एकदा उत्तर दिल्यानंतर पुन्हा
    उत्तर बदलता येणार नाही.
  */

  if (answered) {
    return;
  }

  answered = true;

  const q =
    currentQuestions[currIdx];

  const allButtons =
    document.querySelectorAll(".option");

  const feedback =
    getElement("feedback");


  /* Disable all options */

  allButtons.forEach(button => {

    button.disabled = true;

    button.style.cursor =
      "default";

  });


  feedback.classList.remove("hidden");


  /* Correct Answer */

  if (idx === q.ans) {

    btn.classList.add("correct");

    feedback.className =
      "feedback good";

    feedback.innerText =
      `बरोबर उत्तर! 🎉 ${q.exp}`;

    score += 10;

  }


  /* Wrong Answer */

  else {

    btn.classList.add("wrong");

    feedback.className =
      "feedback bad";

    feedback.innerText =
      `चुकीचे उत्तर! ❌ ${q.exp}`;

    /*
      योग्य उत्तर दाखवा
    */

    if (allButtons[q.ans]) {

      allButtons[q.ans]
        .classList.add("correct");

    }

  }


  /* Update Score */

  getElement("score").innerText =
    `Score: ${score}`;

}


/* =========================================================
   ➡️ NEXT QUESTION
   ========================================================= */

function nextQuestion() {

  /*
    उत्तर दिले नसेल तर पुढे जाण्यापूर्वी
    वापरकर्त्याला उत्तर देण्यास सांगणे.
  */

  if (!answered) {

    const feedback =
      getElement("feedback");

    feedback.className =
      "feedback bad";

    feedback.innerText =
      "⚠️ कृपया आधी एक उत्तर निवडा.";

    feedback.classList.remove("hidden");

    return;
  }


  /* पुढील प्रश्न */

  if (
    currIdx <
    currentQuestions.length - 1
  ) {

    currIdx++;

    loadQuestion();

  }

  /* Quiz Complete */

  else {

    showQuizResult();

  }

}


/* =========================================================
   🏆 QUIZ RESULT
   ========================================================= */

function showQuizResult() {

  const total =
    currentQuestions.length * 10;

  const percentage =
    total > 0
      ? Math.round((score / total) * 100)
      : 0;


  let message = "";

  if (percentage === 100) {

    message =
      "अप्रतिम! 🌟 सर्व प्रश्नांची उत्तरे बरोबर आहेत!";

  }

  else if (percentage >= 80) {

    message =
      "खूप छान! 👏 तुमची तयारी चांगली आहे.";

  }

  else if (percentage >= 50) {

    message =
      "चांगला प्रयत्न! 👍 अजून थोडा सराव करा.";

  }

  else {

    message =
      "काळजी करू नका. 📚 पुन्हा सराव करा आणि नक्की सुधारणा होईल.";

  }


  /* Question Area */

  getElement("qtext").innerHTML = `
    🎉 Quiz Completed!
  `;


  /* Options Clear */

  getElement("optbox").innerHTML = `

    <div class="quiz-result">

      <h2>🏆 तुमचा निकाल</h2>

      <div class="result-score">
        ${score} / ${total}
      </div>

      <div class="result-percentage">
        ${percentage}%
      </div>

      <p>
        ${message}
      </p>

    </div>

  `;


  /* Feedback */

  const feedback =
    getElement("feedback");

  feedback.className =
    "feedback good";

  feedback.innerText =
    "अभिनंदन! तुम्ही ही Quiz पूर्ण केली आहे. पुढील विषय निवडून पुन्हा सराव करा.";


  /* Button */

  const nextButton =
    getElement("nextbtn");

  nextButton.innerText =
    "🔄 पुन्हा सोडवा";

  nextButton.onclick =
    restartQuiz;


  /* Progress */

  getElement("pbar")
    .style.width = "100%";


  getElement("qcount")
    .innerText =
      "Quiz Completed";


  getElement("score")
    .innerText =
      `Score: ${score}`;

}


/* =========================================================
   🔄 RESTART QUIZ
   ========================================================= */

function restartQuiz() {

  currIdx = 0;

  score = 0;

  answered = false;

  loadQuestion();

}


/* =========================================================
   🧹 RESET QUIZ
   ========================================================= */

function resetQuiz() {

  currIdx = 0;

  score = 0;

  answered = false;

  currentQuestions = [];

}


/* =========================================================
   🚀 INITIALIZE APP
   ========================================================= */

function initializeApp() {

  const dropdown =
    getElement("topicDropdown");

  if (!dropdown) {

    console.error(
      "❌ topicDropdown सापडला नाही."
    );

    return;
  }


  /*
    Dropdown बदलल्यावर Topic बदला
  */

  dropdown.addEventListener(
    "change",
    changeTopic
  );


  /*
    पहिला Topic आपोआप Load करा
  */

  changeTopic();

}


/* =========================================================
   🌐 PAGE LOAD
   ========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeApp
  );

} else {

  initializeApp();

}


/* =========================================================
   🛡️ OPTIONAL GLOBAL ACCESS
   ========================================================= */

window.changeTopic =
  changeTopic;

window.restartQuiz =
  restartQuiz;

window.nextQuestion =
  nextQuestion;


/* =========================================================
   END OF SCRIPT
   ========================================================= */
