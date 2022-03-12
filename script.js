const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const name = params.get('name');
const price = params.get('price');
const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');

if (!name || !price) {
	window.location.href = 'index.html';
}
nameEl.innerText = name.toUpperCase();
priceEl.innerText = price;
////
const pagarBtn = document.getElementById('pagar');
pagarBtn.addEventListener('click', () => {
	    
});
