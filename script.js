//for menu
const order = document.querySelectorAll('.order');
const bill = document.getElementById('bill');
const list = document.querySelector('.list');
const menuBody = document.getElementById('menuBody');
const menu = document.getElementById('menu');
const admin = document.getElementById('admin');

//admin page elements
const adminBody = document.getElementById('adminBody');
const addFoodName = document.getElementById('addFoodName');
const addQuantity = document.getElementById('addQuantity');
const addPrice = document.getElementById('addPrice');
const btnAdd = document.getElementById('add');
const btnDel = document.getElementById('del');


const qtt = 50;
let p = [];
let n = 0;
let i=0;

for (let i = 0; i < 10; i++) {
    p[i] = 0;
}
var foodList = [
    ['Pizza', 200],
    ['Burger', 400],
    ['Samosa', 70],
    ['Pasta', 80],
    ['Cold drinks', 65],
    ['Chicken soop', 70],
    ['Cheese Pizza', 280],
    ['Chow mein', 50],
    ['Batata vada', 40],
    ['Momos', 50]
];

/*
//mot working with classes, keep using functions for now :) 
class myMenu {
	constructor(){
		bill.addEventListener('click', this._bill);
		this._menu(foodList)
	}
	_menu(lm, ind = -1){
		lm.forEach(function([name, prs]) {

        const html = `
				<tr>
				  <td>${i+1}</td>
			      <td id="d${i+1}">${name}</td>
			      <td>${prs} Rs</td>
			      <td><input type="number" id="f${i+1}" class="btn btn-light f" placeholder="..."><button class="btn btn-light order" id="o${i+1}" onclick='this._invalidInput(this.id,${i+1},d${i+1}, ${prs},f${i+1}, yourOrder${i+1})'>Order!</button></td>
			      <td id="yourOrder${i+1}"></td>
			    </tr>
			`;
        list.insertAdjacentHTML('beforeend', html);
        i++;
    });
    if (ind >= 0) {
        console.log("removed");
    }

    return this;
	}

	_listOrd(qnt, id, foodName, fp, fn, yourOrders){
		let qty = fn.value;
   		if (qty > qnt) {
        	alert(qty + " " + foodName.textContent + "'s are not available");
    	} else {
        	p[n] = fp * qty;
        	yourOrders.textContent = " " + qty + " " + foodName.textContent + "'s";
        	id.textContent = 'Order!';
       	 	n++;
    	}
    	return this;
	}

	_invalidInput(id, i, name, prs, f, yOrd){
    	f.value > 0 ? this._listOrd.bind(qtt, id, name, prs, f, yOrd) : alert("Enter a positve number");
    	return this;
	}

	_bill(){
		let totalAmm = 0;
    	for (let i = 0; i < 10; i++) {
        	totalAmm += p[i];
    	}
    	spn.style.display = 'block';
    	spn.textContent = "Rs. " + (totalAmm) + ".00";	
	}
}

const menuObj = new myMenu();
menuObj._menu(foodList);
*/

//foodmenu list
const foodMenu = function(lm, ind = -1) {
    lm.forEach(function([name, prs]) {
        const html = `
				<tr>
				  <td>${i+1}</td>
			      <td id="d${i+1}">${name}</td>
			      <td>${prs} Rs</td>
			      <td><input type="number" id="f${i+1}" class="btn btn-light f" placeholder="..."><button class="btn btn-light order" id="o${i+1}" onclick="ordering(this.id,${i+1},d${i+1}, ${prs},f${i+1}, yourOrder${i+1})">Order!</button></td>
			      <td id="yourOrder${i+1}"></td>
			    </tr>
			`;
        list.insertAdjacentHTML('beforeend', html);
        i++;
    });

    if (ind >= 0) {
        console.log("removed");
    }
};
//calling foodmenu
foodMenu(foodList);

//_listOrd
const main = function(qnt, id, foodName, fp, fn, yourOrders) {
    let qty = fn.value;
    if (qty > qnt) {
        alert(qty + " " + foodName.textContent + "'s are not available");
    } else {
        p[n] = fp * qty;
        yourOrders.textContent = " " + qty + " " + foodName.textContent + "'s";
        id.textContent = 'Order!';
        n++;
    }
}

//ordering
//_invalidInput
function ordering(id, i, name, prs, f, yOrd) {
    f.value > 0 ? main(qtt, id, name, prs, f, yOrd) : alert("Enter a positve number");
}

//billing
bill.addEventListener('click', function() {
    let totalAmm = 0;
    for (let i = 0; i < 10; i++) {
        totalAmm += p[i];
    }
    spn.style.display = 'block';
    spn.textContent = "Rs. " + (totalAmm) + ".00";
});

// //hidding  admin
// menu.addEventListener('click', function() {
//     adminBody.style.display = 'none';
//     menuBody.style.display = 'block';
// });

// //hidding menu
// admin.addEventListener('click', function() {
//     adminBody.style.display = 'block';
//     menuBody.style.display = 'none';
// });

//addFood
/*let tt = [];
const temp = [];

btnAdd.addEventListener('click', function() {
    console.log(addFoodName.value, addQuantity.value, addPrice.value);
    tt = [
        [addFoodName.value, addPrice.value]
    ];
    foodList.push(tt);
    foodMenu(tt);
    alert(`Food Name: ${addFoodName.value}, Price: ${addPrice.value} has been successfuly added to the menu`);
    addFoodName.value = '';
    addPrice.value = '';
    addQuantity.value = '';
    console.log(foodList);
});


btnDel.addEventListener('click', function() {
    console.log(foodList);
    for (const index in foodList) {
        console.log(index);
        if (addFoodName.value == foodList[index][0]) {
            foodList.splice(index, 1);
            // foodMenu();
            foodMenu(foodList, index);
            i--;
            break;
        }
    }
    console.log(foodList);
});
*/