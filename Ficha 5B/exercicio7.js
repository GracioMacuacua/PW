function validarEmail(email) {
    var padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padrao.test(email);
}

//Teste
var email1 = "exemplo@dominio.com";
var email2 = "exemplo@dominio";

console.log(validarEmail(email1)); // true
console.log(validarEmail(email2)); // false
