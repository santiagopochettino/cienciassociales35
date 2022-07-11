const items = document.getElementById('items')


const alumno1 = {
  name: 'Abalos, Darian',
  asistencias: 24,
  tbc:19,
  modulos: 5,
  evaluaciones: 28,
  recuperatorios: 7,
  puntaje: 83
}
const alumno2 = {
  name: 'Abuin, Benjamin',
  asistencias: 22,
  tbc:17,
  modulos: 'N/E',
  evaluaciones: 22,
  recuperatorios: 8,
  puntaje: 69
}

const alumno5 = {
  name: 'Aren, Santino',
  asistencias: 24,
  tbc:20,
  modulos: 5,
  evaluaciones: 16,
  recuperatorios: 17,
  puntaje: 82
}
const alumno6 = {
  name: 'Bauer, Dante',
  asistencias: 26,
  tbc:22,
  modulos: 10,
  evaluaciones: 38,
  recuperatorios: '-',
  puntaje: 96
}
const alumno7 = {
  name: 'Bureaux, Iñaki ',
  asistencias: 26,
  tbc:22,
  modulos: 10,
  evaluaciones: 39,
  recuperatorios: '-',
  puntaje: 97
}
const alumno8 = {
  name: 'Capetolo, Renata',
  asistencias: 27,
  tbc:23,
  modulos: 5,
  evaluaciones: 26,
  recuperatorios: 9,
  puntaje: 90
}
const alumno9 = {
  name: 'Carabajal, Dylan',
  asistencias: 23,
  tbc:19,
  modulos: 5,
  evaluaciones: 28,
  recuperatorios: '-',
  puntaje: 75
}
const alumno10 = {
  name: 'Casabianca, Ana',
  asistencias: 27,
  tbc:23,
  modulos: 5,
  evaluaciones: 37,
  recuperatorios: '-',
  puntaje: 92
}
const alumno11 = {
  name: 'Cespedes, Abigail ',
  asistencias: 24,
  tbc:20,
  modulos: 'N/E',
  evaluaciones: 22,
  recuperatorios: 4,
  puntaje: 70
}
const alumno12 = {
  name: 'Chavez, Alejo ',
  asistencias: 27,
  tbc:23,
  modulos: 10,
  evaluaciones: 26,
  recuperatorios: 7,
  puntaje: 93
}
const alumno13 = {
  name: 'Duyos, Julieta',
  asistencias: 27,
  tbc:23,
  modulos: 10,
  evaluaciones: 33,
  recuperatorios: '-',
  puntaje: 93
}
const alumno15 ={
  name: 'Gallo, Benjamin',
  asistencias:26,
  tbc:22,
  modulos: 4,
  evaluaciones: 6,
  recuperatorios: 13,
  puntaje: 65
}
const alumno16 ={
  name: 'Kaiser, Kevin',
  asistencias: 19,
  tbc:15,
  modulos: 'N/E',
  evaluaciones: 9,
  recuperatorios: 12,
  puntaje: 55
}
const alumno17 ={
  name: 'Leone, Joaquin',
  asistencias: 27,
  tbc:23,
  modulos: 10,
  evaluaciones: 15,
  recuperatorios: 8,
  puntaje: 83
}
const alumno18 ={
  name: 'Liendo, Kiara',
  asistencias: 25,
  tbc:21,
  modulos: 10,
  evaluaciones: 18,
  recuperatorios: 7,
  puntaje: 81
}
const alumno19 ={
  name: 'Montenegro, Jesus',
  asistencias: 23,
  tbc:19,
  modulos: 5,
  evaluaciones: 24,
  recuperatorios: 7,
  puntaje: 78
}
const alumno20 ={
  name: 'Montero, Chiara',
  asistencias: 27,
  tbc:23,
  modulos: 8,
  evaluaciones: 28,
  recuperatorios: 8,
  puntaje: 94
}
const alumno21 ={
  name: 'Olivera, Antonella',
  asistencias: 24,
  tbc:20,
  modulos: 5,
  evaluaciones: 32,
  recuperatorios: '-',
  puntaje: 81
}
const alumno22 ={
  name: 'Rasa, Lisandro',
  asistencias: 27,
  tbc:23,
  modulos: 10,
  evaluaciones: 32,
  recuperatorios: '-',
  puntaje: 92
}
const alumno24 ={
  name: 'Valenzuela, Candela',
  asistencias: 26,
  tbc:23,
  modulos: 5,
  evaluaciones: 28,
  recuperatorios: 7,
  puntaje: 89
}
const alumno25 ={
  name: 'Loyza, Kiara',
  asistencias: 23,
  tbc:19,
  modulos: 10,
  evaluaciones: 27,
  recuperatorios: 7,
  puntaje: 86
}
const alumno26 ={
  name: 'Osses, Enzo',
  asistencias: 22,
  tbc:17,
  modulos: 5,
  evaluaciones: 23,
  recuperatorios: 8,
  puntaje: 75
}
const alumno27 = {
  name: 'Orome, Araceli',
  asistencias: 18,
  tbc:17,
  modulos: 'N/E',
  evaluaciones: 9,
  recuperatorios: 8,
  puntaje: 52
}



