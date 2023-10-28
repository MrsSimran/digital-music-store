var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
    var rectangleloction = rect.getBoundingClientRect();
    var insiderectval = details.clients - rectangleloction.left;

    if (insiderectval < rectangleloction.width / 2) {
        console.log("left");
    }
    else {
        console.log("right");
    }
});