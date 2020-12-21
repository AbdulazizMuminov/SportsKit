// const $ = require("jquery");
let data = [{
    imgUrl: "IMAGE/ice-ski.png",
    title: "Professional Skis",
    beColor: "Green, Blue",
    price: 69,
    type: "Boards",
    variation: "Ski"
}, {
    imgUrl: "IMAGE/surfboard.png",
    title: "Surfing board",
    beColor: "Gradient",
    price: 54,
    type: "Boards",
    variation: "Surfing"
}, {
    imgUrl: "IMAGE/skateboard.png",
    title: "V-3 Skateboard",
    beColor: "Black, Orange, Purple",
    price: 200,
    type: "Boards",
    variation: "Skateboard"
}, {
    imgUrl: "IMAGE/roller-skates.png",
    title: "Roller Skates",
    beColor: "Lime, Navy",
    price: 105,
    type: "Sport Shoes",
    variation: "Roller-Skates"
}, {
    imgUrl: "IMAGE/bicycle.png",
    title: "Mountain Bike",
    beColor: "Yellow, White, Olive",
    price: 430,
    type: "",
    variation: "Bicycle"
}, {
    imgUrl: "IMAGE/football-helmet.png",
    title: "Rugby Helmet",
    beColor: "Brown",
    price: 122,
    type: "",
    variation: "Rugby"
}, {
    imgUrl: "IMAGE/dumbbell.png",
    title: "Pairs of Dumbbell",
    beColor: "Black",
    price: 20,
    type: "",
    variation: "Dumbbell"
}, {
    imgUrl: "IMAGE/football-kit.png",
    title: "Man city Uniform",
    beColor: "Orange, Gradient",
    price: 35,
    type: "Uniforms",
    variation: "Football"
}, {
    imgUrl: "IMAGE/swimming-glass.png",
    title: "Swimming Glass",
    beColor: "Red, Yellow",
    price: 12,
    type: "Glasses",
    variation: "Uniform Swimming"
}, {
    imgUrl: "IMAGE/tennis-rocket.png",
    title: "Tennis Rockets",
    beColor: "Grey",
    price: 90,
    type: "Rockets",
    variation: "Tennis"
}, {
    imgUrl: "IMAGE/karate-kit.png",
    title: "Karate Kit",
    beColor: "Ivory",
    price: 44,
    type: "Uniforms",
    variation: "Karate"
}, {
    imgUrl: "IMAGE/kricket-glove.png",
    title: "Kricket Gloves",
    beColor: "Black, Orange, Purple",
    price: 200,
    type: "",
    variation: "Uniform Skateboard"
}, {
    imgUrl: "IMAGE/football-boots.png",
    title: "Football Boots",
    beColor: "Aquamarine, LawnGreen, Red",
    price: 63,
    type: "Sport Shoes",
    variation: "Uniform Football"
}, {
    imgUrl: "IMAGE/boxing-glove.png",
    title: "Boxing Gloves",
    beColor: "Black",
    price: 20,
    type: "",
    variation: "Uniform Boxing"
}, {
    imgUrl: "IMAGE/workout-machine.png",
    title: "Workout Machine J-98",
    beColor: "Black",
    price: 845,
    type: "Workout Machines",
    variation: "Workout Machine"
}, {
    imgUrl: "IMAGE/trampoline_PNG3.png",
    title: "Trampoline",
    beColor: "Blue",
    price: 87,
    type: "",
    variation: "Trampoline"
}, {
    imgUrl: "IMAGE/chess.png",
    title: "Chess",
    beColor: "Spotted",
    price: 50,
    type: "",
    variation: "Chess"
}, {
    imgUrl: "IMAGE/golf-balls.png",
    title: "Golf Balls",
    beColor: "White",
    price: 8,
    type: "Balls",
    variation: "Golf"
}, {
    imgUrl: "IMAGE/bowling.png",
    title: "Bowling Collection",
    beColor: "12 Colors",
    price: 280,
    type: "Balls",
    variation: "Bowling"
}, {
    imgUrl: "IMAGE/table-tennis-rocket.png",
    title: "Table Tennis Rockets",
    beColor: "Grey",
    price: 32,
    type: "Rockets",
    variation: "Table Tennis"
}, {
    imgUrl: "IMAGE/ice-glass.png",
    title: "Ice Ski Glasses",
    beColor: "Gradient 20 Colours",
    price: 87,
    type: "Glasses",
    variation: "Ice Ski"
}, {
    imgUrl: "IMAGE/ice-skate.png",
    title: "Ice Skates",
    beColor: "White, Silver, Yellow",
    price: 154,
    type: "Sport Shoes",
    variation: "Ice skates"
}, {
    imgUrl: "IMAGE/trinajor.png",
    title: "Workout Machine 43-k",
    beColor: "Silver",
    price: 600,
    type: "Workout Machines",
    variation: "Workout Machine"
}, {
    imgUrl: "IMAGE/kricket-stick.png",
    title: "Kricket Stick",
    beColor: "Sienna, Slate Grey",
    price: 70,
    type: "Rockets",
    variation: "Kricket"
}, {
    imgUrl: "IMAGE/sport-shoe.png",
    title: "Trainers",
    beColor: "Pink, Orchid, Light salmon",
    price: 215,
    type: "Sport Shoes",
    variation: "Trainers"
}, {
    imgUrl: "IMAGE/hockey-puck.png",
    title: "Hockey Puck",
    beColor: "Brown",
    price: 25,
    type: "Balls",
    variation: "Hockey"
}, {
    imgUrl: "IMAGE/hockey-stick.png",
    title: "Hockey Stick",
    beColor: "Dark Slate Gray, Black",
    price: 68,
    type: "Rockets",
    variation: "Hockey"
}];






$(document).ready(function () {
    buildProductView(data);
});

$("#lowToHigh").on("click", () => {
    let lowToHigh = data.sort((a, b) => a.price - b.price);
    buildProductView(lowToHigh);
});

$("#highToLow").on("click", () => {
    let highToLow = data.sort((a, b) => b.price - a.price);
    buildProductView(highToLow);
});

$("#aToZ").on("click", () => {
    let withLetter = data.sort((a, b) => a.title > b.title ? 1 : -1);
    buildProductView(withLetter);
});

for (let i = 0; i < $(".boo").length; i++) {
    $(".boo")[i].click(function () {
        let brandName = this.html;
        brandFilter(brandName);
    });
}

function brandFilter(brandName) {
    let brandPro = [];
    if (brandName === "ALL") {
        brandPro = data;
    } else {
        brandPro = data.filter((elem) => {
            if (elem.type === brandName) {
                return true;
            } else {
                return false;
            }
        });
    }
    buildProductView(brandPro);
}

function buildProductView(products) {
    let fullCardContainer = products.map((elem) => {
        let product = '<div class="card hoverable col-lg-4 mb-4" data-aos="flip-up">' +
            '<div class="card-body">' +
            '<div class="row align-items-center">' +
            '<div class="col-6 px-0">' +
            '<a>' +
            '<img src=' + elem.imgUrl + ' class="img-fluid">' +
            '</a>' +
            '</div>' +
            '<div class="col-6">' +
            '<a>' +
            '<h4 class="item-name">' + elem.title + '</h4>' +
            '</a>' +
            '<h5 class="item-color">' + elem.beColor + '</h5>' +
            '<h6 class="h6-responsive font-weight-bold dark-grey-text price">' +
            '<strong>$' + elem.price + '</strong>' +
            '</h6>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        return product;
    }).join('');
    $("#products-column1").empty();
    $("#products-column1").append(fullCardContainer);
};