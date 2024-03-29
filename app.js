
// GAME ELEMENTS
let boxWidth = "100%"
let boxHeight = "100%"
const questions = [
    {
        id:0,
        title:"Michelle ",
        artist:"- The Singers Unlimited",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/vu__E2zpT9Y?start=72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Drake. Champagne Poetry','Sampha. Incomplete Kisses','J.Cole.She\'s Mine','Kanye West. Blood on the Leaves'],
        correct: 0,
        hint:`"And nothing tell the truth like the eyes will
        Lived so much for others, don't remember how I feel
        Friends in high places and friends that I hide still
        Still managed to moonwalk straight through a minefield"`

    },

    {
        id:1,
        title:"As Long as I've Got You ",
        artist:"- The Charmels",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/gp9uZjPaB4w?start=18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Sampha. Incomplete Kisses','J.Cole.She\'s Mine','Kanye West. Blood on the Leaves','Wu-Tang Clan. C.R.E.A.M'],
        correct: 3,
        hint:`"Though I don't know why I chose to smoke sess
        I guess that's the time when I'm not depressed
        But I'm still depressed, and I ask, "What's it worth?"
        Ready to give up so I seek the old Earth"`

    },

    {
        id:2,
        title:"Pressure ",
        artist:"- Quadron",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/ILPNhmg3geM?start=203" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['A$AP Rocky. Sundress','Drake. Lemon Pepper Freestyle','Kanye West. All Falls Down','Giveon. Like I Want You'],
        correct: 1,
        hint: `"If this is your hobby, then come and meet your maker
        Champagne, ring bells in the streets of Jamaica
        Started at the crib, look how far this shit'll take ya
        Ross sittin' on two hunnid thirty-five acres"`

    },
    {
        id:3,
        title:"Ronnie Foster",
        artist:"- Mystic Brew",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/VRVanOlsxzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Common. GO!','J. Cole. Forbidden Fruit','UGK, Outkast. Int\'l Players Anthem','Mural. Lupe Fiasco'],
        correct: 1,
        hint:`"Take a seat baby girl you've been all in my mind
        I know I ain't called gotta pardon my grind
        Just copped a maroon 5, no Adam Levine
        Became a man by myself, only father was time"`

    },
    {
        id:4,
        title:"Olinga",
        artist:"- Milt Jackson",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/i8l_o2R7w84?start=43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Azealia Banks. 212','Erykah Badu. Didn\'t Cha Know','Mos Def. UMI Says','A Tribe Called Quest. Award Tour'],
        correct:3,
        hint:`"Coming with more hits than the Braves and the Yankees
        Living mad phat like an oversized mampi
        The wackest crews try to diss, it makes me laugh
        When my track record's longer than a DC-20 aircraft"`

    },
    {
        id:5,
        title:"Shape of My Heart",
        artist:"- Sting",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/NlwIDxCjL-8?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Mos Def. Hip Hop','Nas. The Message','Souls of Mischief. 93\' Til Infinity','Craig Mack. Flava in Ya Ear'],
        correct: 1,
        hint:`"The highlights of living, Vegas style roll dice in linen
        Antera spinning on milleniums, twenty G bets I'm winning them"`

    },
    {
        id:6,
        title:"Chanson D\'Un Jour D\'Hiver",
        artist:"- Cortex",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/ngcTfQBQjF8?start=43" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Kanye West. Gorgeous','Lupe Fiasco. Mural','UGK, Outkast. Int\'l Players Anthem','Mos Def. Mathematics'],
        correct: 1,
        hint:`"I like my pancakes cut in swirls
        Morrocan moles and undercover squirrels
        I like cartoons, southern cities with large moons
        Faith healers, ex-female drug dealers and art booms"`

    },
    {
        id:7,
        title:"Mary Jane",
        artist:"- Rick James",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/iL4Ig5YdvbI?start=388" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Kanye West. Runaway','Kendrick Lamar. HiiPower','Frank Ocean. In My Room','Giveon. Like I Want You'],
        correct: 0,
        hint:`"Never was much of a romantic
        I could never take the intimacy
        And I know it did damage
        'Cause the look in your eyes is killin' me"`

    },
    {
        id:8,
        title:"Knee Socks",
        artist:"- Arctic Monkeys",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/R7A1mIdiheE?start=159" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['A$AP Rocky, Skepta. Praise The Loard (Da Shine)','J.Cole. Middle Child','Pusha T. If You Know You Know','Nipsey Hussle. Victory Lap'],
        correct: 3,
        hint:`"I'm finna take it there
        This time around I'ma make it clear
        Spoke some things into the universe and they appeared
        I say it's worth it, I won't say it's fair"`

    },
    {
        id:9,
        title:"Don't Let Your Love Fade Away",
        
        artist:"- Gene Williams",
        embed:`<iframe width=${boxWidth} height="315" src="https://www.youtube.com/embed/Zg2K5yWHqF8?start=104" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        answers: ['Jay Electronic. Exhibit C','J. Cole. Forbidden Fruit','Rick Ross, Jay-Z. The Devil Is A Lie','A$AP Rocky, Skepta. Praise The Loard (Da Shine)'],
        correct:2,
        hint:`"You seen what I did to the stop and frisk
        Brooklyn on the Barney's like we own the bitch
        Give the money to the hood, now we all win
        Got that Barney's floor lookin' like a VIM"` 

    },
    
]
let questionPile = questions
let graveyard = []
let rightAnswer 
let currentQuestion 
let score = 0

