const btnAgregar = document.getElementById('agregar');
const btnCancel = document.getElementById('cancel')
const agregarDatos = document.getElementById('agregarDatos');
const btnConfirmarDatos = document.getElementById('confirmarDatos');
const trabajoAgregado = document.getElementById('trabajoAgregado');

const enlaceVerMas = document.getElementById("enlace-ver-mas");
const contenidoAdicional = document.getElementById("contenido-adicional");

const btnMasHab = document.getElementById('masHab');
const btnCancelHab = document.getElementById('cancelHab');
const agregarHab = document.getElementById('agregarHab');
const btnConfirmarHab = document.getElementById('confirmarHab');
const nuevaHab = document.getElementById('nuevaHab');


btnAgregar.addEventListener("click", function() {
    agregarDatos.style.display = "block";
    btnCancel.style.display = "block";
});

btnCancel.addEventListener("click", function() {
    agregarDatos.style.display = "none";
    btnCancel.style.display = "none";
});


btnConfirmarDatos.addEventListener("click", function() {
    event.preventDefault();
    const antiguedad = document.getElementById('antiguedad').value;
    const puesto = document.getElementById('puesto').value;
    const tareas = document.getElementById('tareas').value;
    const nuevoTrabajo = document.createElement("row");

    nuevoTrabajo.innerHTML = "<div class='row experiencia'><div class='col-3 antiguedad'><p>"+antiguedad+"</p></div><div class='col-9 descripcion'><h3>"+puesto+"</h3><p>"+tareas+"</p></div></div>";

    trabajoAgregado.appendChild(nuevoTrabajo);

    agregarDatos.style.display = "none";
    btnCancel.style.display = "none";
});


enlaceVerMas.addEventListener("click", function(event) {
  event.preventDefault();
  if (contenidoAdicional.style.display === "none") {
    contenidoAdicional.style.display = "inline";
    enlaceVerMas.textContent = "Ver menos";
  } else {
    contenidoAdicional.style.display = "none";
    enlaceVerMas.textContent = "Ver más";
  }
});


btnMasHab.addEventListener("click", function() {
    agregarHab.style.display = "block";
    btnCancelHab.style.display = "block";
});

btnCancelHab.addEventListener("click", function() {
    agregarHab.style.display = "none";
    btnCancelHab.style.display = "none";
});

btnConfirmarHab.addEventListener("click", function() {
    event.preventDefault();
    const habilidad = document.getElementById('habilidad').value;
    const nuevaHabilidad = document.createElement("p");

    nuevaHabilidad.innerHTML = habilidad;

    nuevaHab.appendChild(nuevaHabilidad);

    agregarHab.style.display = "none";
    btnCancelHab.style.display = "none";
})