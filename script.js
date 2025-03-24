window.addEventListener("load", () => {
    let angle = 0;
    const line = document.getElementById("line");
	line.style.width="200px";
	line.style.height="2px";
	line.style.backgroundColor="#000000"
	line.style.position="absolute"
	line.style.top="300px";
	line.style.left="300px"

    setInterval(() => {
        angle += 2; 
        line.style.transform = `rotate(${angle}deg)`;
    }, 20);
});
