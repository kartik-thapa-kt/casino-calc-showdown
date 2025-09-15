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
        
        // Validate inputs
        if (isNaN(num1) || isNaN(num2)) {
            alert('Please enter valid numbers!');
            return;
        }
        
        // Process numbers using the calculator
        const result = processNumbers(num1, num2);
        
        // Display main result
        mainResultSpan.textContent = result.mainResult;
        
        // Show/hide appropriate sections based on result
        if (result.mainResult === 1) {
            // Winner - show bonus outputs
            output1Span.textContent = result.output1;
            output2Span.textContent = result.output2;
            winnerOutputs.style.display = 'block';
            loserMessage.style.display = 'none';
        } else {
            // Loser - show message
            loseMessageP.textContent = result.message;
            loserMessage.style.display = 'block';
            winnerOutputs.style.display = 'none';
        }
        
        // Show results container
        resultsContainer.style.display = 'block';
        
        // Scroll to results
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
        
        // Animate upward
        setTimeout(() => {
            icon.style.top = '-10vh';
            icon.style.opacity = '0';
        }, 100);
        
        // Remove element after animation
        setTimeout(() => {
            document.body.removeChild(icon);
        }, 8000);
    }
    
    // Create floating icons periodically
    setInterval(createFloatingIcon, 3000);
});