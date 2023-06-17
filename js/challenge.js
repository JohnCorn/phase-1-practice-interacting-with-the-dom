
let currTime = 0;

let isPaused = false;

//See the timer increment every second once the page has loaded.
let intervalId = window.setInterval(IncrementTimer, 1000);

Initialize();

function Initialize()
{    
    document.getElementById('submit').addEventListener("click", (event)=>{
        SubmitComment(event);
    });

    // create an ordered list
    const i = document.querySelector('.likes').innerHTML += `<ol id ='like-list'></ol>`;
    // Subscrbe to buttons events
    document.getElementById('minus').addEventListener("click", DecrementTimer);
    document.getElementById('plus' ).addEventListener("click", IncrementTimer);
    
    document.getElementById('heart').addEventListener("click", LikeTimer);

    document.getElementById('pause').addEventListener("click", () => TogglePause());
}

//Manually increment and decrement the counter using the plus and minus buttons.
function IncrementTimer()
{
    currTime++;
    document.getElementById('counter').innerText = `${currTime}`;
}

function DecrementTimer()
{
    currTime--;
    document.getElementById('counter').innerText = `${currTime}`;
}

//"Like" an individual number of the counter. I should see the count of the 
// number of "likes" associated with that number displayed.
function LikeTimer()
{
    document.getElementById('like-list').innerHTML += `<li>liked: ${currTime}</li>`;
}

function TogglePause()
{
    //pause the counter
    isPaused = !isPaused
    console.log(`TogglePause: ${isPaused}`);

    if (isPaused)
    {
        document.getElementById('pause').innerText = 'resume';

        window.clearInterval(intervalId);

        document.getElementById('minus').removeEventListener("click", DecrementTimer);
        document.getElementById('plus' ).removeEventListener("click", IncrementTimer);  
        document.getElementById('heart').removeEventListener("click", LikeTimer);
    }else
    {    //disable all buttons except the pause button
        //switch the label on the button from "pause" to "resume"
//Click the "resume" button to restart the counter and re-enable the buttons.

        document.getElementById('pause').innerText = 'pause';
        intervalId = window.setInterval(IncrementTimer, 1000);

        document.getElementById('minus').addEventListener("click", DecrementTimer);
        document.getElementById('plus' ).addEventListener("click", IncrementTimer);  
        document.getElementById('heart').addEventListener("click", LikeTimer);
    }
}

//Leave comments on my gameplay, such as: "Wow, what a fun game this is."
function SubmitComment(event)
{  
    event.preventDefault();
    let t = document.getElementById('comment-input').value;
    document.getElementById('list').innerHTML += `<p>${t}</p>`;
    document.getElementById('comment-input').value = '';
}