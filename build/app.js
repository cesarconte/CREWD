const tasks = [];

let selectedStatus = 'All';
let selectedList = 'All';

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const listSelect = document.getElementById('listSelect');

  const taskName = taskInput.value;
  const listName = listSelect.value;

  if (taskName.trim() === '') {
    alert('Please enter a task name.');
    return;
  }

  const task = {
    id: generateTaskId(),
    name: taskName,
    list: listName,
    status: 'Todo'
  };

  tasks.push(task);
  taskInput.value = '';

  saveTasksToLocalStorage();
  renderTasks();
}

function renderTasks() {
  const HomeTasks = document.getElementById('home_Tasks');
  const WorkTasks = document.getElementById('work_Tasks');
  const StudyTasks = document.getElementById('study_Tasks');

  home_Tasks.innerHTML = '';
  work_Tasks.innerHTML = '';
  study_Tasks.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (selectedStatus !== 'All' && task.status !== selectedStatus) {
      return false;
    }
    if (selectedList !== 'All' && task.list !== selectedList) {
      return false;
    }
    return true;
  });

  filteredTasks.forEach(task => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('mb-6', 'flex', 'items-center');

    const circle = document.createElement('div');
    circle.classList.add('w-4', 'h-4', 'mr-2', 'border-2', 'rounded-full');
    circle.style.borderColor = getCircleColor(task.list);

    if (task.status === 'Done') {
      circle.style.backgroundColor = getCircleColor(task.list);
    }

    circle.addEventListener('click', function () {
      toggleTaskStatus(task.id);
      renderTasks();
    });

    taskItem.appendChild(circle);

    const taskName = document.createElement('span');
    taskName.textContent = task.name;

    if (task.status === 'Done') {
      taskName.classList.add('line-through');
    }

    taskItem.appendChild(taskName);

    const editIcon = document.createElement('i');
    editIcon.classList.add('fas', 'fa-edit', 'ml-2', 'cursor-pointer', 'text-gray-600');
    editIcon.addEventListener('click', function () {
      enableTaskEdit(task, taskName);
    });

    taskItem.appendChild(editIcon);

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fas', 'fa-trash', 'ml-2', 'cursor-pointer', 'text-red-600');
    deleteIcon.addEventListener('click', function () {
      deleteTask(task.id);
      renderTasks();
    });

    taskItem.appendChild(deleteIcon);

    switch (task.list) {
      case 'Home':
        home_Tasks.appendChild(taskItem);
        break;
      case 'Work':
        work_Tasks.appendChild(taskItem);
        break;
      case 'Study':
        study_Tasks.appendChild(taskItem);
        break;
    }

  });

  const homeTasksCount = document.getElementById('homeTasksCount');
  const workTasksCount = document.getElementById('workTasksCount');
  const studyTasksCount = document.getElementById('studyTasksCount');

  const homeTasks = tasks.filter(task => task.list === 'Home');
  const workTasks = tasks.filter(task => task.list === 'Work');
  const studyTasks = tasks.filter(task => task.list === 'Study');

  const homeTodoTasks = homeTasks.filter(task => task.status === 'Todo');
  const homeDoneTasks = homeTasks.filter(task => task.status === 'Done');
  const workTodoTasks = workTasks.filter(task => task.status === 'Todo');
  const workDoneTasks = workTasks.filter(task => task.status === 'Done');
  const studyTodoTasks = studyTasks.filter(task => task.status === 'Todo');
  const studyDoneTasks = studyTasks.filter(task => task.status === 'Done');

  homeTasksCount.textContent = `(${homeTodoTasks.length} Todo / ${homeDoneTasks.length} Done)`;
  workTasksCount.textContent = `(${workTodoTasks.length} Todo / ${workDoneTasks.length} Done)`;
  studyTasksCount.textContent = `(${studyTodoTasks.length} Todo / ${studyDoneTasks.length} Done)`;
}

function enableTaskEdit(task, taskNameElement) {
  const taskName = taskNameElement.textContent;
  taskNameElement.innerHTML = '';

  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.value = taskName;
  inputElement.classList.add('task-edit-input');

  const saveIcon = document.createElement('i');
  saveIcon.classList.add('fas', 'fa-save', 'ml-2', 'cursor-pointer', 'text-blue-600');
  saveIcon.addEventListener('click', function () {
    saveTaskEdit(task, inputElement.value, taskNameElement);
  });

  taskNameElement.appendChild(inputElement);
  taskNameElement.appendChild(saveIcon);
}

function saveTaskEdit(task, newName, taskNameElement) {
  if (newName.trim() !== '') {
    task.name = newName;
    taskNameElement.innerHTML = task.name;
    saveTasksToLocalStorage();

    const editIcon = taskNameElement.nextElementSibling;
    editIcon.style.display = 'inline';

    const deleteIcon = editIcon.nextElementSibling;
    deleteIcon.style.display = 'inline';

    const saveIcon = deleteIcon.nextElementSibling;
    saveIcon.remove();
  }
}

function toggleTaskStatus(taskId) {
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    task.status = task.status === 'Todo' ? 'Done' : 'Todo';
    saveTasksToLocalStorage();
  }
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    saveTasksToLocalStorage();
  }
}

function generateTaskId() {
  return Math.random().toString(36).substr(2, 9);
}

function getCircleColor(list) {
  switch (list) {
    case 'Home':
      return '#F59E0B';
    case 'Work':
      return '#10B981';
    case 'Study':
      return '#3B82F6';
    default:
      return '#D1D5DB';
  }
}

function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');

  if (storedTasks) {
    tasks.push(...JSON.parse(storedTasks));
  }
}

function filterByStatus(status) {
  selectedStatus = status;
  renderTasks();
}

function filterByList(list) {
  selectedList = list;
  renderTasks();
}

function deleteDoneTasks() {
  const doneTasks = tasks.filter(task => task.status === 'Done');

  doneTasks.forEach(task => {
    deleteTask(task.id);
  });

  renderTasks();
}

const addTaskBtn = document.getElementById('addTaskBtn');
const deleteDoneTasksBtn = document.getElementById('deleteDoneTasksBtn');
const statusFilterSelect = document.getElementById('statusFilter');
const listFilterSelect = document.getElementById('listFilter');


document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  taskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addTask();
    }
  });

  addTaskBtn.addEventListener('click', addTask);
  deleteDoneTasksBtn.addEventListener('click', deleteDoneTasks);
  statusFilterSelect.addEventListener('change', function () {
    filterByStatus(this.value);
  });
  listFilterSelect.addEventListener('change', function () {
    filterByList(this.value);
  });

  loadTasksFromLocalStorage();
  renderTasks();
});