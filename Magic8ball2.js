const Magic8ballResponses = ["You may rely on it", "As I see it", "Yes", "Signs point to yes", "Reply hazy, try again",
"Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", 
"Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful",];

const name = document.getElementById("Magic8ball"); //name
name.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputName = document.getElementById("name"); //text field
    console.log(inputName.value);
    /*
     * next we have to create an h1 tag in your HTML file and give it a UNIQUE id
     * then we have to select that element by ID (like we did above)
     * then we want to say selectedElement.innerHTML = inputName.value
    */

   let randomValue = Magic8ballResponses[Math.floor(Math.random() * Magic8ballResponses.length)];
   console.log(randomValue)

   const Magic8ballResponsesText = document.getElementById("randomValue"); //h1  <h1 id= "randomValue"></h1>
        
   Magic8ballResponsesText.innerHTML= randomValue

   let Magic8ball = document.getElementById('The_Magic_8_Ball') //
   Magic8ball.innerHTML=inputName.value
  })

  

  
  // You want to put all of the responses in an array.
// and then you want to randomly select a random element inside of an array



//how to select a random element from an array


//show response
