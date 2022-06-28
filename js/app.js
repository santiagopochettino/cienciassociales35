const items = document.getElementById('items')


const alumno1 = {
  name: 'Abalos, Darian',
  asistencias: 21,
  tbc:16,
  modulos: 5,
  evaluaciones: '-',
  evaluaciones2: 8,
  evaluaciones3:10,
  recuperatorios: 7,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 67
}
const alumno2 = {
  name: 'Abuin, Benjamin',
  asistencias: 20,
  tbc:15,
  modulos: 'N/E',
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:7,
  recuperatorios: 8,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 58
}

const alumno5 = {
  name: 'Aren, Santino',
  asistencias: 21,
  tbc:17,
  modulos: 5,
  evaluaciones: '-',
  evaluaciones2:'-',
  evaluaciones3:8,
  recuperatorios: 9,
  recuperatorios2:8,
  recuperatorios3:'-',
  puntaje: 68
}
const alumno6 = {
  name: 'Bauer, Dante',
  asistencias: 23,
  tbc:19,
  modulos: 10,
  evaluaciones: 8,
  evaluaciones2:10,
  evaluaciones3:10,
  recuperatorios: '-',
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 80
}
const alumno7 = {
  name: 'Bureaux, Iñaki ',
  asistencias: 23,
  tbc:19,
  modulos: 10,
  evaluaciones: 9,
  evaluaciones2:10,
  evaluaciones3:10,
  recuperatorios: '-',
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 81
}
const alumno8 = {
  name: 'Capetolo, Renata',
  asistencias: 24,
  tbc:20,
  modulos: 5,
  evaluaciones: 10,
  evaluaciones2:'Aus',
  evaluaciones3: 8,
  recuperatorios: '-',
  recuperatorios2: 9,
  recuperatorios3:'-',
  puntaje: 76
}
const alumno9 = {
  name: 'Carabajal, Dylan',
  asistencias: 21,
  tbc:17,
  modulos: 5,
  evaluaciones: 10,
  evaluaciones2:9,
  evaluaciones3:9,
  recuperatorios: '-',
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 71
}
const alumno10 = {
  name: 'Casabianca, Ana',
  asistencias: 24,
  tbc:20,
  modulos: 5,
  evaluaciones: 9,
  evaluaciones2:8,
  evaluaciones3:10,
  recuperatorios: '-',
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 76
}
const alumno11 = {
  name: 'Cespedes, Abigail ',
  asistencias: 21,
  tbc:17,
  modulos: 'N/E',
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:7,
  recuperatorios: 4,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 57
}
const alumno12 = {
  name: 'Chavez, Alejo ',
  asistencias: 24,
  tbc:20,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:9,
  recuperatorios: 7,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 78
}
const alumno13 = {
  name: 'Duyos, Julieta',
  asistencias: 24,
  tbc:20,
  modulos: 10,
  evaluaciones: 9,
  evaluaciones2:8,
  evaluaciones3:8,
  recuperatorios: '-',
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 79
}
const alumno15 ={
  name: 'Gallo, Benjamin',
  asistencias:23,
  tbc:19,
  modulos: 4,
  evaluaciones: '-',
  evaluaciones2:'-',
  evaluaciones3:'Aus',
  recuperatorios: 6,
  recuperatorios2:7,
  recuperatorios3:'-',
  puntaje: 59
}
const alumno16 ={
  name: 'Kaiser, Kevin',
  asistencias: 17,
  tbc:13,
  modulos: 'N/E',
  evaluaciones: '-',
  evaluaciones2:'-',
  evaluaciones3:'Des',
  recuperatorios: 6,
  recuperatorios2:6,
  recuperatorios3:'-',
  puntaje: 42
}
const alumno17 ={
  name: 'Leone, Joaquin',
  asistencias: 24,
  tbc:20,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:9,
  evaluaciones3:'Des',
  recuperatorios: 8,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 71
}
const alumno18 ={
  name: 'Liendo, Kiara',
  asistencias: 22,
  tbc:18,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:'Aus',
  recuperatorios: 7,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 65
}
const alumno19 ={
  name: 'Montenegro, Jesus',
  asistencias: 20,
  tbc:16,
  modulos: 5,
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:8,
  recuperatorios: 7,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 64
}
const alumno20 ={
  name: 'Montero, Chiara',
  asistencias: 24,
  tbc:20,
  modulos: 8,
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:10,
  recuperatorios: 8,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 78
}
const alumno21 ={
  name: 'Olivera, Antonella',
  asistencias: 22,
  tbc:18,
  modulos: 5,
  evaluaciones: 8,
  evaluaciones2:8,
  evaluaciones3:8,
  recuperatorios: '-',
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 69
}
const alumno22 ={
  name: 'Rasa, Lisandro',
  asistencias: 24,
  tbc:20,
  modulos: 10,
  evaluaciones: 8,
  evaluaciones2:8,
  evaluaciones3:8,
  recuperatorios: '-',
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 78
}
const alumno24 ={
  name: 'Valenzuela, Candela',
  asistencias: 23,
  tbc:20,
  modulos: 5,
  evaluaciones: '-',
  evaluaciones2:8,
  evaluaciones3:10,
  recuperatorios: 7,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 73
}
const alumno25 ={
  name: 'Loyza, Kiara',
  asistencias: 20,
  tbc:16,
  modulos: 10,
  evaluaciones: '-',
  evaluaciones2:9,
  evaluaciones3:9,
  recuperatorios: 7,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 71
}
const alumno26 ={
  name: 'Osses, Enzo',
  asistencias: 21,
  tbc:16,
  modulos: 5,
  evaluaciones: 7,
  evaluaciones2:'-',
  evaluaciones3:8,
  recuperatorios: '-',
  recuperatorios2:8,
  recuperatorios3:'-',
  puntaje: 65
}
const alumno27 = {
  name: 'Orome, Araceli',
  asistencias: 16,
  tbc:15,
  modulos: 'N/E',
  evaluaciones: '-',
  evaluaciones2:9,
  evaluaciones3:'Aus',
  recuperatorios: 8,
  recuperatorios2:'-',
  recuperatorios3:'-',
  puntaje: 48
}



