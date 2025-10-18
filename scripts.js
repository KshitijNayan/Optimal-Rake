(function(){
document.addEventListener('DOMContentLoaded', ()=>{
const page = document.body.dataset.page;
if(page==='home') initHome();
if(page==='order') initOrder();
if(page==='track') initTrack();
if(page==='orders') initOrders();
if(page==='rakes') initRakes();
});


/* HOME */
function initHome(){
const trains = getTrains();
const orders = getOrders();
const rakes = getRakes();


document.getElementById('stat1').innerText = trains.length;
document.getElementById('stat2').innerText = rakes.length;
document.getElementById('stat3').innerText = orders.filter(o=>o.status==='In Transit').length;
}


/* ORDER PAGE */
function initOrder(){
const form = document.getElementById('orderForm');
if(!form) return;
form.addEventListener('submit', e=>{
e.preventDefault();
alert('Order submission is simulated in this demo.');
form.reset();
});
}


/* TRACK PAGE */
function initTrack(){
const trains = getTrains();
const tbody = document.getElementById('trains_table'); if(!tbody) return; tbody.innerHTML='';
trains.forEach(t=>{
const tr = document.createElement('tr');
tr.innerHTML = `<td>${t.id}</td><td>${t.route}</td><td>${t.position}</td><td>${t.eta}</td>`;
tbody.appendChild(tr);
});
}


/* ORDERS PAGE */
function initOrders(){
const orders = getOrders();
const tbody = document.querySelector('#orders_table tbody'); if(!tbody) return; tbody.innerHTML='';
orders.forEach(o=>{
const tr = document.createElement('tr');
tr.innerHTML = `<td>${o.id}</td><td>${o.source} → ${o.destination}</td><td>${o.commodity}</td><td>${o.tonnage}</td><td>${o.status}</td>`;
tbody.appendChild(tr);
});
}


/* RAKES PAGE */
function initRakes(){
const timeline = document.getElementById('optTimeline'); if(!timeline) return;
const rakes = getRakes();
timeline.innerHTML = '';
rakes.forEach(r=>{
const div = document.createElement('div');
div.className='rake';
div.innerText = `${r.id} • length ${r.length} • from ${r.destination} • to ${r.source} • departing at ${r.departs_at}`;
timeline.appendChild(div);
});
}
})();