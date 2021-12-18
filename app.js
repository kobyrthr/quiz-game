
// GAME ELEMENTS
const questions = [
    {
        id:0,
        title:"Michelle",
        artist:"The Singers Unlimited",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vu__E2zpT9Y?start=72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Drake. Champagne Poetry','Sampha. Incomplete Kisses','J.Cole.She\'s Mine','Kanye West. Blood on the Leaves'],
        correct: 0

    },

    {
        id:1,
        title:"As Long as I've Got You",
        artist:"The Charmels",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/gp9uZjPaB4w?start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Sampha. Incomplete Kisses','J.Cole.She\'s Mine','Kanye West. Blood on the Leaves','Wu-Tang Clan. C.R.E.A.M'],
        correct: 3

    },

    {
        id:2,
        title:"Pressure",
        artist:"Quadron",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/ILPNhmg3geM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['A$AP Rocky. Sundress','Lemon Pepper Freestyle','Kanye West. All Falls Down','Giveon. Like I Want You'],
        correct: 1

    },
    {
        id:3,
        title:"Ronnie Foster",
        artist:"Mystic Brew",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/VRVanOlsxzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Common. GO!','J. Cole. Forbidden Fruit','UGK, Outkast. Int\'l Players Anthem','Mural. Lupe Fiasco'],
        correct: 1

    },
    {
        id:4,
        title:"Olinga",
        artist:"Milt Jackson",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/i8l_o2R7w84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Azealia Banks. 212','Erykah Badu. Didn\'t Cha Know','Mos Def. UMI Says','A Tribe Called Quest. Award Tour'],
        correct:3

    },
    {
        id:5,
        title:"Shape of My Heart",
        artist:"Sting",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/NlwIDxCjL-8?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Mos Def. Hip Hop','Nas. The Message','Souls of Mischief. 93\' Til Infinity','Craig Mack. Flava in Ya Ear'],
        correct: 1

    },
    {
        id:6,
        title:"Chanson D\'Un Jour D\'Hiver",
        artist:"Cortex",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/ngcTfQBQjF8?start=43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Kanye West. Gorgeous','Lupe Fiasco. Mural','UGK, Outkast. Int\'l Players Anthem','Mos Def. Mathematics'],
        correct: 1

    },
    {
        id:7,
        title:"Mary Jane",
        artist:"Rick James",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/iL4Ig5YdvbI?start=388" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Kanye West. Runaway','Kendrick Lamar. HiiPower','Frank Ocean. In My Room','Giveon. Like I Want You'],
        correct: 0

    },
    {
        id:8,
        title:"Knee Socks",
        artist:"Arctic Monkeys",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/R7A1mIdiheE?start=159" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['A$AP Rocky, Skepta. Praise The Loard (Da Shine)','J.Cole. Middle Child','Pusha T. If You Know You Know','Nipsey Hussle. Victory Lap'],
        correct: 3

    },
    {
        id:9,
        title:"Don't Let Your Love Fade Away",
        artist:"Gene Williams",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Zg2K5yWHqF8?start=104" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Jay Electronic. Exhibit C','J. Cole. Forbidden Fruit','Rick Ross, Jay-Z. The Devil Is A Lie','A$AP Rocky, Skepta. Praise The Loard (Da Shine)'],
        correct:2 

    },
    
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