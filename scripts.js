document.addEventListener('DOMContentLoaded', function () {
    const hand = document.getElementById('hand');
    const orb = document.getElementById('orb');
  
    let xOffset = 0, yOffset = 0;
    let orbSpeed = 0.02;
  
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
  