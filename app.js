function init(SeletorFrase, seletorSource, seletorBtn) {
  const frase = document.querySelector(SeletorFrase);
  const source = document.querySelector(seletorSource);
  const btn = document.querySelector(seletorBtn);
  const body = document.querySelector('body');
  
  if (frase && source && btn) {

    async function activeApp() {
      try {
        // Carrega o JSON com os versículos
        const dadosResponse = await fetch('./promessas.json');
        const dadosJSON = await dadosResponse.json();

        // Seleciona um versículo aleatório
        const aleatorio = dadosJSON[Math.floor(Math.random() * dadosJSON.length)];

        // Atualiza o DOM
        frase.innerText = `"${aleatorio.description}"`;
        source.innerText = `${aleatorio.source} (${aleatorio.version})`;

        // Atualiza a cor de fundo
        return gradientColor();
      } catch (error) {
        console.log("Erro ao carregar versículo:", erro);
      }

      async function gradientColor() {
        try {
          const colorsResponse = await fetch('./colors.json');
          const colorsJSON = await colorsResponse.json();
          const aleatorioColors = colorsJSON[Math.floor(Math.random() * colorsJSON.length)].color;

          body.style.background = aleatorioColors;
        } catch (erro) {
          console.log("Erro ao carregar cor:", erro);
        }
      }
    }
    btn.addEventListener('click', activeApp);
    activeApp(); // para exibir um versículo ao carregar a página
  }
}

init('.frase', '.source', '.btn-novo');
