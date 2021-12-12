questions = [
    {
        id:0,
        title:"Michelle",
        artist:"The Singers Unlimited",
        embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vu__E2zpT9Y?start=72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        answers: ['Drake. Champagne Poetry','Sampha. Incomplete Kisses','J.Cole.She\'s Mine','Kanye West. Blood on the Leaves'],
        correct: 0,

    }
]

const hintTitle = document.querySelector('#hint').getElementsByTagName('h3')
const hintArtist =  document.querySelector('#hint').getElementsByTagName('p')
const songBox =  document.querySelector('#songBox')
const options = document.querySelectorAll('.options')
const answers = questions[0].answers

hintTitle[0].innerHTML = questions[0].title
hintArtist[0].innerHTML = questions[0].artist
songBox.innerHTML = questions[0].embed
const rightAnswer = questions[0].answers[questions[0].correct]


for (x=0;x<answers.length;x++){
    options[x].innerHTML = answers[x]
    options[x].innerHTML= answers[x]
}






document.querySelector('#answer').addEventListener('click',(e)=>{
    // console.log(e.target)

    console.log(rightAnswer)

    if ( e.target.innerHTML === rightAnswer){
       e.target.prepend('✅')
    }

for(i=0;i<options.length;i++){
          
            if (options[i].innerHTML!=='✅'+rightAnswer) {
                options[i].prepend('⛔️')
            }
        }
    options.attr('disabled','disabled')

})