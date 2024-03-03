let em1 = document.getElementById("email");
let div1 = document.getElementById("div1");
let pwd = document.getElementById("password");
let div2 = document.getElementById("div2");
let clear = document.getElementById("cl1");
let z1 = document.getElementById("z1");
let arr = [".", "@"];
let z = 0;



//email code
em1.addEventListener("input", (e) => {
    if (!em1.value) {
        div1.classList.remove("hide");
        div1.classList.add("show");

    }

    if (em1.value.length < 3) {
        div1.classList.remove("hide");
        div1.classList.add("show");

    } else {
        let c = 0;
        div1.classList.remove("show");
        div1.classList.add("hide");


        for (let i = 0; i < em1.value.length; i++) {

            for (let j = 0; j < arr.length; j++) {
                if (em1.value[i] == arr[j]) {
                    c++;
                    break;
                }
            }
        }
        if (c != 2) {
            div1.classList.remove("hide");
            div1.classList.add("show");

        }
        z = c;

    }
})
//password cod
let length = 0;

pwd.addEventListener("input", () => {
    let lgt = false;
    if (pwd.value.length < 8) {
        div2.classList.remove("hide1");
        div2.classList.add("show1");
        l1 = false;

    } else {
        div2.classList.remove("show1");
        div2.classList.add("hide1");
        length = pwd.value.length;
    }

})

z1.addEventListener("change", () => {

    if (length > 8) {
        if (z == 2) {
            clear.classList.remove("clear");
            clear.classList.add("clearshow");
        } else {
            clear.classList.remove("clearshow");
            clear.classList.add("clear");

        }

    }
    else{
        clear.classList.remove("clearshow");
            clear.classList.add("clear");

    }

})


function aler() {
    

    alert("successful signup!");


}