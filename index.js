/**
 * generate a random color by clicking on the button
 */



//rendom color generator function

function generateHexColor () {
        
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)


    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

//set the color on background

const button = document.getElementById('button')

button.addEventListener('click', function(){
    const background = document.getElementById('root')
    const inbox = document.getElementById('inbox').value = generateHexColor()
    background.style.background = generateHexColor()
    console.log(generateColor())
})