//wait for the DOM elements to load before executing

// document.addEventListener('DOMcontentLoaded',function(){



    // Create a function that runs whenever the submit button is clicked

    document.querySelector('#submit-btn').addEventListener('click',function(e){
     

        //prevent the submit button from refreshing the page

        e.preventDefault();
 
        //Create a variable called moodvalue and get the value of the #mood input
        //Correct for capitalization

        let moodvalue = document.querySelector('#mood').value.trim().toLowerCase();
   
      
        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'

        if (moodvalue == "excited" || moodvalue == "ecstatic" || moodvalue == "fantastic"){
            document.querySelector(".moodring > div").setAttribute('class','excited');
        } 
        // if the user inputs happy/good/great change the CSS class to 'happy'

        if (moodvalue == "happy" || moodvalue == "good" || moodvalue == "great"){
            document.querySelector(".moodring > div").setAttribute('class','happy');
        } 
        // if the user inputs bad/angry change the CSS class to 'bad'

        if (moodvalue == "bad" || moodvalue == "angry"){
            document.querySelector(".moodring > div").setAttribute('class','bad');
        } 
  // if the user inputs bad/angry change the CSS class to 'bad'

        if (moodvalue == "livid" || moodvalue == "pissed"){
            document.querySelector(".moodring > div").setAttribute('class','livid');
        } 

    // Listen for user interaction on the submit button.



})
