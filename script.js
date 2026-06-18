const introText =
"Hai Nuraisyah...\n\nAda sebuah cerita kecil yang ingin aku tunjukkan.\nCerita sederhana tentang seseorang yang membuat hari biasa terasa lebih berarti 🤍";


let a=0;


function typing(){


if(a<introText.length){


document.getElementById("introText")
.innerHTML += introText[a];


a++;


setTimeout(typing,45);


}


}


window.onload=typing;





function meow(){


alert(
"meow 🐈 katanya Nuraisyah harus lihat sampai akhir 🤍"
);


}






function openStory(){


home.classList.add("hide");

story.classList.remove("hide");


}







function catMessage(x){


let text="";



if(x==1){

text=
"Aku suka cara Nuraisyah menjadi diri sendiri. Hal kecil dari kamu selalu punya arti.";

}



if(x==2){

text=
"Cara kamu memperlakukan orang lain adalah salah satu hal yang aku kagumi.";

}




if(x==3){

text=
"Terima kasih sudah hadir. Kamu membuat beberapa hal terasa lebih hangat.";

}



message.innerHTML=text;



}





function openGarden(){


story.classList.add("hide");

garden.classList.remove("hide");


}







function flower(x){


let text="";



if(x==1){

text=
"Aku tidak mencari seseorang yang sempurna. Aku menemukan seseorang yang ingin aku jaga.";

}



if(x==2){

text=
"Semoga langkah Nuraisyah selalu dipenuhi hal baik dan kebahagiaan.";

}



if(x==3){

text=
"Dari banyak cerita di dunia ini, aku bersyukur salah satunya mempertemukan aku dengan kamu.";

}



flowerText.innerHTML=text;


}








function openLetter(){


garden.classList.add("hide");

letter.classList.remove("hide");



let text=
`Nuraisyah 🤍

Aku tidak janji semuanya selalu mudah.

Tapi aku ingin terus belajar,
terus tumbuh,
dan terus menjadi lebih baik.

Aku suka cara kamu menjadi diri kamu sendiri.

Tetaplah jadi Nuraisyah yang aku kenal.

Terima kasih sudah hadir di cerita aku.

Aku sayang kamu 🤍`;



let i=0;



function write(){


if(i<text.length){


letterText.innerHTML += text[i];


i++;


setTimeout(write,45);


}


}



write();


}







function finish(){


letter.classList.add("hide");


ending.classList.remove("hide");


}
