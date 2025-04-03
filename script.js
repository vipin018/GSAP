let btn = document.querySelector("button");
let box = document.querySelector(".box");

let flag = 1; // Declare outside to maintain state

btn.addEventListener("click", () => {
    if (flag) {
        gsap.to(box, {
            x: 100,
            duration: 2,
            ease: "bounce.inOut",
            onComplete: () => {
                flag = 0;
            }
        });
    } else {
        gsap.to(box, {
            x: 0,
            duration: 2,
            ease: "bounce.inOut",
            onComplete: () => {
                flag = 1;
            }
        });
    }
});
