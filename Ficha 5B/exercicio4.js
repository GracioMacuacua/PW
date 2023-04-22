function dividirArray(array) {
    var soma1 = 0;
    var soma2 = 0;
    
    for (var i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        soma1 += array[i];
      } else {
        soma2 += array[i];
      }
    }
    
    var resultado = [soma1, soma2];
    
    return resultado;
  }
  
  var meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var resultado = dividirArray(meuArray);
  console.log(resultado);
  