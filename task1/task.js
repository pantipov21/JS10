const hasTooltipElems = document.getElementsByClassName('has-tooltip');

let tooltip = document.createElement('div');
tooltip.setAttribute('class','tooltip');

function showTooltip(el){
	tooltip.innerText = el.title;
	let elPos = el.getBoundingClientRect();
	tooltip.style.left = elPos.x+'px';
	tooltip.style.top = (elPos.y+elPos.height)+'px';
	tooltip.classList.add('tooltip_active');
}

function hideTooltip(){
	tooltip.classList.remove('tooltip_active');
}

for (const elem of hasTooltipElems){
	elem.insertAdjacentElement('afterend',tooltip); //чтобы не вставлялась подсказка в DOM
									// каждый раз по click

	elem.addEventListener('click', (event) => {
		
		if (tooltip.classList.contains('tooltip_active')){
			if (tooltip.innerText == elem.title){
				hideTooltip();
			}
			else
			{
				showTooltip(elem);
			}
		}
		else
		{
			showTooltip(elem);
		}
		
		event.preventDefault();
	});
	
}

