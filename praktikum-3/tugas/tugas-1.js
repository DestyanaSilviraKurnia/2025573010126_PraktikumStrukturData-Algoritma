const dataMahasiswa = [
    { nama: 'Amara', nilai: 85 },
    { nama: 'Desty', nilai: 92 },
    { nama: 'Saqya', nilai: 58 },
    { nama: 'Dila', nilai: 74 },
    { nama: 'Budi', nilai: 45 },
    { nama: 'Iza', nilai: 80 }
];

function hitungStatistik(arrMahasiswa) {
  
    const hasilReduce = arrMahasiswa.reduce((akumulator, saatIni) => {
        return {
            total: akumulator.total + 1,
            jumlahNilai: akumulator.jumlahNilai + saatIni.nilai,
            tertinggi: saatIni.nilai > akumulator.tertinggi ? saatIni.nilai : akumulator.tertinggi,
            terendah: saatIni.nilai < akumulator.terendah ? saatIni.nilai : akumulator.terendah
        };
    }, { total: 0, jumlahNilai: 0, tertinggi: -Infinity, terendah: Infinity });

    return {
        total: hasilReduce.total,
        rataRata: (hasilReduce.jumlahNilai / hasilReduce.total).toFixed(2),
        tertinggi: hasilReduce.tertinggi,
        terendah: hasilReduce.terendah
    };
}

function filterLulus(arrMahasiswa, batasLulus) {

    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
   
    return arrMahasiswa.map(mhs => {
        let grade;
        if (mhs.nilai >= 85) grade = 'A';
        else if (mhs.nilai >= 75) grade = 'B';
        else if (mhs.nilai >= 65) grade = 'C';
        else if (mhs.nilai >= 50) grade = 'D';
        else grade = 'E';

        return { ...mhs, grade: grade };
    });
}

console.log("      LAPORAN DATA MAHASISWA          ");
console.log("=======================================");

const stats = hitungStatistik(dataMahasiswa);
console.log(`\n[STATISTIK KELAS]`);
console.log(`- Jumlah Mahasiswa : ${stats.total}`);
console.log(`- Rata-rata Nilai  : ${stats.rataRata}`);
console.log(`- Nilai Tertinggi  : ${stats.tertinggi}`);
console.log(`- Nilai Terendah   : ${stats.terendah}`);

console.log(`\n[MAHASISWA LULUS (>= 70)]`);
const daftarLulus = filterLulus(dataMahasiswa, 70);
daftarLulus.forEach((mhs, i) => {
    console.log(`${i + 1}. ${mhs.nama} (Nilai: ${mhs.nilai})`);
});

console.log(`\n[DAFTAR LENGKAP DENGAN GRADE]`);
const daftarGrade = tambahGrade(dataMahasiswa);
daftarGrade.forEach(mhs => {
    console.log(`- ${mhs.nama}: ${mhs.nilai} | Grade: [${mhs.grade}]`);
});

console.log("\n=======================================");