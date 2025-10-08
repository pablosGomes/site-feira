// ===================================
// Quiz Data and Logic
// ===================================

const quizQuestions = [
  {
    id: 1,
    question: "Como você se sente em relação ao seu autoconhecimento atual?",
    options: [
      { text: "Estou apenas começando a me questionar", value: "despertar" },
      { text: "Reconheço minhas contradições mas luto para aceitá-las", value: "confronto" },
      { text: "Estou refletindo profundamente sobre meus padrões", value: "integracao" },
      { text: "Sinto que compreendo e aceito quem sou", value: "renascimento" },
    ],
  },
  {
    id: 2,
    question: "Quando enfrenta um desafio emocional, você geralmente:",
    options: [
      { text: "Fico confuso e busco respostas externas", value: "despertar" },
      { text: "Sinto tensão interna e resistência", value: "confronto" },
      { text: "Observo meus sentimentos com curiosidade", value: "integracao" },
      { text: "Aceito e transformo a experiência", value: "renascimento" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com suas sombras (aspectos que não gosta em si)?",
    options: [
      { text: "Ainda estou descobrindo que elas existem", value: "despertar" },
      { text: "Reconheço mas tenho dificuldade em aceitar", value: "confronto" },
      { text: "Estou aprendendo a integrá-las", value: "integracao" },
      { text: "Transformei muitas delas em forças", value: "renascimento" },
    ],
  },
  {
    id: 4,
    question: "Sua relação com mudanças pessoais é:",
    options: [
      { text: "Assustadora mas intrigante", value: "despertar" },
      { text: "Necessária mas dolorosa", value: "confronto" },
      { text: "Um processo natural de crescimento", value: "integracao" },
      { text: "Uma oportunidade bem-vinda", value: "renascimento" },
    ],
  },
  {
    id: 5,
    question: "Quando pensa em 'o quarto' como metáfora do seu mundo interior:",
    options: [
      { text: "Acabei de descobrir que existe uma porta", value: "despertar" },
      { text: "Estou dentro mas me sinto preso", value: "confronto" },
      { text: "Estou explorando cada canto com atenção", value: "integracao" },
      { text: "É meu santuário, não minha prisão", value: "renascimento" },
    ],
  },
  {
    id: 6,
    question: "Sua autenticidade no dia a dia é:",
    options: [
      { text: "Ainda estou descobrindo quem sou de verdade", value: "despertar" },
      { text: "Sei quem sou mas tenho medo de mostrar", value: "confronto" },
      { text: "Estou praticando ser mais autêntico", value: "integracao" },
      { text: "Vivo alinhado com minha essência", value: "renascimento" },
    ],
  },
  {
    id: 7,
    question: "Como você se relaciona com suas emoções difíceis?",
    options: [
      { text: "Tento evitá-las ou não as compreendo bem", value: "despertar" },
      { text: "Sinto-as intensamente mas não sei o que fazer", value: "confronto" },
      { text: "Estou aprendendo a acolhê-las", value: "integracao" },
      { text: "Elas são mensageiras valiosas", value: "renascimento" },
    ],
  },
  {
    id: 8,
    question: "Seu propósito de vida parece:",
    options: [
      { text: "Um mistério que estou começando a explorar", value: "despertar" },
      { text: "Algo que vislumbro mas não consigo alcançar", value: "confronto" },
      { text: "Está se tornando mais claro gradualmente", value: "integracao" },
      { text: "Claro e guia minhas escolhas", value: "renascimento" },
    ],
  },
]

const quizResults = {
  despertar: {
    title: "O Despertar",
    character: "Ana - A Buscadora",
    icon: "sunrise",
    description:
      "Você está no início de uma jornada extraordinária. Como Ana, você começou a perceber que há muito mais em você do que sempre acreditou. Este é o momento do questionamento, da curiosidade e da abertura para o desconhecido.",
    advice:
      "Continue explorando com coragem. Permita-se fazer perguntas difíceis e busque experiências que desafiem sua zona de conforto. Leia, converse, reflita. Cada passo nesta fase é uma semente plantada para seu crescimento futuro.",
    nextSteps: [
      "Comece um diário de autoconhecimento",
      "Questione suas crenças limitantes",
      "Busque novas experiências e perspectivas",
      "Pratique a auto-observação sem julgamento",
    ],
  },
  confronto: {
    title: "O Confronto",
    character: "Bruno - O Conflituoso",
    icon: "lightning",
    description:
      "Você está na fase mais desafiadora e corajosa da jornada. Como Bruno, você reconhece suas contradições internas e está enfrentando aspectos de si mesmo que antes evitava. Esta tensão é sinal de crescimento profundo.",
    advice:
      "Seja gentil consigo mesmo neste processo. O confronto não é sobre se punir, mas sobre se conhecer completamente. Aceite que você é humano, complexo e em constante evolução. A integração virá com o tempo.",
    nextSteps: [
      "Pratique a autocompaixão diariamente",
      "Identifique e acolha suas sombras",
      "Busque apoio terapêutico se necessário",
      "Transforme autocrítica em auto-observação",
    ],
  },
  integracao: {
    title: "A Integração",
    character: "Clara - A Contemplativa",
    icon: "puzzle",
    description:
      "Você está em um momento de profunda sabedoria. Como Clara, você compreende que todas as partes de você — luz e sombra — formam um todo integrado. Está aprendendo a transformar suas feridas em força e suas fraquezas em sabedoria.",
    advice:
      "Continue praticando a aceitação radical de si mesmo. Use suas experiências passadas como professoras. Compartilhe sua jornada com outros, pois sua história pode iluminar o caminho de alguém.",
    nextSteps: [
      "Pratique meditação e mindfulness",
      "Identifique padrões e transforme-os",
      "Cultive relacionamentos autênticos",
      "Encontre propósito em suas experiências",
    ],
  },
  renascimento: {
    title: "O Renascimento",
    character: "Daniel - O Transformado",
    icon: "stars",
    description:
      "Você alcançou um nível profundo de autoconhecimento e autenticidade. Como Daniel, você compreende que o quarto nunca foi uma prisão, mas um espaço sagrado de transformação. Vive alinhado com sua essência e inspira outros em suas jornadas.",
    advice:
      "Continue evoluindo e aprofundando sua consciência. Compartilhe sua sabedoria com generosidade. Lembre-se de que a jornada nunca termina — cada fim é um novo começo. Seja farol para outros viajantes.",
    nextSteps: [
      "Mentore outros em suas jornadas",
      "Viva com propósito e autenticidade",
      "Continue se desafiando e crescendo",
      "Pratique gratidão pela sua transformação",
    ],
  },
}

let currentQuestionIndex = 0
let userAnswers = []

// Initialize quiz
function initQuiz() {
  currentQuestionIndex = 0
  userAnswers = []
  displayQuestion()
  updateProgress()
}

// Display current question
function displayQuestion() {
  const question = quizQuestions[currentQuestionIndex]
  const quizContainer = document.getElementById("quizContainer")

  quizContainer.innerHTML = `
    <div class="quiz-question-card" data-aos="fade-up">
      <div class="question-number-badge">${question.id}</div>
      <h3 class="question-text-large">${question.question}</h3>
      <div class="quiz-options">
        ${question.options
          .map(
            (option, index) => `
          <div class="quiz-option-card">
            <input 
              type="radio" 
              id="option${index}" 
              name="question${question.id}" 
              value="${option.value}"
              ${userAnswers[currentQuestionIndex] === option.value ? "checked" : ""}
            >
            <label class="quiz-option-label" for="option${index}">
              ${option.text}
            </label>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `

  // Show navigation
  document.getElementById("quizNavigation").style.display = "flex"

  // Update button states
  updateNavigationButtons()

  // Add event listeners to options
  const options = quizContainer.querySelectorAll('input[type="radio"]')
  options.forEach((option) => {
    option.addEventListener("change", handleOptionSelect)
  })
}

// Handle option selection
function handleOptionSelect(e) {
  userAnswers[currentQuestionIndex] = e.target.value
  updateNavigationButtons()
}

// Update navigation buttons
function updateNavigationButtons() {
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")

  // Update previous button
  if (currentQuestionIndex === 0) {
    prevBtn.style.display = "none"
  } else {
    prevBtn.style.display = "flex"
  }

  // Update next button
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1
  const hasAnswer = userAnswers[currentQuestionIndex] !== undefined

  if (isLastQuestion) {
    nextBtn.innerHTML = `
      Ver Resultado
      <i class="bi bi-check-circle ms-2"></i>
    `
  } else {
    nextBtn.innerHTML = `
      Próxima
      <i class="bi bi-arrow-right ms-2"></i>
    `
  }

  nextBtn.disabled = !hasAnswer
}

// Go to previous question
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--
    displayQuestion()
    updateProgress()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

// Go to next question or show results
function nextQuestion() {
  const hasAnswer = userAnswers[currentQuestionIndex] !== undefined

  if (!hasAnswer) {
    alert("Por favor, selecione uma resposta antes de continuar.")
    return
  }

  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++
    displayQuestion()
    updateProgress()
    window.scrollTo({ top: 0, behavior: "smooth" })
  } else {
    showResults()
  }
}

// Update progress bar
function updateProgress() {
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100
  document.getElementById("currentQuestion").textContent = currentQuestionIndex + 1
  document.getElementById("progressPercent").textContent = Math.round(progress)
  document.getElementById("progressBar").style.width = progress + "%"
}

// Calculate result
function calculateResult() {
  const counts = {}

  userAnswers.forEach((answer) => {
    counts[answer] = (counts[answer] || 0) + 1
  })

  let maxCount = 0
  let result = "despertar"

  for (const [key, value] of Object.entries(counts)) {
    if (value > maxCount) {
      maxCount = value
      result = key
    }
  }

  return result
}

// Show results
function showResults() {
  const resultType = calculateResult()
  const result = quizResults[resultType]

  const quizContainer = document.getElementById("quizContainer")
  const quizNavigation = document.getElementById("quizNavigation")
  const resultsContainer = document.getElementById("resultsContainer")

  quizContainer.style.display = "none"
  quizNavigation.style.display = "none"

  resultsContainer.innerHTML = `
    <div class="result-card" data-aos="zoom-in">
      <div class="result-icon">
        <i class="bi bi-${result.icon}"></i>
      </div>
      <h2 class="result-title">${result.title}</h2>
      <p class="result-character">${result.character}</p>
      <p class="result-description">${result.description}</p>
      
      <div class="result-advice">
        <strong><i class="bi bi-lightbulb me-2"></i>Orientação para sua jornada:</strong>
        <p class="mb-0">${result.advice}</p>
      </div>
      
      <div class="mb-4">
        <h4 class="mb-3"><i class="bi bi-list-check me-2"></i>Próximos Passos:</h4>
        <ul class="stage-list">
          ${result.nextSteps.map((step) => `<li>${step}</li>`).join("")}
        </ul>
      </div>
      
      <div class="result-actions">
        <button class="btn btn-outline-primary" onclick="restartQuiz()">
          <i class="bi bi-arrow-clockwise me-2"></i>
          Refazer Quiz
        </button>
        <a href="a-jornada.html" class="btn btn-primary">
          <i class="bi bi-book me-2"></i>
          Explorar Jornada
        </a>
        <a href="conexao.html" class="btn btn-primary">
          <i class="bi bi-share me-2"></i>
          Compartilhar
        </a>
      </div>
    </div>
  `

  resultsContainer.style.display = "block"
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Restart quiz
function restartQuiz() {
  document.getElementById("resultsContainer").style.display = "none"
  document.getElementById("quizContainer").style.display = "block"
  initQuiz()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Initialize quiz when page loads
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quizContainer")) {
    initQuiz()
  }
})
