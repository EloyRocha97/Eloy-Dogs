export function validate(form) {
  // recibe el estado del formulario
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let errors = {};
  if (!form.name) {
    errors.name = " Nombre vacio";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = " Solo letras y espacios en blanco";
  }
  /************************************************************************************ */
  if (!form.height) {
    errors.height = " Altura vacio";
  } else if (!/\d{1,2}-\d{1,2}/g.test(form.height)) {
    errors.height = " Añade un rango de altura. Ejemplo: '10-12'";
  } else {
    let rango = form.height.split("-");
    console.log(rango);
    if (Number(rango[0]) >= Number(rango[1])) {
      errors.height = " Rango no valido";
    }
  }
  /************************************************************************************ */
  if (!form.weight) {
    errors.weight = " Peso vacio";
  } else if (!/\d{1,2}-\d{1,2}/g.test(form.weight)) {
    errors.weight = " Añade un rango de peso. Ejemplo: '10-12'";
  } else {
    let rango = form.weight.split("-");
    console.log(rango);
    if (Number(rango[0]) >= Number(rango[1])) {
      errors.weight = " Rango no valido";
    }
  }
  /************************************************************************************ */
  if (!form.life_span) {
    errors.life_span = " Dato necesario";
  } else if (!/\d{1,2}-\d{1,2}/g.test(form.life_span)) {
    errors.life_span = " Vida estimada. Ejemplo: '10-12'";
  } else {
    var rango = form.life_span.split("-");
    console.log(rango);
    if (Number(rango[0]) >= Number(rango[1])) {
      errors.life_span = " Rango no valido";
    }
  }

  /*********************************************************************************** */
  if (!isValidHttpUrl(form.image)) {
    errors.image = "Url invalido";
  }
  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  return errors;
}
