const hasTooltipElems = document.getElementsByClassName('has-tooltip');

let tooltip = document.createElement('div');
tooltip.setAttribute('class','tooltip');

for (const el of hasTooltipElems){
/*	
	СТРАННО!
	Этот код вызывает перезагрузку страницы
	
	el.addEventListener('click', () => {
		tooltip.innerText = el.innerText;
		let elPos = el.getBoundingClientRect();
		tooltip.style.left = elPos.x+'px';
		console.log(tooltip);
		el.insertAdjacentElement('afterend',tooltip);
		tooltip.classList.add('tooltip_active');
		return false;
	});
	*/
	
/*
	А вот этот код работает правильно
*/	
	el.onclick = () => {
		tooltip.innerText = el.innerText;
		let elPos = el.getBoundingClientRect();
		tooltip.style.left = elPos.x+'px';
		console.log(tooltip);
		el.insertAdjacentElement('afterend',tooltip);
		tooltip.classList.add('tooltip_active');
		return false;
	}
}

