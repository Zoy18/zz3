const dice = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const message = document.getElementById('message');

rollBtn.addEventListener('click', () => {
    // 1. Add animation class
    dice.classList.add('rolling');
    rollBtn.disabled = true;
    message.textContent = "Rolling...";

    // 2. Wait 0.6 seconds for the "animation" to finish
    setTimeout(() => {
        const result = Math.floor(Math.random() * 6) + 1;
        
        // 3. Update the dice UI
        dice.textContent = result;
        dice.classList.remove('rolling');
        rollBtn.disabled = false;
        
        // 4. Update the message
        message.textContent = `You rolled a ${result}!`;
        
        if (result === 6) {
            message.textContent += " Amazing! A 6!";
        }
    }, 600);
});
