/*1․ ստեղծում եք ցանկացած թեմատիկային փոքր կոնսոլային հավելված, որը չպետք ա կախում ունենա բրաուզերից

2․ ձեր կոնսոլային հավելվածի մեջ օգտագործում եք հետևյալ մեթոդները՝ toUpperCase, toLowerCase, slice, trim, split, join, forEach

3. աշխատացնում եք console-ում 

Հ․Գ․ ցանկալի ա կոնսոլում ֆունկցիա գրվի, արգումենտ փոխանցվի, ու ըստ էդ արգումենտի կատարվեն ներքին մեխանիզմները :) */

"use strict";
const handMade = {
    sorts: "Գլխարկ, կոշիկ, ժակետ",
    materials: ["Բրդյա", "Բամբակյա", "Ակրիլ", "կիսաբուրդ"],
    colors : ["Սև", "Սպիտակ", "Կանաչ", "Կապույտ", "Այլ" ],
    size: [ "6 - 12 ամսական", "0 - 6 ամսական", "12 - 18 ամսական"],
    price: [],
};
handMade.sorts.toLowerCase();
function market(a,b,c, d){
    if(handMade.sorts ===  "Գլխարկ, կոշիկ, ժակետ" && typeof(handMade.sorts) === "string"){
        console.log(`Ընտրեք այս տարբերակներից մեկը ${handMade.sorts.split(",")}`);
        console.log(`Դուք ցանկանում եք պատվիրել ${a}`);
        console.log("Ընտրեք որակը");
        console.log( handMade.materials.sort());
        if(handMade.materials[0] === "Ակրիլ"){
                console.log(`Դուք ընտրել եք ${b}`);
        }
        if( handMade.colors[4] === "Այլ"){
            handMade.colors.push(c);
            console.log(("Ընտրեք գույնը").toLowerCase());
            console.log(handMade.colors);
            console.log(`Դուք ավելացրել եք նոր գույն՝  ${c}ը`);
        }
        if(handMade.size[0] !== "0 - 6 ամսական"){
            handMade.size.sort();
            handMade.size.forEach(function(age) {
                console.log(`Ընտրեք տարիքը՝ ${age}`);
               
               
            });
            console.log(`Դուք ընտրել եք  ${handMade.size.slice(2,3)} տարիքը`);
        }
    }
    for(let i = 1; i < 2; i++){
    handMade.price.push(`${i * 3500} դրամ`);
    console.log(`Ցանկանում ենք տեղեկացնել, որ կախված երեխայի տարիքից, պատվիրած իրի որակից՝ գները փոխվում են, ամենացածր արժեքը՝ ${handMade.price.join()} դրամ է:`);
}
    console.log((`Դուք պատվիրել եք ${b} որակի ${c} ${a}, ${d} տարիքի երեխայի համար:`).toUpperCase() );
}
market("Գլխարկ", "Ակրիլ", "Դեղնականաչ", "6 - 12 ամսական");











