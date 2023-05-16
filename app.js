
// GAME ELEMENTS
let boxWidth = "100%"
let boxHeight = "100%"
const questions = [
{ 
   id: 0,
   title: "They Reminisce Over You",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/2Mb3zpobD0CvJGWv6NpsPy?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Pete Rock",
   year: 1992,
   producer: "Pete Rock",
   album: "Mecca & The Soul Brother (Remixes)",
   answers:["Q-Tip", "J.Dilla", "Dj Premier", "Pete Rock"],
   correct: 3
 },
 {
   id: 1,
   title: "One Love",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/27u3Rh4IWYPdwVST20ALrt?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Nas",
   year: 1994,
   producer: "Q-Tip",
   album: "Illmatic",
   answers:["Q-Tip", "J.Dilla", "Dj Premier", "Pete Rock"],
   correct: 0
 },
 {
   id: 2,
   title: "Runnin",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/0XgpiStoxq1IJncYlPrvZ5?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- The Pharcyde",
   year: 1995,
   producer: "J.Dilla",
   album: "Labcabincalifornia",
   answers:["Q-Tip", "J.Dilla", "Dj Premier", "Pete Rock"],
   correct: 1
 },
 {
   id: 3,
   title: "Ruff Ryder's Anthem",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/1BKT2I9x4RGKaKqW4up34s?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- DMX",
   year: 1998,
   producer: "Swizz Beats",
   album: "It's Dark and Hell Is Hot",
   answers:["Q-Tip", "J.Dilla", "Dj Premier", "Swizz Beats"],
   correct: 3
 },
 {
   id: 4,
   title: "Nas Is Like",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/3gY6tiCNsuVi6s8kPV6aQg?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Nas",
   year: 1999,
   producer: "Dj Premier",
   album: "I Am...",
   answers:["Q-Tip", "J.Dilla", "Dj Premier", "Pete Rock"],
   correct: 2
 },
 {
   id: 5,
   title: "The Light",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/5NiUrZVKyLpsyj62Roq5FW?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Common",
   year: 2000,
   producer: "J.Dilla",
   album: "Like Water for Chocolate",
   answers:["Q-Tip", "J.Dilla", "Dj Premier", "Pete Rock"],
   correct: 1
 },
 {
   id: 6,
   title: "So Fresh So Clean",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/6glsMWIMIxQ4BedzLqGVi4?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Outkast",
   year: 2000,
   producer: "Organized Noize",
   album: "Stankonia",
   answers:["Organized Noize", "J.Dilla", "Dj Premier", "Pete Rock"],
   correct: 0
 },
 {
   id: 7,
   title: "Big Pimpin",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/7m97yKVzPpXV9Z4ezEziOD?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Jay-Z",
   year: 2000,
   producer: "Timbaland",
   album: "",
   answers:["Q-Tip","Timbaland", "Dj Premier", "Pete Rock"],
   correct: 1
 },
 {
   id: 8,
   title: "Lights, Camera, Action!",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/36gOOIQaBwXZVKL5z2vC3Z?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Mr.Cheeks",
   year: 2001,
   producer: "Bink!",
   album: "",
   answers:["Q-Tip", "J.Dilla", "Bink!", "Pete Rock"],
   correct: 2
 },
 {
   id: 9,
   title: "We Gonna Make It",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/3FYSNSTUCqAZGfwEd8ui4l?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Jadakiss",
   year: 2001,
   producer: "The Alchemist",
   album: "Kiss tha Game Goodbye",
   answers:["Q-Tip", "The Alchemist", "Dj Premier", "Pete Rock"],
   correct: 1
 },
 {
   id: 10,
   title: "Worst Comes to Worst",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/4bHrZLxaOU1gfAz0rZAnCx?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Dilated People",
   year: 2001,
   producer: "The Alchemist",
   album: "Expansion Team",
   answers:["Q-Tip", "The Alchemist", "Dj Premier", "Pete Rock"],
   correct: 1
 },
 {
   id: 11,
   title: "Get Ur Freak On",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/6zsk6uF3MxfIeHPlubKBvR?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Missy Elliott",
   year: 2001,
   producer: "Timbaland",
   album: "Miss E... So Addictive",
   answers:["Q-Tip","Timbaland", "Dj Premier", "Pete Rock"],
   correct: 1
 },
 {
   id: 12,
   title: "Still Fly",
   embed: `<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/track/563vSy3HB5NHxel1VGQCW6?utm_source=generator\" width=\"100%\" height=\"352\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe>`,
   artist: "- Big Tymers",
   year: 2002,
   producer: "Mannie Fresh",
   album: "Hood Rich",
   answers:["Q-Tip", "J.Dilla", "Mannie Fresh", "Pete Rock"],
   correct: 2
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