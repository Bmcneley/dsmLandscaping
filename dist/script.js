
const toggleButton = document.querySelector(`.toggle-button`);
const toggleButtonIcon = document.querySelector(`.icon`);
const dropDownMenu = document.querySelector(`.dropdown-menu`);

const accordionItems = [
    //Accordion1 [0]
    {
        "accordionButton1": document.querySelector(`.accordionButton1`),

        "accordion1": document.querySelector(`.accordion1`),
    },
    //Accordion2 [1]
    {
        "accordionButton2": document.querySelector(`.accordionButton2`),

        "accordion2": document.querySelector(`.accordion2`),
    },
    //Accordion3 [2]
    {
        "accordionButton3": document.querySelector(`.accordionButton3`),

        "accordion3": document.querySelector(`.accordion3`),


    },





];



toggleButton.onclick = function () {
  dropDownMenu.classList.toggle(`hidden`);

}

accordionItems[0].accordionButton1.onclick = function () {
    accordionItems[0].accordion1.classList.toggle(`hidden`);
};

accordionItems[1].accordionButton2.onclick = function () {
    accordionItems[1].accordion2.classList.toggle(`hidden`);
};

accordionItems[2].accordionButton3.onclick = function () {
    accordionItems[2].accordion3.classList.toggle(`hidden`);
}

window.onbeforeunload = function () {
window.scrollTo(0, 0);
};

