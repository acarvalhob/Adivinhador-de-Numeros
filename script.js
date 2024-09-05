let ad

function numberReveal() {
    const inputValue = document.querySelector('.main-input').value
    const revealedNumber = document.querySelector('.main-response')

    revealedNumber.innerHTML = inputValue
}

ad = setInterval ( function() {
    alert('Mães solteiras a 500 metros de você. Clique para ver.')
}, 5000)
