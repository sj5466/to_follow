//출력용
window.addEventListener("mousemove", function(event){
    //console.log(event);
    document.querySelector(".clientX").innerHTML = event.clientX;
    document.querySelector(".clientY").innerHTML = event.clientY;
    document.querySelector(".offsetX").innerHTML = event.offsetX;
    document.querySelector(".offsetY").innerHTML = event.offsetY;
    document.querySelector(".pageX").innerHTML = event.pageX;
    document.querySelector(".pageY").innerHTML = event.pageY;
    document.querySelector(".screenX").innerHTML = event.screenX;
    document.querySelector(".screenY").innerHTML = event.screenY;
});

//마우스 움직이기
window.addEventListener("mousemove", function(event){

    let x = event.clientX - 25 + "px";
    let y = event.clientY - 25 + "px";

    document.querySelector(".cursor").style.cssText= "left:" + x + ";  top:" + y;

    document.querySelectorAll(".mouseCont span").forEach(element => {
        let style = element.getAttribute("class");

        element.addEventListener("mouseover", () => {
            document.querySelector(".cursor").classList.add(style);
        });
        element.addEventListener("mouseout", () => {
            document.querySelector(".cursor").classList.remove(style);
        });
     });
});