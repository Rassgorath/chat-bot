// Storing data:
var name
var time
var people
var location 
var money 

restaurants = [{name: "hungry shark", location: (5789.87, 4544.76), available: book(name, time, people), rating:3, money: 1},
{name: "the lobster", location: (5639.83, 3544.26), available : book(name, time, people), rating: 2, money: 2},
{name: "food n go", location: (3789.37, 4584.16), available : book(name, time, people), rating : 1, money: 2},
{name: "craby", location: (1289.27, 9244.96), available : book(name, time, people), rating : 5, money: 3},
{name: "the taste", location: (5769.21, 4567.75), available : book(name, time, people), rating: 4.5, money: 1},
{name: "yummi", location: (1233.09, 9929.72), available : book(name, time, people), rating : 3, money: 1},
{name: "the cook", location: (4538.90, 8724.24), available : book(name, time, people), rating : 5, money: 3},
];

coffee = [{name: "John's cafe", location: (2567.17, 2118.46), available :book(name, time, people),rating : 4.5, money: 2},
{name: "coffee wheel", location: (1345.13, 6714.46), available :book(name, time, people),rating :2.5, money: 3},
{name: "table's coffee", location: (1467.13, 1464.61), available :book(name, time, people), rating : 4.5, money: 1},
{name: "the best cafe", location: (8477.00, 9774.79), available :book(name, time, people), rating : 5, money: 2},
{name: "the round cafe", location: (4682.84, 9254.48), available :book(name, time, people), rating : 3.5, money: 1},
{name: "ram's cafe", location: (2425.90, 6836.86), available :book(name, time, people), rating : 3.5, money: 2},
{name: "the coffee bean", location: (3839.40, 8839.08), available :book(name, time, people), rating : 4, money: 1},
];

drink = [{name: "the bar", location: (6277.22, 1467.74), available :book(name, time, people), rating : 3, money: 3},
{name: "vodka's house", location: (1474.46, 1678.82), available :book(name, time, people), rating : 4.5, money: 3},
{name: "the barman", location: (5822.14, 1599.14), available :book(name, time, people), rating : 3.5, money: 2},
{name: "the liquid", location: (1672.27, 7590.36), available :book(name, time, people), rating : 4.5, money: 1},
{name: "the drinking place", location: (5582.88, 6825.33), available :book(name, time, people), rating : 5, money: 3},
{name: "lucy's bar", location: (8255.25, 3693.69), available : book(name, time, people), rating : 4, money: 1},
{name: "the round table", location: (2858.28, 8245.72), available :book(name, time, people), rating : 3, money: 1},
];

walk = [{name: "central park", location: (2652.27, 2611.14), available : crowded(location), rating : 1},
{name: "pigeon plateu", location: (7613.14, 1477.14), available :crowded(location), rating : 2},
{name: "the statue park", location: (1467.14, 4461.13), available :crowded(location), rating : 4.5},
{name: "patra's main park", location: (9146.13, 1467.06), available : crowded(location), rating : 5},
{name: "south park", location: (2672.48, 9499.09), available : crowded(location), rating : 3.5},
{name: "west city park", location: (2758.80, 2838.36), available : crowded(location), rating : 4},
{name: "old city park", location: (5767.97, 4554.78), available : crowded(location), rating : 5},
];

function book(name, time, people){
    if (open(name)==1 && full(name,people)==0)
    return 1;
}


function crowded(location){
    return 1;
}

function open(name){
    return 1;
}

function full(name,people){
    return 0;
}