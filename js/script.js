document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.getElementById('terminal');
    const commands = document.querySelectorAll('.command');
    const cursor = document.querySelector('.cursor');
    
    // Typewriter effect for commands
    function typeWriter(element, text, speed) {
        let i = 0;
        element.textContent = '';
        
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
                // Scroll to bottom as text appears
                terminal.scrollTop = terminal.scrollHeight;
            } else {
                // Show cursor after typing
                if (cursor) cursor.style.display = 'inline-block';
            }
        }
        
        typing();
    }
    
    // Animate commands on load
    function animateTerminal() {
        let delay = 500;
        
        commands.forEach((cmd, index) => {
            const cmdText = cmd.querySelector('.cmd');
            if (cmdText && !cmdText.classList.contains('no-animate')) {
                const text = cmdText.textContent;
                cmdText.textContent = '';
                
                setTimeout(() => {
                    // Hide cursor during typing
                    if (cursor) cursor.style.display = 'none';
                    typeWriter(cmdText, text, 30 + Math.random() * 20);
                }, delay);
                
                delay += text.length * 30 + 500;
            }
        });
    }
    
    // Start animation
    setTimeout(animateTerminal, 1000);
    
    // Make links open in new tab
    document.querySelectorAll('a').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
    
    // Terminal-like interaction
    document.addEventListener('keydown', function(e) {
        // On any key press, scroll to bottom
        terminal.scrollTop = terminal.scrollHeight;
    });
    
    // Click to scroll to bottom
    terminal.addEventListener('click', function() {
        terminal.scrollTop = terminal.scrollHeight;
    });
});