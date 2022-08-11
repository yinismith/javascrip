const obtenernumero = () => {
  let num = prompt("ingrese un numero");
  try {
    if (num == "") throw "esta vacio";
    if (isNaN(num)) throw "no es un numero";
    num = Number(num);
    if (num < 5) throw "el numero es muy pequeño";
    if (num > 10) throw "el numero es muy grande";
  } catch (error) {
    console.log(error);
  }
};
obtenernumero();
