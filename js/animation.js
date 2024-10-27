// animation.js
document.addEventListener("DOMContentLoaded", () => {
    const developerAnimationElement = document.getElementById('developer-animation');
    
    // Titles with words broken into separate lines
    const titles = [
      ['Full', 'Stack', 'Web', '&', 'App', 'Developer'],
      ['Machine', 'Learning', '&', 'AI', 'Learner']
    ];
    let index = 0;
  
    function updateTitle() {
      // Clear previous content
      developerAnimationElement.innerHTML = '';
  
      // Display each word on a new line by creating a <div> for each word
      titles[index].forEach(word => {
        const wordElement = document.createElement('div');
        wordElement.textContent = word;
        developerAnimationElement.appendChild(wordElement);
      });
  
      // Update index for the next title
      index = (index + 1) % titles.length;
    }
  
    // Update title every 4 seconds to match animation timing
    setInterval(updateTitle, 4000);
    updateTitle();
  });
  