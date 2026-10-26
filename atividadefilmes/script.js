const filmes = [
  'Roman Holiday (1953)',
  "Breakfast at Tiffany's (1961)",
  'Rebel Without a Cause (1955)',
  'Rear Window (1954)',
  'Sunset Boulevard (1950)',
  'Sabrina (1954)'
];

function favorite(button) {
  const ativo = button.dataset.favorite === 'true';
  button.dataset.favorite = String(!ativo);
  button.textContent = ativo ? '♡ Favoritar' : '♥ Favoritado';
}

document.getElementById('randomMovie').addEventListener('click', () => {
  const escolhido = filmes[Math.floor(Math.random() * filmes.length)];
  document.getElementById('result').textContent = `Hoje você vai assistir: ${escolhido} ✦`;
});
