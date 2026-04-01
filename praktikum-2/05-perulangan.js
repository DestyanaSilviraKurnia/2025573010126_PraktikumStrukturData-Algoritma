// Struktur: for (inisialisasi; kondisi; update)
console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
    console.log(`Iterasi ke-${i}`);
}

console.log('\n=== While Loop: Countdown ===');
let hitung = 5;
while (hitung > 0) {
    console.log(`Hitung mundur: ${hitung}`);
    hitung--; //WAJIB: kurangi nilai agar loop tidak berjalan selamanya
}
console.log('Selesai!');

console.log('Selesai!');

console.log('\n=== Bilangan Genap antara 1 -20 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { //Jika i habis dibagi 2 (sisa = 0), maka genap process/stdout.write(i + ' '); //cetak dibaris yang sama
    }
}

console.log(''); //pindah baris

console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
    if (i === 4){
        console.log(`Melewati angka ${i} (continue)`);
        continue; //lewati angka 4, lanjut ke i=5
    }
    if (i === 8){
        console.log(`Berhenti di angka ${i} (break)`);
        break; //hentikan loop di angka 8
    }
    console.log(`Angka: ${i}`);
}



console.log("--- Segitiga Bintang ---");
for (let i = 1; i <= 5; i++){
    let barisBintang = "";

    for (let j = 1; j <= i; j++) {
        barisBintang = barisBintang + "*";
    }
    console.log(barisBintang);
}

console.log("\n--- Bilangan Prima ---");
for (let angka = 2; angka <= 50; angka++) {
    let apakahPrima = true;

    for (let pembagi = 2; pembagi < angka; pembagi++) {
        if (angka % pembagi == 0) {
            apakahPrima = false;
            break;
        }
    }

    if (apakahPrima == true) {
        console.log(angka);
    }
}
