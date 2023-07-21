function comprar() {
  /*Primero solicito datos por prompt*/
  let apellido = prompt("Por favor ingrese su Apellido");
  let nombre = prompt("Ahora Ingrese su Nombre");
  /* mensaje de bienvenida*/
  alert(`${nombre} bienvenido a Joyeria Donzela. Aqui podras calcular el total de tus compras`);
  let realizaCompra = prompt("¿Desea realizar una compra?\n * SI para realizar una compra \n * NO para salir");

  /* Pregunto si quire realizar la compra */
  if (realizaCompra == "SI" || realizaCompra == "si" || realizaCompra == "Si") {
    /* Aqui realizo el while para sumar los productos */
    let total = 0;
    let producto = prompt("Ingrese un número del 1 al 4 para seleccionar su producto o el número 0 para finalizar.\n-> 1: Anillo de oro - $ 52500\n-> 2: Aros de oro - $ 21200\n-> 3: Dije de plata - $ 7500\n-> 4: Pulsera de plata - $ 15300\n-> 0: SALIR");

    //Repetimos hasta que se ingresa "0"
    while (producto != 0) {
      switch (producto) {
        case "1":
          total += 52500;
          alert("Anillo de oro sumado");
          break;
        case "2":
          total += 21200;
          alert("Aros de oro sumado");
          break;
        case "3":
          total += 7500;
          alert("Dije de plata sumado");
          break;
        case "4":
          total += 15300;
          alert("Pulsera de plata sumada");
          break;
        default:
          alert("El codigo no existe, por favor ingrese un número del 0 al 4")
          break;
      }
      producto = prompt("Ingrese un número del 1 al 4 para seleccionar su producto o el número 0 para finalizar.\n-> 1: Anillo de oro - $ 52500\n-> 2: Aros de oro - $ 21200\n-> 3: Dije de plata - $ 7500\n-> 4: Pulsera de plata - $ 15300\n-> 0: SALIR");
    }
    if (total != 0) {
      alert(`El total de su compra es $${total}. ${nombre} gracias por visitarnos. Regresa pronto`);
    } else {
      alert("No ha realizado ninguna compra. Si aun desea realizarla, vuelva a ingresar");
    }


  } else {
    /* Aqui envio mensaje cuando no desea realizar una compra */
    alert(`${nombre} ${apellido} gracias por visitarnos. Vuelva pronto`)

  }


}