items.innerHTML = `

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.tbc}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones}</td>
  <td>${alumno7.recuperatorios}</td>
  <td>${alumno7.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.tbc}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones}</td>
  <td>${alumno6.recuperatorios}</td>
  <td>${alumno6.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno20.name}</td>
  <td>${alumno20.asistencias}</td>
  <td>${alumno20.tbc}</td>
  <td>${alumno20.modulos}</td>
  <td>${alumno20.evaluaciones}</td>
  <td>${alumno20.recuperatorios}</td>
  <td>${alumno20.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.tbc}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones}</td>
  <td>${alumno13.recuperatorios}</td>
  <td>${alumno13.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.tbc}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones}</td>
  <td>${alumno12.recuperatorios}</td>
  <td>${alumno12.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno22.name}</td>
  <td>${alumno22.asistencias}</td>
   <td>${alumno22.tbc}</td>
  <td>${alumno22.modulos}</td>
  <td>${alumno22.evaluaciones}</td>
  <td>${alumno22.recuperatorios}</td>
  <td>${alumno22.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno10.name}</td>
  <td>${alumno10.asistencias}</td>
  <td>${alumno10.tbc}</td>
  <td>${alumno10.modulos}</td>
  <td>${alumno10.evaluaciones}</td>
  <td>${alumno10.recuperatorios}</td>
  <td>${alumno10.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td>${alumno8.evaluaciones}</td>
  <td>${alumno8.recuperatorios}</td>
  <td>${alumno8.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno24.name}</td>
  <td>${alumno24.asistencias}</td>
  <td>${alumno24.tbc}</td>
  <td>${alumno24.modulos}</td>
  <td>${alumno24.evaluaciones}</td>
  <td>${alumno24.recuperatorios}</td>
  <td>${alumno24.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno25.name}</td>
  <td>${alumno25.asistencias}</td>
  <td>${alumno25.tbc}</td>
  <td>${alumno25.modulos}</td>
  <td>${alumno25.evaluaciones}</td>
  <td>${alumno25.recuperatorios}</td>
  <td>${alumno25.puntaje}</td>
</tr>



<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno17.name}</td>
  <td>${alumno17.asistencias}</td>
  <td>${alumno17.tbc}</td>
  <td>${alumno17.modulos}</td>
  <td>${alumno17.evaluaciones}</td>
  <td>${alumno17.recuperatorios}</td>
  <td>${alumno17.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones}</td>
  <td>${alumno1.recuperatorios}</td>
  <td>${alumno1.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.tbc}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones}</td>
  <td>${alumno5.recuperatorios}</td>
  <td>${alumno5.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno21.name}</td>
  <td>${alumno21.asistencias}</td>
   <td>${alumno21.tbc}</td>
  <td>${alumno21.modulos}</td>
  <td>${alumno21.evaluaciones}</td>
  <td>${alumno21.recuperatorios}</td>
  <td>${alumno21.puntaje}</td>
</tr>






<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno18.name}</td>
  <td>${alumno18.asistencias}</td>
  <td>${alumno18.tbc}</td>
  <td>${alumno18.modulos}</td>
  <td>${alumno18.evaluaciones}</td>
  <td>${alumno18.recuperatorios}</td>
  <td>${alumno18.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno19.name}</td>
  <td>${alumno19.asistencias}</td>
  <td>${alumno19.tbc}</td>
  <td>${alumno19.modulos}</td>
  <td>${alumno19.evaluaciones}</td>
  <td>${alumno19.recuperatorios}</td>
  <td>${alumno19.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno26.name}</td>
  <td>${alumno26.asistencias}</td>
  <td>${alumno26.tbc}</td>
  <td>${alumno26.modulos}</td>
  <td>${alumno26.evaluaciones}</td>
  <td>${alumno26.recuperatorios}</td>
  <td>${alumno26.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.tbc}</td>
  <td>${alumno9.modulos}</td>
  <td>${alumno9.evaluaciones}</td>
  <td>${alumno9.recuperatorios}</td>
  <td>${alumno9.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.tbc}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones}</td>
  <td>${alumno11.recuperatorios}</td>
  <td>${alumno11.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.tbc}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones}</td>
  <td>${alumno2.recuperatorios}</td>
  <td>${alumno2.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno15.name}</td>
  <td>${alumno15.asistencias}</td>
  <td>${alumno15.tbc}</td>
  <td>${alumno15.modulos}</td>
  <td>${alumno15.evaluaciones}</td>
  <td>${alumno15.recuperatorios}</td>
  <td>${alumno15.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno16.name}</td>
  <td>${alumno16.asistencias}</td>
  <td>${alumno16.tbc}</td>
  <td>${alumno16.modulos}</td>
  <td>${alumno16.evaluaciones}</td>
  <td>${alumno16.recuperatorios}</td>
  <td>${alumno16.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno27.name}</td>
  <td>${alumno27.asistencias}</td>
  <td>${alumno27.tbc}</td>
  <td>${alumno27.modulos}</td>
  <td>${alumno27.evaluaciones}</td>
  <td>${alumno27.recuperatorios}</td>
  <td>${alumno27.puntaje}</td>
</tr>


`;