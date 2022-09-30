const taskInput = document.getElementById('task__input');
const buttonAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

buttonAdd.onclick = () => {
	
	if (taskInput.value.trim().length == 0){
		return false;
	}
	
	//добавить задание шаблонной строкой. Так действительно удобнее и нагляднее!:-)
	let html = `
	<div class="task">
		<div class="task__title">${taskInput.value}</div>
		<a href="#" class="task__remove">&times;</a>
	</div>
	`;
		
	taskInput.value = '';
		
	taskList.insertAdjacentHTML('afterbegin',html);

	const taskRemove = taskList.getElementsByClassName('task')[0];
	taskRemove.onclick = () => {
		taskRemove.remove();
		return false;
	}

	return false;
}
