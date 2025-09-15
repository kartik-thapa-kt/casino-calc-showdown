function arbitrageChecker(a, b) {
    return (Math.pow(a, -1) + Math.pow(b, -1)) < 1;
}

function ratioFirst(a, b) {
    let top = Math.pow(a, -1);
    let bottom = Math.pow(a, -1) + Math.pow(b, -1);
    return top / bottom;
}

// Process numbers using arbitrage logic
function processNumbers(a, b, amount) {
    if (!arbitrageChecker(a, b)) {
        return {
            mainResult: 0,
            message: "Not worth it (no arbitrage opportunity)."
        };
    } else {
        const betOnA = ratioFirst(a, b) * amount;
        const betOnB = (1 - ratioFirst(a, b)) * amount;
        const profit = (betOnA * a) - amount;

        return {
            mainResult: 1,
            output1: `Bet on first = ${betOnA.toFixed(2)}`,
            output2: `Bet on second = ${betOnB.toFixed(2)} | Profit = ${profit.toFixed(2)}`
        };
    }
}

// Main application logic
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('casino-form');
    const resultsContainer = document.getElementById('results');
    const mainResultSpan = document.getElementById('main-result');
    const winnerOutputs = document.getElementById('winner-outputs');
    const loserMessage = document.getElementById('loser-message');
    const output1Span = document.getElementById('output1');
    const output2Span = document.getElementById('output2');
    const loseMessageP = document.getElementById('lose-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const num1 = parseFloat(document.getElementById('number1').value);
        const num2 = parseFloat(document.getElementById('number2').value);
        const amount = parseFloat(document.getElementById('amount').value);
        
        // Validate inputs
        if (isNaN(num1) || isNaN(num2) || isNaN(amount)) {
            alert('Please enter valid numbers (odds + bet amount)!');
            return;
        }
        
        // Process numbers using arbitrage logic
        const result = processNumbers(num1, num2, amount);
        
        // Display main result
        mainResultSpan.textContent = result.mainResult;
        
        // Show/hide appropriate sections based on result
        if (result.mainResult === 1) {
            output1Span.textContent = result.output1;
            output2Span.textContent = result.output2;
            winnerOutputs.style.display = 'block';
            loserMessage.style.display = 'none';
        } else {
            loseMessageP.textContent = result.message;
            loserMessage.style.display = 'block';
            winnerOutputs.style.display = 'none';
        }
        
        resultsContainer.style.display = 'block';
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Add some casino flair - random background animations
    function createFloatingIcon() {
        const icons = ['🎰', '🎲', '🃏', '💰', '💎', '🍀', '⭐'];
        const icon = document.createElement('div');
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.position = 'fixed';
        icon.style.left = Math.random() * 100 + 'vw';
        icon.style.top = '100vh';
        icon.style.fontSize = '2rem';
        icon.style.opacity = '0.3';
        icon.style.pointerEvents = 'none';
        icon.style.zIndex = '0';
        icon.style.transition = 'all 8s ease-out';
        
        document.body.appendChild(icon);
        
        setTimeout(() => {
            icon.style.top = '-10vh';
            icon.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            document.body.removeChild(icon);
        }, 8000);
    }
    
    setInterval(createFloatingIcon, 3000);
});
