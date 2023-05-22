window.addEventListener("DOMContentLoaded", (event) => {
  const ball = document.getElementById("ball");
  const table = document.getElementById("table");

  table.addEventListener("click", rollBall);

  function rollBall(e) {
    const clickX = e.clientX - table.offsetLeft;
    const clickY = e.clientY - table.offsetTop;
    const ballX = parseInt(ball.style.left) || 0;
    const ballY = parseInt(ball.style.top) || 0;

    const deltaX = clickX - ballX;
    const deltaY = clickY - ballY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const time = distance / 100; 

    ball.style.transition = `left ${time}s, top ${time}s`;
    ball.style.left = `${clickX}px`;
    ball.style.top = `${clickY}px`;
  }
});
