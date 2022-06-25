let pageOne = document.getElementById("one")
let pageTwo = document.getElementById("two")
let pageThree = document.getElementById("three")


let btnOne = document.getElementById("buttonOne")
let btnTwo = document.getElementById("buttonTwo")
let btnThree = document.getElementById("buttonThree")


btnOne.addEventListener("click", () => { 
    changePage(1)
})

btnTwo.addEventListener("click", () => {
    changePage(2)
})
btnThree.addEventListener("click", () => {
    changePage(3)
})

function changePage(pageNumber) {
    if (pageNumber == 1) {
        pageOne.style.display = "block";
          pageTwo.style.display = "none";
          pageThree.style.display = "none";


    } else if (pageNumber == 2) {
        pageOne.style.display = "none";
        pageTwo.style.display = "block";
        pageThree.style.display = "none";

    } else if (pageNumber == 3) {
        pageOne.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "block";

    }

}