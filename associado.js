// var buttons = document.querySelectorAll(".actions .btn");
// var passos = document.querySelector(".passos")
// var rows = document.querySelector(".containerForm")
// var inputForm = document.querySelectorAll(".containerForm .form-control")


// let inputValues = {}

// function onChange(target) {
//     inputValues = {
//         ...inputValues,
//         [target.getAttribute('id')]:target.value,
//     }
//     console.log(inputValues);
// }

// for (let i = 0; i < inputForm.length; i++) {
//     inputForm[i].addEventListener('change', function ({target}) {
//         onChange(target)
//     })
// }


// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function ({target}) {
//         if (target.getAttribute('data_action') === "prev") {
//             prev();
//         }else{
//             next()
//         }
//     })
// }

// let indicator = 0;

// function prev() {
//     if (indicator > 0) {
//         indicator = indicator - 1;
//         rows.children[indicator].classList.remove("hidden")
//         rows.children[indicator].classList.add("active")
//         rows.children[indicator+1].classList.add("hidden")
//         passos.children[indicator+1].classList.remove("active")
//         passos.children[indicator].classList.add("active")
//     }
//     console.log(indicator);
// }

// function next() {
//     if (indicator < passos.children.length - 1) {
//         indicator = indicator + 1;
//         rows.children[indicator-1].classList.add("hidden")
//         rows.children[indicator].classList.add("active")
//         rows.children[indicator].classList.remove("hidden")
//         passos.children[indicator-1].classList.remove("active")
//         passos.children[indicator].classList.add("active")
//     }
//     console.log(indicator);
// }

var formAction = document.querySelector(".actions .btn");