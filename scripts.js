// This script adds a subtle animation to the orb in the background

document.addEventListener('DOMContentLoaded', () => {
    const orb = document.getElementById('orb');
  
    let xOffset = 0, yOffset = 0;
    const orbSpeed = 0.03;
  
    // Function to animate the orb moving in a circular pattern
    function animateOrb() {
      xOffset += orbSpeed;
      yOffset += orbSpeed;
  
      const x = Math.sin(xOffset) * 10;
      const y = Math.cos(yOffset) * 10;
  
      orb.style.transform = `translate(${x}px, ${y}px)`;
  
      requestAnimationFrame(animateOrb);
    }
  
    animateOrb();
  });
  