items.innerHTML = `

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno7.name}</td>
  <td>${alumno7.asistencias}</td>
  <td>${alumno7.tbc}</td>
  <td>${alumno7.modulos}</td>
  <td>${alumno7.evaluaciones} | <i class="bi-star-fill"></i> ${alumno7.evaluaciones2} |<i class="bi-star-fill"></i> ${alumno7.evaluaciones3}</td>
  <td>${alumno7.recuperatorios}</td>
  <td>${alumno7.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno6.name}</td>
  <td>${alumno6.asistencias}</td>
  <td>${alumno6.tbc}</td>
  <td>${alumno6.modulos}</td>
  <td>${alumno6.evaluaciones} | <i class="bi-star-fill"></i> ${alumno6.evaluaciones2}  | <i class="bi-star-fill"></i> ${alumno6.evaluaciones3}</td>
  <td>${alumno6.recuperatorios}</td>
  <td>${alumno6.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno13.name}</td>
  <td>${alumno13.asistencias}</td>
  <td>${alumno13.tbc}</td>
  <td>${alumno13.modulos}</td>
  <td>${alumno13.evaluaciones} | ${alumno13.evaluaciones2} | ${alumno13.evaluaciones3}</td>
  <td>${alumno13.recuperatorios}</td>
  <td>${alumno13.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno22.name}</td>
  <td>${alumno22.asistencias}</td>
   <td>${alumno22.tbc}</td>
  <td>${alumno22.modulos}</td>
  <td>${alumno22.evaluaciones} | ${alumno22.evaluaciones2}  | ${alumno22.evaluaciones3}</td>
  <td>${alumno22.recuperatorios}</td>
  <td>${alumno22.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno12.name}</td>
  <td>${alumno12.asistencias}</td>
  <td>${alumno12.tbc}</td>
  <td>${alumno12.modulos}</td>
  <td>${alumno12.evaluaciones} | ${alumno12.evaluaciones2}  | ${alumno12.evaluaciones3}</td>
  <td>${alumno12.recuperatorios}| ${alumno12.recuperatorios2}  | ${alumno12.recuperatorios3}</td>
  <td>${alumno12.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno20.name}</td>
  <td>${alumno20.asistencias}</td>
  <td>${alumno20.tbc}</td>
  <td>${alumno20.modulos}</td>
  <td>${alumno20.evaluaciones} | ${alumno20.evaluaciones2}  | <i class="bi-star-fill"></i> ${alumno20.evaluaciones3}</td>
  <td>${alumno20.recuperatorios}| ${alumno20.recuperatorios2}  | ${alumno20.recuperatorios3}</td>
  <td>${alumno20.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno8.name}</td>
  <td>${alumno8.asistencias}</td>
  <td>${alumno8.tbc}</td>
  <td>${alumno8.modulos}</td>
  <td><i class="bi-star-fill"></i> ${alumno8.evaluaciones}   |  ${alumno8.evaluaciones2}  | ${alumno8.evaluaciones3}</td>
  <td>${alumno8.recuperatorios}  | ${alumno8.recuperatorios2}  | ${alumno8.recuperatorios3}</td>
  <td>${alumno8.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno10.name}</td>
  <td>${alumno10.asistencias}</td>
  <td>${alumno10.tbc}</td>
  <td>${alumno10.modulos}</td>
  <td>${alumno10.evaluaciones} | ${alumno10.evaluaciones2}  | ${alumno10.evaluaciones3}</td>
  <td>${alumno10.recuperatorios}</td>
  <td>${alumno10.puntaje}</td>
</tr>




<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno24.name}</td>
  <td>${alumno24.asistencias}</td>
  <td>${alumno24.tbc}</td>
  <td>${alumno24.modulos}</td>
  <td>${alumno24.evaluaciones} | ${alumno24.evaluaciones2}  | <i class="bi-star-fill"></i> ${alumno24.evaluaciones3}</td>
  <td>${alumno24.recuperatorios}| ${alumno24.recuperatorios2}  | ${alumno24.recuperatorios3}</td>
  <td>${alumno24.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno25.name}</td>
  <td>${alumno25.asistencias}</td>
  <td>${alumno25.tbc}</td>
  <td>${alumno25.modulos}</td>
  <td>${alumno25.evaluaciones} | ${alumno25.evaluaciones2}  | ${alumno25.evaluaciones3}</td>
  <td>${alumno25.recuperatorios}| ${alumno25.recuperatorios2}  | ${alumno25.recuperatorios3}</td>
  <td>${alumno25.puntaje}</td>
</tr>



<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno17.name}</td>
  <td>${alumno17.asistencias}</td>
  <td>${alumno17.tbc}</td>
  <td>${alumno17.modulos}</td>
  <td>${alumno17.evaluaciones} | ${alumno17.evaluaciones2} | ${alumno17.evaluaciones3} </td>
  <td>${alumno17.recuperatorios}| ${alumno17.recuperatorios2} | ${alumno17.recuperatorios3}</td>
  <td>${alumno17.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno9.name}</td>
  <td>${alumno9.asistencias}</td>
  <td>${alumno9.tbc}</td>
  <td>${alumno9.modulos}</td>
  <td><i class="bi-star-fill"></i> ${alumno9.evaluaciones} | ${alumno9.evaluaciones2}  | ${alumno9.evaluaciones3}</td>
  <td>${alumno9.recuperatorios} </td>
  <td>${alumno9.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno21.name}</td>
  <td>${alumno21.asistencias}</td>
   <td>${alumno21.tbc}</td>
  <td>${alumno21.modulos}</td>
  <td>${alumno21.evaluaciones} | ${alumno21.evaluaciones2}  | ${alumno21.evaluaciones3}</td>
  <td>${alumno21.recuperatorios}</td>
  <td>${alumno21.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno5.name}</td>
  <td>${alumno5.asistencias}</td>
  <td>${alumno5.tbc}</td>
  <td>${alumno5.modulos}</td>
  <td>${alumno5.evaluaciones} | ${alumno5.evaluaciones2}  | ${alumno5.evaluaciones3}</td>
  <td>${alumno5.recuperatorios}| ${alumno5.recuperatorios2}  | ${alumno5.recuperatorios3}</td>
  <td>${alumno5.puntaje}</td>
</tr>





<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno1.name}</td>
  <td>${alumno1.asistencias}</td>
  <td>${alumno1.tbc}</td>
  <td>${alumno1.modulos}</td>
  <td>${alumno1.evaluaciones} | ${alumno1.evaluaciones2}  |<i class="bi-star-fill"></i> ${alumno1.evaluaciones3}</td>
  <td>${alumno1.recuperatorios}| ${alumno1.recuperatorios2}  | ${alumno1.recuperatorios3}</td>
  <td>${alumno1.puntaje}</td>
</tr>




<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno26.name}</td>
  <td>${alumno26.asistencias}</td>
  <td>${alumno26.tbc}</td>
  <td>${alumno26.modulos}</td>
  <td>${alumno26.evaluaciones} | ${alumno26.evaluaciones2}  | ${alumno26.evaluaciones3}</td>
  <td>${alumno26.recuperatorios}| ${alumno26.recuperatorios2}  | ${alumno26.recuperatorios3}</td>
  <td>${alumno26.puntaje}</td>
</tr>

<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno18.name}</td>
  <td>${alumno18.asistencias}</td>
  <td>${alumno18.tbc}</td>
  <td>${alumno18.modulos}</td>
  <td>${alumno18.evaluaciones} | ${alumno18.evaluaciones2}  | ${alumno18.evaluaciones3}</td>
  <td>${alumno18.recuperatorios}| ${alumno18.recuperatorios2}  | ${alumno18.recuperatorios3}</td>
  <td>${alumno18.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno19.name}</td>
  <td>${alumno19.asistencias}</td>
  <td>${alumno19.tbc}</td>
  <td>${alumno19.modulos}</td>
  <td>${alumno19.evaluaciones} | ${alumno19.evaluaciones2}  | ${alumno19.evaluaciones3}</td>
  <td>${alumno19.recuperatorios}| ${alumno19.recuperatorios2}  | ${alumno19.recuperatorios3}</td>
  <td>${alumno19.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno15.name}</td>
  <td>${alumno15.asistencias}</td>
  <td>${alumno15.tbc}</td>
  <td>${alumno15.modulos}</td>
  <td>${alumno15.evaluaciones} | ${alumno15.evaluaciones2}  | ${alumno15.evaluaciones3}</td>
  <td>${alumno15.recuperatorios}| ${alumno15.recuperatorios2}  | ${alumno15.recuperatorios3}</td>
  <td>${alumno15.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno2.name}</td>
  <td>${alumno2.asistencias}</td>
  <td>${alumno2.tbc}</td>
  <td>${alumno2.modulos}</td>
  <td>${alumno2.evaluaciones} | ${alumno2.evaluaciones2}  | ${alumno2.evaluaciones3}</td>
  <td>${alumno2.recuperatorios}| ${alumno2.recuperatorios2}  | ${alumno2.recuperatorios3}</td>
  <td>${alumno2.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno11.name}</td>
  <td>${alumno11.asistencias}</td>
  <td>${alumno11.tbc}</td>
  <td>${alumno11.modulos}</td>
  <td>${alumno11.evaluaciones} | ${alumno11.evaluaciones2}  | ${alumno11.evaluaciones3}</td>
  <td>${alumno11.recuperatorios}| ${alumno11.recuperatorios2}  | ${alumno11.recuperatorios3}</td>
  <td>${alumno11.puntaje}</td>
</tr>
<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno27.name}</td>
  <td>${alumno27.asistencias}</td>
  <td>${alumno27.tbc}</td>
  <td>${alumno27.modulos}</td>
  <td>${alumno27.evaluaciones} | ${alumno27.evaluaciones2}  | ${alumno27.evaluaciones3}</td>
  <td>${alumno27.recuperatorios}| ${alumno27.recuperatorios2}  | ${alumno27.recuperatorios3}</td>
  <td>${alumno27.puntaje}</td>
</tr>


<tr>
  <td><i class="bi-trophy-fill"></i> ${alumno16.name}</td>
  <td>${alumno16.asistencias}</td>
  <td>${alumno16.tbc}</td>
  <td>${alumno16.modulos}</td>
  <td>${alumno16.evaluaciones} | ${alumno16.evaluaciones2}  | ${alumno16.evaluaciones3}</td>
  <td>${alumno16.recuperatorios}| ${alumno16.recuperatorios2}  | ${alumno16.recuperatorios3}</td>
  <td>${alumno16.puntaje}</td>
</tr>


`;