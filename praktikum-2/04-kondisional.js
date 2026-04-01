let nilaiUjian = 78;

console.log('=== Konversi Grade ===');
console.log('Nilai:', nilaiUjian);

if (nilaiUjian >= 90) {
    console.log('Grade: A (Sangat Baik)');
} else if (nilaiUjian >= 80) {
    console.log('Grade: B (Baik)');
} else if (nilaiUjian >= 70) {
    console.log('Grade : C (Cukup)');
} else if (nilaiUjian >= 60) {
    console.log('Grade: D (Kurang)');
} else {
    console.log('Grade: E (Tidak Lulus)');
}

let namaHari = 'Rabu';

console.log('\n=== Cek Jenis Hari ===');
switch (namaHari) {
    case'Senin':
    case'Selasa':
    case 'Rabu':
    case 'Kamis':
    case 'Jumat':
        console.log(`${namaHari} adalah hari kerja.`);
        break;
    case 'Sabtu':
    case 'Minggu':
        console.log(`${namaHari} adalah akhir pekan.`);
        break;
    default:
        console.log('Nama hari tidak dikenali.');
}

let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? 'LULUS'    : 'TIDAK LULUS';

console.log('\n=== Status Kelulusan ===');
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);




const bulan = 7;

if(bulan === 12 || bulan === 1 || bulan === 2) {
    console.log("Musim : Dingin");
} else if (bulan === 3 || bulan === 4 || bulan === 5) {
    console.log("Musim: Semi");
} else if (bulan === 6 || bulan === 7 || bulan === 8) {
    console.log("Musim: Panas");
} else {
    console.log("Musim: Gugur");
}

const adaAwan = true;
const adaAngin = false;

console.log(`Mendung sekaligus berangin? ${adaAwan && adaAngin}`);
console.log(`Ada awan atau angin? ${adaAwan || adaAngin}`);
console.log(`Langit cerah (tidak ada awan)? ${!adaAwan}`);