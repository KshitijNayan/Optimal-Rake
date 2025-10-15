const demoData = {
orders: [
{ id: "ORD001", source: "Bhilai", destination: "Durgapur", commodity: "Steel Coils", tonnage: 2400, status: "In Transit" },
{ id: "ORD002", source: "Rourkela", destination: "Bokaro", commodity: "Iron Ore", tonnage: 3100, status: "Pending" },
{ id: "ORD003", source: "Burnpur", destination: "Delhi", commodity: "Finished Steel", tonnage: 2800, status: "Delivered" },
{ id: "ORD004", source: "Bokaro", destination: "Haldia", commodity: "Scrap Metal", tonnage: 1500, status: "Pending" },
{ id: "ORD005", source: "Rourkela", destination: "Paradip", commodity: "Coal", tonnage: 3200, status: "In Transit" }
],
trains: [
{ id: "TR001", route: "Bhilai → Durgapur", position: "Nagpur", eta: "4h 30m" },
{ id: "TR002", route: "Rourkela → Bokaro", position: "Jharsuguda", eta: "2h 15m" },
{ id: "TR003", route: "Burnpur → Delhi", position: "Kanpur", eta: "6h 45m" },
{ id: "TR004", route: "Bokaro → Haldia", position: "Asansol", eta: "3h 10m" }
],
rakes: [
{ id: "R1", start: 0, length: 3 },
{ id: "R2", start: 2, length: 4 },
{ id: "R3", start: 5, length: 2 },
{ id: "R4", start: 7, length: 3 }
]
};


function getOrders() { return demoData.orders; }
function getTrains() { return demoData.trains; }
function getRakes() { return demoData.rakes; }


console.log('Demo data loaded:', demoData);