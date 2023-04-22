var estudante = {
    nome: "Martins Almeida",
    idade: 20,
    favCor: "Amarela"
  };
  
  console.log("Propriedades do objeto estudante:");
  for (var prop in estudante) {
    console.log(prop + ": " + estudante[prop]);
  }
  
  console.log("\nAntes de excluir a propriedade favCor:", estudante);
  delete estudante.favCor;
  console.log("Depois de excluir a propriedade favCor:", estudante);
  
  var comprimento = Object.keys(estudante).length;
  console.log("\nO comprimento do objeto estudante é:", comprimento);
  