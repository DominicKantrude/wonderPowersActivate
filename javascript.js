// document.querySelector("#activate-flight").addEventListener("click", buttonHandlerFunction("#flight"))
// document.querySelector("#activate-mindreading").addEventListener("click", buttonHandlerFunction("#mindreading"))
// document.querySelector("#activate-xray").addEventListener("click", buttonHandlerFunction("#xray"))


// function buttonHandlerFunction(classToToggle) {
//     let targetEl = document.querySelector(classToToggle);

//     targetEl.classList.toggle("disabled");
//     targetEl.classList.toggle("enabled");
// }

document.querySelector("#activate-flight").addEventListener("click", buttonHandlerFunction)
document.querySelector("#activate-mindreading").addEventListener("click", buttonHandlerFunction)
document.querySelector("#activate-xray").addEventListener("click", buttonHandlerFunction)
document.querySelector("#activate-all").addEventListener("click", enableAllHandlerFunction)
document.querySelector("#deactivate-all").addEventListener("click", disableAllHandlerFunction)


function buttonHandlerFunction(event) {
    let target = event.target.id.replace("activate-", "");
    let targetEl = document.querySelector(`#${target}`);

    targetEl.classList.toggle("disabled");
    targetEl.classList.toggle("enabled");
}

function enableAllHandlerFunction(event) {
    let allPowers = document.querySelectorAll(".power");
    allPowers.forEach(power => {
        power.classList.toggle("enabled");
       
    });


}

function disableAllHandlerFunction(event) {
    let allPowers = document.querySelectorAll(".power");
    allPowers.forEach(power => {
        power.classList.toggle("disabled");
        
    })
}



















// {/* Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the 
// document.querySelectorAll() method for these. */}