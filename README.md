# T7 CRUD con local storage JS

- OBJETIVO DE TALLER
● Gestionar eventos asociados al localStorage para almacenar datos de forma
temporal,
● Fomentar el uso de objetos .JSON para almacenar y recuperar datos en el Local
Storage.

- DESCRIPCIÓN
Vamos a crear una aplicación web de lista de tareas (Todo List) que permita
a los usuarios ingresar y administrar sus tareas de manera sencilla y efectiva.
Una de las características clave de esta aplicación será su capacidad para
almacenar las tareas localmente utilizando el LocalStorage del navegador.
Esto significa que los datos de la lista de tareas se guardarán en el
dispositivo del usuario, lo que garantiza que las tareas se persisten incluso
después de cerrar el navegador o reiniciar el dispositivo.
Esta funcionalidad proporciona una experiencia de usuario fluida y evita la
pérdida de datos, permitiendo a los usuarios retomar su trabajo desde
donde lo dejaron. Utiliza HTML, CSS básico (en mi caso, Tailwind) y Javascript.

- FUNCIONALIDADES BÁSICAS DE CRUD
● La aplicación PERMITIRÁ al usuario crear/Create tareas.
● La aplicación PERMITIRÁ al usuario ver/Read la lista de tareas.
● La aplicación PERMITIRÁ al usuario editar/Update las tareas ingresadas previamente.
● La aplicación PERMITIRÁ al usuario eliminar/Delete las tareas ingresadas previamente.
● La aplicación PERMITIRÁ al usuario editar el estado de las tareas ingresadas previamente.
● Las tareas DEBEN tener dos estados (ToDo- Done).

- INTERFAZ
● De libre elección, pero simple en los estilos. En este taller NO es importante la ESTËTICA,
sino más bien la funcionalidad.

- FUNCIONES EXTRA
● La aplicación DEBE permitir al usuario filtrar por estado.
● La aplicación DEBE permitir al usuario categorizar las tareas (Casa, Trabajo, Estudio).
● La aplicación DEBE permitir al usuario eliminar más de una tarea a la vez.

<== ------------------------------------------------------------------------------------- ==>

# MI APLICACIÓN: 

![todolist1](https://github.com/cesarconte/CRUD-con-local-storage-JS/assets/128363248/bd9eb64a-3e3f-44db-a9f9-0ea8f8961c29)

1. FUNCIONAMIENTO:

- Para añadir una nueva tarea, el usuario deberá primero elegir a qué Lista de Tareas quiere añadir dicha tarea.
Una vez elegira la Lista de Tareas, podrá editar su nueva tarea.

![todolist2](https://github.com/cesarconte/CRUD-con-local-storage-JS/assets/128363248/a2b357dd-28ea-4cd7-a5d7-902a3a90e777)

- Para guardar la nueva tarea, tendrá dos opciones: bien presionando la tecla "Intro" del teclado, o bien haciendo
click sobre el botón "+" situado a la izquierda del <input>.

- Una vez hecho ésto, la nueva tarea se guardará en su correspondiente Lista de Tareas.

- La sección de Lista de Tareas (Home, Work y Study) está dividida en dos secciones. 

* En la primera de estas dos secciones, el usuario podrá proceder a realizar un filtrado de las tareas ya guardadas. 
Podrá hacer un doble filtrado: en primer lugar, según su estatus (All, Todo y Done), y en segundo lugar, según la Lista de Tareas.
Igualmente, debajo de los filtrados, aparece un botón. Éste botón servirá para poder eliminar todas las tareas en estatus "Done" de
una sola vez, con un click.

![todolist5](https://github.com/cesarconte/CRUD-con-local-storage-JS/assets/128363248/84c193dc-352e-4ec9-8488-154b997f5bbc)

![todolist7](https://github.com/cesarconte/CRUD-con-local-storage-JS/assets/128363248/9437db26-a61b-4e1b-9252-ea005493a11b)

* En la segunda sección, aparece la propia Lista de Tareas.
  - Cada Lista de Tareas viene acompañado, a la izquierda de su correspondiente título, por el número total de tareas incluídas en dicha
  Lista, según su estatus: Todo, y App.
  - Cada una de las tareas, viene acompañada por dos iconos. Uno, sirve para poder editar la tarea. El otro, ofrece la posibilidad
de eliminar la tarea.
  - Si uno quiere editar la tarea, se abre un <input> para habilitar la edición. A su vez, aparece un icono que se situará delante de los
  iconos de "editar" y "eliminar" una tarea. Éste nuevo icono, al hacer click sobre él, servirá para guardar la edición de la tarea. Una vez
  hecho click sobre él, dicho icono volverá a desaparecer.
  
  ![todolist8](https://github.com/cesarconte/CRUD-con-local-storage-JS/assets/128363248/810944ea-8583-4afe-aab0-52774f9a3dd8)

  - Para pasar una tarea al estatus de Done, el usuario tendrá que hacer uso de los círculos situados a la izquierda de las tareas.
  En principio, dicho círculo sólo tiene visible color en su borde. Tras hacer click sobre él, el cuerpo del mismo también tendrá color, lo
  que indicará al usuario que dicha tarea ya está en estatus "Done". Asímismo, sobre el texto de la tarea aparece un "tachado". Son las dos
  indicaciones de que una tarea ya está "Done".
  
  - El usuario también tendrá la posibilidad de hacer que una tarea que esté en "Done" vuelva a estatus "Todo". Para ello, tendrá que volver
  a hacer click sobre el correspondiente círculo.

2. OTROS:
- En el diseño en general ( pero especialmente, los colores), me he basado en la App Todoist (https://todoist.com/).
- He tratado de tener en cuenta todo lo relativo en cuanto a Accesibilidad (contraste de colores, navegración a través del teclado,... ).
- Mediante Tailwind, he añadido a la página un diseño "responsive".
 
