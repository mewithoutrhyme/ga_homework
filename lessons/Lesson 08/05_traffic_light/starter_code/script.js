// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

function stopLight ( ButtonID, SelectorID ) {
    var stoplightButton = document.getElementById(ButtonID);
    var stopLightSelector = document.getElementById(SelectorID);
    stopLightButton.addEventListener("click", function(){
   stopLightSelector.classList.BackgroundColor("red");
    });
    }
    stopLight( "stopButton" , "stopLight" );