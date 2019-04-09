const ps = document.querySelectorAll('p');

ps.forEach((p, index) => {
  if (p.textContent.includes('the')) {
    p.remove();
  }
});
