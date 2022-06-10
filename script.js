let audio1 = new Audio('Images/audio1.mp3');
let audio2 = new Audio('Images/audio2.mp3');
let turn = "X";
let gameover = false;

/* GAME LOGIC */
let box = document.getElementsByClassName('boxes');
Array.from(box).forEach(element => {
    let boxtext = element.querySelector('.boxcontent');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = turn;

            turn = Turn();
            audio1.play();
            Win();

            if(!gameover)
            {
                document.getElementsByClassName('gametxt')[0].innerText = turn + "'s turn";
            }
        }
    })
})


/* CHANGE TURN */
const Turn=() => 
{
    if(turn === "X")
        return "O";
    else
        return "X";
}


/* CHECK FOR WIN */
const Win=() =>
{
    let boxtext = document.getElementsByClassName('boxcontent');
    /* Array containing all the winning probabilities */
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(arr => {
        if( (boxtext[arr[0]].innerText === boxtext[arr[1]].innerText)  &&  (boxtext[arr[1]].innerText === boxtext[arr[2]].innerText)  &&  boxtext[arr[0]].innerText !== "")
        {
            gameover = true;
            audio2.play();
            document.querySelector('.gametxt').innerText = boxtext[arr[0]].innerText + " won the game";
            document.getElementsByClassName('gametxt')[0].style.backgroundColor="#ffdede";
            document.querySelector('.image').getElementsByTagName('img')[0].style.visibility="visible";
        }
    })
}


/* RESTART BUTTON */
btn.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxcontent');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    })

    turn = "X";
    gameover = false;
    document.getElementsByClassName('gametxt')[0].innerText = turn + "'s turn";                //Game Text
    document.querySelector('.image').getElementsByTagName('img')[0].style.visibility="hidden"; //GIF
    document.getElementsByClassName('gametxt')[0].style.backgroundColor="unset";
})