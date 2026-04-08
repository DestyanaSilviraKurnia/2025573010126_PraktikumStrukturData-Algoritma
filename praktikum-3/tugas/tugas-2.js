function pangkat(basis, eksponen) {
    if (eksponen === 0) {
        return 1;
    }
    return basis * pangkat(basis, eksponen - 1);
}

function balikString(str) {
    if (str.length <= 1) {
        return str;
    }
    let karakterTerakhir = str[str.length - 1];
    let sisaString = str.slice(0, str.length - 1);
    
    return karakterTerakhir + balikString(sisaString);
}

function cekPalindrom(str) {
    const kataAsli = str.toLowerCase();
    
    const kataTerbalik = balikString(kataAsli);
    
    return kataAsli === kataTerbalik;
}

console.log("=== UJI REKURSI PANGKAT ===");
console.log(`2 pangkat 3 = ${pangkat(2, 3)}`); 
console.log(`5 pangkat 2 = ${pangkat(5, 2)}`); 
console.log(`10 pangkat 0 = ${pangkat(10, 0)}`);

console.log("\n=== UJI BALIK STRING ===");
console.log(`'halo' dibalik menjadi: '${balikString('halo')}'`);
console.log(`'it' dibalik menjadi: '${balikString('it')}'`);

console.log("\n=== UJI PALINDROM ===");
const listKata = ['katak', 'civic', 'level', 'javascript'];

listKata.forEach(kata => {
    const hasil = cekPalindrom(kata) ? "ADALAH Palindrom" : "BUKAN Palindrom";
    console.log(`Kata '${kata}' ${hasil}`);
});