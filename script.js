const order = document.querySelector('.order');
let p = 0;
let n = [];

let id = [];
for(let i=1; i<= 10; i++){
	id[i] = document.getElementById(`o${i}`);
}

id[1].addEventListener('click', function(){
	if(n[0] % 2 != 0){
	p += 200;
	id[1].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	console.log(p);
	n[0] = 2;
	}
	else{
		p -= 200;
		id[1].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[0] =1;
	}
})
id[2].addEventListener('click', function(){
	if(n[1] % 2 != 0){
	p += 70;
	id[2].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	console.log(p);
	n[1] = 2;
	}
	else{
		p -= 70;
		id[2].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[1] =1;
	}
})
id[3].addEventListener('click', function(){
	if(n[2] % 2 != 0){
	p += 40;
	id[3].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	console.log(p);
	n[2] = 2;
	}
	else{
		p -= 40;
		id[3].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[2] =1;
	}
})
id[4].addEventListener('click', function(){
	if(n[3] % 2 != 0){
	p += 80;
	id[4].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	console.log(p);
	n[3] = 2;
	}
	else{
		p -= 80;
		id[4].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[3] =1;
	}
})
id[5].addEventListener('click', function(){
	if(n[4] % 2 != 0){
	p += 70;
	id[5].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	n[4] = 2;
	}
	else{
		p -= 70;
		id[5].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[4] =1;
	}	
})
id[6].addEventListener('click', function(){
	if(n[5] % 2 != 0){
	p += 50;
	id[6].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	n[5] = 2;
	}
	else{
		p -= 50;
		id[6].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[5] =1;
	}	
})
id[7].addEventListener('click', function(){
	if(n[6] % 2 != 0){
	p += 40;
	id[7].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	n[6] = 2;
	}
	else{
		p -= 40;
		id[7].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[6] =1;
	}
})
id[8].addEventListener('click', function(){
	if(n[7] % 2 != 0){
	p += 60;
	id[8].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	console.log(p);
	n[7] = 2;
	}
	else{
		p -= 60;
		id[8].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[7] =1;
	}
})
id[9].addEventListener('click', function(){
	if(n[8] % 2 != 0){
	p += 70;
	id[9].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	console.log(p);
	n[8] = 2;
	}
	else{
		p -= 70;
		id[9].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[8] =1;
	}
})
id[10].addEventListener('click', function(){
	if(n[9] % 2 != 0){
	p += 110;
	id[10].textContent = 'cancel';
	spn.textContent = "Rs. "+p+".00";
	console.log(p);
	n[9] = 2;
	}
	else{
		p -= 110;
		id[10].textContent = 'order';
		spn.textContent = "Rs. "+p+".00";
		n[9] =1;
	}	
})
