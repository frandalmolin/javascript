const numerosDaSorte = [37, 14, 26, 5, 94, 87]  

for (let i = 0; i < numerosDaSorte.length; i++) {
  const elemento = numerosDaSorte[i];

  if (elemento % 2 === 0 && elemento < 50) {
    console.log(`${elemento} é par e menor que 50`);
  }
}