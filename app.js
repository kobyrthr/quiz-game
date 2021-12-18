
// GAME ELEMENTS
const questions = [
    {
        id:0,
        title:"Michelle",
        artist:"The Singers Unlimited",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vu__E2zpT9Y?start=72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Drake. Champagne Poetry','Sampha. Incomplete Kisses','J.Cole.She\'s Mine','Kanye West. Blood on the Leaves'],
        correct: 0,

    },

    {
        id:1,
        title:"As Long as I've Got You",
        artist:"The Charmels",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vu__E2zpT9Y?start=72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Sampha. Incomplete Kisses','J.Cole.She\'s Mine','Kanye West. Blood on the Leaves','Wu-Tang Clan. C.R.E.A.M'],
        correct: 3,

    },

    {
        id:2,
        title:"Random",
        artist:"Random",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vu__E2zpT9Y?start=72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Random 1','Random 2','Random 3','Random 4'],
        correct: 2,

    },
    {
        id:3,
        title:"God bless america",
        artist:"land of the free supposedly",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vu__E2zpT9Y?start=72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['asdf','asdf 2','asdf 3','asdf 4'],
        correct: 2,

    }
]
let questionPile = questions
let graveyard = []
let rightAnswer 
let currentQuestion 
let score = 0

//DOM SELECTIONS
const questionBox = document.querySelector('#questionBox')
const hintTitle = document.querySelector('#hint').getElementsByTagName('h3')
const hintArtist =  document.querySelector('#hint').getElementsByTagName('p')
const songBox =  document.querySelector('#songBox')
const options = document.querySelectorAll('.options')
const answers = questions[1].answers
const showScore = document.createElement('div')

//DOM MANIPULATION
hintTitle[0].innerHTML = questions[1].title
hintArtist[0].innerHTML = questions[1].artist
songBox.innerHTML = questions[1].embed
document.body.appendChild(showScore)



//FUNCTIONS
const nextQuestion = (e) =>{


    e.stopPropagation()
    for(i=0;i<options.length;i++){
    options[i].innerHTML = ""
}


currentQuestion = randomChoice(questionPile)

hintTitle[0].innerHTML = currentQuestion.title
hintArtist[0].innerHTML = currentQuestion.artist
songBox.innerHTML = currentQuestion.embed
rightAnswer = currentQuestion.answers[currentQuestion.correct]

for (x=0;x<currentQuestion.answers.length;x++){
    options[x].innerHTML = currentQuestion.answers[x]
}

console.log('Question pile',questionPile)
console.log('Graveyard',graveyard)
console.log(currentQuestion)
console.log(currentQuestion.title)

}
const showAnswer = (e)=>{
    console.log(currentQuestion.title)
    
    for(i=0;i<options.length;i++){
        
        if ( options[i].innerHTML === rightAnswer){
            options[i].prepend('✅')
        }
        else if (options[i].innerHTML !== rightAnswer){
            
            options[i].prepend('⛔️')

        }
    
        }

        if (e.target.innerHTML==='✅'+rightAnswer){
            score = score+1
            showScore.innerHTML = `Score:${score}` 

        }
        // playerScore()
        graveyard.push(currentQuestion)
        questionPile.splice(questionPile.indexOf(currentQuestion),1)
        currentQuestion = randomChoice(questionPile)
        console.log('Question pile',questionPile)
        console.log('Graveyard',graveyard)

}
// const playerScore = () =>{

//     showScore.innerHTML = `Score:${score}`
//     showScore.className = "score"    
// }
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}



//GAME START
startGame = () =>{

currentQuestion = randomChoice(questionPile)

hintTitle[0].innerHTML = currentQuestion.title
hintArtist[0].innerHTML = currentQuestion.artist
songBox.innerHTML = currentQuestion.embed
rightAnswer = currentQuestion.answers[currentQuestion.correct]

for (x=0;x<currentQuestion.answers.length;x++){
    options[x].innerHTML = currentQuestion.answers[x]
}

console.log('Question pile',questionPile)
console.log('Graveyard',graveyard)
console.log(currentQuestion)
console.log(currentQuestion.title)

showScore.innerHTML = `Score:${score}`
showScore.className = "score"  
}



//EVENTS
startGame()
document.querySelector('#next').addEventListener('click',nextQuestion)
document.querySelector('#answer').addEventListener('click',showAnswer)









/**
 * I need a function that takes a question set and renders it on the page
 * Need a next button
 * On click of next, render a new question
 * Need the foolowing variables in my build quiz function
    * quesiton title = questoin[x]
    * question artist =
    * question video =
    * question asnwers =
    *  
 */