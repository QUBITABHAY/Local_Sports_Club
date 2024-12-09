document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Success message
    const Message = document.getElementById('Message');
    const countdownElement = document.getElementById('time');
    let timeLeft = 10;
    
    // Show success message
    Message.style.display = 'flex';
    
    // Start countdown
    const countdown = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdown);
            window.location.href = 'index.html';
        }
    }, 1000);
});