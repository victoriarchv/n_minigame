/* VARIABLES */
let step = 0

/* ELEMENTOS */
let contenedor = document.querySelector("#contenedor");
let body = document.querySelector("body");

/* EVENTOS */
body.addEventListener("click", e => { tapCollage(e) })
contenedor.addEventListener("click", tap)


/* INICIALIZAR */


/* FUNCIONES */
function tap() {
    /* console.log("tap"); */


    switch (step) {
        /* ÑOQUIS */
        case 0:
            console.log("step 0");
            hideNshow("00", "0");
            audioplay("a1")

            step += 1;
            break;

        case 1:
            console.log("step 1");
            hideNshow("0", "1");
            audioplay("a2")

            step += 1;
            break;

        case 2:
            console.log("step 2");
            hideNshow("1", "2");
            audioplay("a2")

            step += 1;
            break;

        case 3:
            console.log("step 3");
            hideNshow("2", "3");
            audioplay("a3")

            step += 1;
            break;

        case 4:
            console.log("step 4");
            hideNshow("3", "4");
            audioplay("a4")
            step += 1;
            break;

        case 5:
            console.log("step 5");
            hideNshow("4", "5");
            audioplay("a5")

            step += 1;
            break;

        case 6:
            console.log("step 6");
            hideNshow("5", "6");
            audioplay("a6")

            step += 1;
            break;

        case 7:
            console.log("step 7");
            hideNshow("6", "7");
            audioplay("a7")

            step += 1;
            break;

        case 8:
            console.log("step 8");
            hideNshow("7", "8");
            audioplay("a8")

            step += 1;
            break;

        case 9:
            console.log("step 9");
            hideNshow("8", "9");
            audioplay("a9")

            step += 1;
            break;

        /* SALSA */
        case 10:
            console.log("step 10");
            contenedor.style.backgroundImage = `url(media/IMG/fondo_3.png)`

            hideNshow("9", "10");
            audioplay("a10") /* papel */

            step += 1;
            break;

        case 11:
            console.log("step 11");
            hideNshow("10", "11");
            audioplay("a11")

            step += 1;
            break;


        case 12:
            console.log("step 12");
            hideNshow("11", "12");
            audioplay("a12")

            step += 1;
            break;

        case 13:
            console.log("step 13");
            hideNshow("12", "13");
            audioplay("a13")

            step += 1;
            break;

        case 14:
            console.log("step 14");
            hideNshow("13", "14");
            audioplay("a14")


            step += 1;
            break;

        case 15:
            console.log("step 15");
            hideNshow("14", "15");
            audioplay("a16")


            step += 1;
            break;

        case 16:
            console.log("step 16");
            hideNshow("15", "16");
            audioplay("a17")

            step += 1;
            break;

        case 17:
            console.log("step 17");
            hideNshow("16", "17");
            audioplay("a3")

            step += 1;
            break;

        /* QUESO */
        case 18:
            console.log("step 18");
            hideNshow("17", "18");
            audioplay("a10")

            step += 1;
            break;

        case 19:
            console.log("step 19");
            hideNshow("18", "19");
            audioplay("a18")

            step += 1;
            break;

        case 20:
            console.log("step 20");
            hideNshow("19", "20");
            audioplay("a15")


            step += 1;
            break;

        case 20:
            console.log("step 20");
            hideNshow("19", "20");
            audioplay("a15")


            step += 1;
            break;

        case 21:
            console.log("step 21");

            audioplay("musica")

            step += 1;
            break;
    }
}

function hideNshow(nA, nB) {
    let stepA = ".step" + nA;
    let stepB = ".step" + nB;

    /* console.log(stepA);
    console.log(stepB); */


    document.querySelectorAll(stepA).forEach(e => {
        e.classList.remove("show")
        e.classList.add("hide")
    });

    document.querySelectorAll(stepB).forEach(e => {
        e.classList.remove("hide")
        e.classList.add("show")
    });
}

function audioplay(n) {
    let an = "media/AUDIO/" + n + ".mp3"

    audio = new Audio(an);
    audio.play();
}

function tapCollage(e) {
    /*     console.log(step);*/

    if (step > 21) {
        const x = e.clientX;
        const y = e.clientY;

        if (step >= 22 && step <= 55) {
            addImage(step - 21, x, y);

            if (step === 22) {
                addText("TAP, TAP, TAP!")
            }

            if (step === 55) {
                addText("<mark>Por todas las cositas que ya hicimos,<br>y todas las que nos quedan por probar</mark>", "t1")
            }

            step += 1;
        }
        else if (step === 56) {
            const fixedDate = new Date("2024-02-29");
            const today = new Date();

            const diffMs = today - fixedDate;
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

            addText(`<mark>Te quiero mucho pipi<br>felices 951 días :3</mark>`, "t2")

            step += 1;
        }
        else if (step === 57) {
            addText(`<mark>FIN</mark>`, "t3")
        }
    }
}

function addImage(n, x, y) {
    let num = n;
    let posX = x;
    let posy = y;

    let img = document.createElement("img");
    img.setAttribute("src", `media/IMG/archivo/${num}.png`);
    img.setAttribute("class", `collage`);
    img.style.position = "fixed";
    img.style.left = `${posX}px`;
    img.style.top = `${posy}px`;
    img.style.width = "70vw";
    img.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 30 - 15}deg)`;
    img.style.pointerEvents = "none";
    body.appendChild(img)
}

function addText(_text, _id) {
    let text = _text;
    let id = _id;

    let p = document.createElement("p");
    p.setAttribute("id", id)
    p.innerHTML = text
    body.appendChild(p)
}



/* tengo una carpeta de imagenes
quiero insertarlas dinamicamente en el #contenedor, 
seteadas en el html para poder controlar con el case (case 21-en adelante) (poner class a cada una) 
función solo de show
cada una con una ubicación en la web determinada de forma randómica fixed x,y (top, left) 

1. Insertar imágenes en el html
2. Agregado de clase "step"
3. Agregado de pos fixed
4. Agregado x,y random

*/

