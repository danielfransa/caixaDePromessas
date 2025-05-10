fetch('promessas.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('json-output').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById('json-output').textContent = 'Erro ao carregar JSON: ' + error;
  });
