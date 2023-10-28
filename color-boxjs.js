var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
    var rectangleloction = rect.getBoundingClientRect();
    var insiderectval = details.clients - rectangleloction.left;

    if (insiderectval < rectangleloction.width / 2) {

        var redcolor = gsap.utils.mapRange(0, rectangleloction.width / 2, 255, 0, insiderectval);

        gsap.to(rect, {
            backgroundColor: 'rbg(${redcolor},0,0)', ease: power4,
        });
    }
    else {

        var bluecolor = gsap.utils.mapRange(rectangleloction.width / 2, rectangleloction.width, 0, 255, insiderectval);

        gsap.to(rect, {
            backgroundColor: 'rbg(0,0,${bluecolor})', ease: power4,
        });


        rect.addEventListener("mouseleave", function () {
            gsap.to(rect, 
           {backgroundColor: "white",
            });
        };
       
});

