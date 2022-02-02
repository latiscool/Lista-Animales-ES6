class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  datosPropietario() {
    return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion} y el numero telefonico de contacto: ${this._telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }

  //Solo Getter
  get getTipo() {
    return this._tipo;
  }
}
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  //Getter y Setters
  get nombreMascota() {
    return this._nombreMascota;
  }

  set nombreMascota(nuevo_nombreMascota) {
    return (this._nombreMascota = nuevo_nombreMascota);
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(nueva_enfermedad) {
    return (this.enfermedad = nueva_enfermedad);
  }
}

let formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  //Capturando datos del DOM
  let inputPropietario = document.getElementById('propietario').value;
  let inputDireccion = document.getElementById('direccion').value;
  let inputTelefono = document.getElementById('telefono').value;
  let inputTipo = document.getElementById('tipo').value;
  let inputNombreMascota = document.getElementById('nombreMascota').value;
  let inputEnfermedad = document.getElementById('enfermedad').value;

  //Definiendo las instancias
  let perro = new Mascota(
    inputPropietario,
    inputDireccion,
    inputTelefono,
    inputTipo,
    inputNombreMascota,
    inputEnfermedad
  );
  let gato = new Mascota(
    inputPropietario,
    inputDireccion,
    inputTelefono,
    inputTipo,
    inputNombreMascota,
    inputEnfermedad
  );
  let conejo = new Mascota(
    inputPropietario,
    inputDireccion,
    inputTelefono,
    inputTipo,
    inputNombreMascota,
    inputEnfermedad
  );

  //if ternario para almacenar la instacia, seleccionada
  let seleccion =
    inputTipo === 'perro'
      ? perro
      : inputTipo === 'gato'
      ? gato
      : inputTipo === 'conejo'
      ? conejo
      : 'Debe selecionar una Opcion';

  let mascotaAgregada = `El tipo de animal es un: ${seleccion.getTipo}, mientras que el nombre de la mascota es: ${seleccion.nombreMascota} y la enfermedad es: ${seleccion.enfermedad}`;

  //Mostrado los datos agregado en el formulario
  document.getElementById(
    'resultado'
  ).innerHTML = `<li>${seleccion.datosPropietario()}</li> <li>${mascotaAgregada}</li>`;
});

let btnLimpiar = document.getElementById('limpiar');

function Limpiar() {
  return (document.querySelectorAll('input').value = '');
}
