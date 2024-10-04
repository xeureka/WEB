

const display = document.getElementById('display')

const btnItems = document.getElementById('btn')


btnItems.forEach(button => {
    button.addEventListener('click', () => {
        addItem(button.textContent); 
    });
});


function addItem(input){
    display.value += input

}

function calculate(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = 'Error'
    }
}

function clearDisplay(){
    display.value = ''
}