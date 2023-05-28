document.addEventListener("mousemove", function(event) {
  const movingBackground = document.getElementById("moving-background");
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const moveX = (mouseX - centerX) * 0.05;
  const moveY = (mouseY - centerY) * 0.05;

  movingBackground.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