//DOM SELECTIONS
const page = document.querySelector('body')
const questionBox = document.querySelector('#questionBox')
const hintTitle = document.querySelector('#songIn')
const hintArtist =  document.querySelector('#artistIn')
const songBox =  document.querySelector('#songBox')
const options = document.querySelectorAll('.options')
const answers = questions[1].answers
const showScore = document.querySelector("#score")
const modalBg = document.querySelector('.modalBg')
const modalMain = document.querySelector('.modalMain')
const hintBtn = document.querySelector('#hintBtn')
const hintArea = document.querySelector('#hint')
const hintBox = document.querySelector('#hintBox')


//DOM MANIPULATION
hintTitle.innerHTML = questions[1].title
hintArtist.innerHTML = questions[1].artist
songBox.innerHTML = questions[1].embed


//FUNCTIONS
const nextQuestion = (e) =>{


    e.stopPropagation()
    for(i=0;i<options.length;i++){
    options[i].innerHTML = ""
}


currentQuestion = randomChoice(questionPile)

hintTitle.innerHTML = currentQuestion.title
hintArtist.innerHTML = currentQuestion.artist
songBox.innerHTML = currentQuestion.embed
rightAnswer = currentQuestion.answers[currentQuestion.correct]

for (x=0;x<currentQuestion.answers.length;x++){
    options[x].innerHTML = currentQuestion.answers[x]
}

hintBox.style.display='none'
hintBtn.style.display='flex'






// console.log('Question pile',questionPile)
// console.log('Graveyard',graveyard)
// console.log(currentQuestion)
// console.log(currentQuestion.title)

}
const showAnswer = (e)=>{
    console.log(currentQuestion.title)

    if (e.target.matches('button')===true){

        for(i=0;i<options.length;i++){
            
            if ( options[i].innerHTML === rightAnswer){
                options[i].prepend('✅')
            }
            else if (options[i].innerHTML !== rightAnswer){
                
                options[i].prepend('⛔️')
    
            }
        
            }
    }
    

        if (e.target.innerHTML==='✅'+rightAnswer){
            score = score+1
            showScore.innerHTML = `${score}` 

        }
        // playerScore()
        graveyard.push(currentQuestion)
        questionPile.splice(questionPile.indexOf(currentQuestion),1)
        currentQuestion = randomChoice(questionPile)
        console.log('Question pile',questionPile)
        console.log('Graveyard',graveyard)
        endGame()

}
function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}
startGame = () =>{

currentQuestion = randomChoice(questionPile)

hintTitle.innerHTML = currentQuestion.title
hintArtist.innerHTML = currentQuestion.artist
songBox.innerHTML = currentQuestion.embed
rightAnswer = currentQuestion.answers[currentQuestion.correct]

for (x=0;x<currentQuestion.answers.length;x++){
    options[x].innerHTML = currentQuestion.answers[x]
}

console.log('Question pile',questionPile)
console.log('Graveyard',graveyard)
console.log(currentQuestion)
console.log(currentQuestion.title)

showScore.innerHTML = `${score}`
showScore.className = "score"  
}

 endGame = () => {
     if (graveyard.length ===10){
    console.log("Game over")

    modalBg.style.display="flex"

    let scoreMsg = document.createElement('p')
    let modalBox = document.createElement('div')
    let resetBtn = document.createElement('button')
    resetBtn.innerHTML ='New Game'
    resetBtn.addEventListener('click',()=>{
        location.reload()
    })



    if(score > 6){
        scoreMsg.innerHTML = `${score} out of 10! Respect! You're a verified hip-hop head!`
        
    }
    if(score < 7 && score > 3){
        scoreMsg.innerHTML = `${score} out 10. Not bad. You're a hip-hop head in training!`
    }
    if(score < 4 ){
        // modalMain.innerText =`You only scored ${score} point(s). Someone's not doing their Googles!`
                scoreMsg.innerHTML = `You only scored ${score} point(s). Someone's not doing their Googles!`
       

    }

    modalBox.append(scoreMsg)
    modalBox.append(resetBtn)
    modalMain.append(modalBox)

    



}
 }



//EVENTS
startGame()
document.querySelector('#next').addEventListener('click',nextQuestion)
document.querySelector('#answer').addEventListener('click',showAnswer)
endGame()


hintBtn.addEventListener('click',(e)=>{
    hintBtn.style.display='none'
    hintBox.innerText = currentQuestion.hint
    hintBox.style.display="flex"
    hintBox.style.flexDirection='column'
})