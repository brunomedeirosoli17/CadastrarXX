const fs = require('fs');

// Lendo o arquivo JSON
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return;
  }

  // Convertendo o JSON em objeto JavaScript
  const jsonData = JSON.parse(data);

  // Acessando os dados do arquivo JSON
  console.log(jsonData.users);
});
