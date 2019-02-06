var dataset = [
    {
        color: "red",
        message: "I am a cool message!"
    },
    {
        color: "blue",
        message: "Living on the planet that is cool and blue as me!"
    },
    {
        color: "green",
        message: "The grass is always greener"
    }
]

var number = [];

function someCoolNumber(cr, mes) {

    var that = this;

    this.color = cr;
    this.message = mes;

    this.ele = document.createElement("div");
    this.ele.style.backgroundColor = this.color;
    this.ele.style.height = "100px";
    this.ele.style.lineHeight = "100px";
    this.ele.style.color = "Black";
    this.ele.style.paddingRight = "50px";


    this.ele.addEventListener("click", function () {
        that.ele.innerHTML = that.message;
    })
    ;

    document.body.appendChild(this.ele);
}

for (var i = 0; i < dataset.length; i++) {
    number.push(new someCoolNumber(dataset[i].color, dataset[i].message));
}