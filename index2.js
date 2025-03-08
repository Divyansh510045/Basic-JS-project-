const containerE1 = document.querySelector(".container");


const careers = ["Student","Web Developer","Freelancer"]

let careerIndex = 0;
let  characterIndex = 0;
updateText();

function updateText()
    {
        characterIndex++;
        containerE1.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,1)=== 'I' ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
        
        if(characterIndex === careers[careerIndex].length)
        {
            careerIndex++
            characterIndex = 0;
        }
        if (characterIndex === careers.lenght)
        {
            careerIndex = 0;
        }
        setTimeout(updateText,500);
    }





