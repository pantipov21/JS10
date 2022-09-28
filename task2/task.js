const taskInput = document.getElementById('task__input');
const buttonAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');


function addTask(){
	if (taskInput.value.length == 0){
		return false;
	}
	//добавить задание
	const task = document.createElement('div');
	task.setAttribute('class','task');
	
	const taskTitle = document.createElement('div');
	taskTitle.setAttribute('class','task__title');
	taskTitle.innerText=taskInput.value;
	
	const taskRemove = document.createElement('a');
	taskRemove.setAttribute('href','#');
	taskRemove.setAttribute('class','task__remove');
	taskRemove.innerHTML='&times;';
	
	task.insertAdjacentElement('afterbegin',taskRemove);
	task.insertAdjacentElement('afterbegin',taskTitle);
		
	taskList.insertAdjacentElement('afterbegin',task);
	
	taskInput.value = '';
	
	taskRemove.onclick = () => {
		taskRemove.parentElement.remove();
		return false;
	}
	
	return true;
}

buttonAdd.onclick = (e) => {
	addTask();
}

taskInput.onkeydown = (e) => {
	if (e.code === 'Enter'){
		addTask();
	}
};
