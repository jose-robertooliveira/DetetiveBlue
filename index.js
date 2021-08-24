//const entrada = require('prompt-sync')();




const resp_1 = "s";
const resp_2 = "n";

let p_1 = prompt("Telefonou para a vitima? ");
let p_2 = prompt("Esteve no local do crime? ");
let p_3 = prompt("Mora perto da vitima? ");
let p_4 = prompt("Devia para a vitima? ");
let p_5 = prompt("Ja trabalhou com a vitima? ");


if(p_1 == p_2 && p_1 && p_2 != resp_2 ) {
  console.log("Suspeita");
  }else if(p_1 && p_2 == resp_2 || p_3 && p_4 == resp_2) {
    console.log("Inocente");

}else if (p_1 && p_2 && p_3 && p_4 == resp_1) {
  console.log("Cumplice");
}else if(p_1 && p_2 && p_3 && p_4 && p_5 == resp_1) {
  console.log("Assassino");
} 