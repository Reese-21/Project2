document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('LoginButton');

    button.addEventListener('click', (event) => {
        // Prevent the default anchor behavior
        event.preventDefault();

        let clickCount = parseInt(localStorage.getItem('clickCount'), 10) || 0;

        // Increment the click count
        clickCount += 1;
        localStorage.setItem('clickCount', clickCount);

        // Redirect based on the click count
        if (clickCount === 1) {
            window.location.href = 'myhome0.html';
        } else {
            window.location.href = 'myhome.html';
        }
    });

    // Function to reset click count
    function resetClickCount() {
        localStorage.removeItem('clickCount');
    }

    // Set interval to reset click count every 2 minutes (120,000 milliseconds)
    setInterval(resetClickCount, 30000);
});