let semangka = {
    fruitName : 'Semangka',
    latin : 'Nama Latin 1',
    biji : 'Jenis Biji 1',
}

let gambar = document.getElementById('gambar');
gambar.setAttribute('src','semangka.jpg')
let fruitName = document.getElementById('fruit-name');
fruitName.appendChild(document.createTextNode(semangka.fruitName));
let latin = document.getElementById('latin');
latin.appendChild(document.createTextNode(semangka.latin))
let biji = document.getElementById('biji');
biji.appendChild(document.createTextNode(semangka.biji))

//Pisang
let pisang = {
    fruitName2: 'Pisang',
    latin2 : 'Nama Latin 2',
    biji2 : 'Jenis Biji 2',
}

let gambar2 = document.getElementById('gambar2');
gambar2.setAttribute('src','pisang.jpg')
let fruitName2 = document.getElementById('fruit-name2');
fruitName2.appendChild(document.createTextNode(pisang.fruitName2));
let latin2 = document.getElementById('latin2');
latin2.appendChild(document.createTextNode(pisang.latin2))
let biji2 = document.getElementById('biji2');
biji2.appendChild(document.createTextNode(pisang.biji2))

//jambu
let jambu = {
    fruitName3: 'Jambu',
    latin3 : 'Nama Latin 3',
    biji3 : 'Jenis Biji 3',
}

let gambar3 = document.getElementById('gambar3');
gambar3.setAttribute('src','jambu.jpg')
let fruitName3 = document.getElementById('fruit-name3');
fruitName3.appendChild(document.createTextNode(jambu.fruitName3));
let latin3 = document.getElementById('latin3');
latin3.appendChild(document.createTextNode(jambu.latin3))
let biji3 = document.getElementById('biji3');
biji3.appendChild(document.createTextNode(jambu.biji3))