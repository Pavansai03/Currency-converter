
let from;
let to;

let fromSelect = document.getElementById("fromSelect");
let toSelect = document.getElementById("toSelect");
let dropdowns = document.querySelectorAll("select");
let fromCountry = document.getElementById("fromCountry");
let toCountry = document.getElementById("toCountry");
let btn = document.getElementById("exchange");
let enteredAmt = document.getElementById("enteredAmt");
let exchangeAmt = document.getElementById("exchangeAmt");
let amtEnter = document.getElementById("amtEnter");
// console.log(dropdowns);
let equivalentAmt;


 let updateFlag = async (element,index)=>{
    let currCode = element.value;
    if(index === 0) {
        from = currCode;
        console.log(from);
        // fromCountry.innerHTML = currCode
    }
    
    if(index === 1) {
        to = currCode;
        console.log(to);
        // toCountry.innerHTML = currCode;
    }
    let countryCode = countryList[currCode];
    let source = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let newImg = element.parentElement.querySelector("img");
    newImg.src = source;
    const URL = `https://v6.exchangerate-api.com/v6/676090b58f5b7f8f38083601/pair/${from}/${to}`;
    let respose = await fetch(URL);
    let nxt = await respose.json();
    equivalentAmt = nxt.conversion_rate;
    console.log(equivalentAmt)
 }

 dropdowns.forEach((element,index)=>{
    for(let code in countryList) {
        let newOption = document.createElement("option");
        newOption.value = code;
        newOption.innerHTML = code;
        dropdowns[index].appendChild(newOption);
     }

    element.addEventListener("change",(e)=>{
         updateFlag(e.target,index);
    })
   
    btn.onclick = function() {
      let valueEntry = amtEnter.value;
      console.log(valueEntry);
      let obtainedValue = valueEntry*equivalentAmt;
      enteredAmt.innerHTML = amtEnter.value;
      exchangeAmt.innerHTML = obtainedValue;
      fromCountry.innerHTML = from;
      toCountry.innerHTML = to;

    }
 })
 

 
 




   


