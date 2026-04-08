const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai = [85, 92, 78, 95, 88];

console.log('=== Array Awal ===');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai    :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);

console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama :', mahasiswa[0]);      
console.log('Elemen ketiga  :', mahasiswa[2]);      
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]); 
  
mahasiswa[1] = 'Siti Rahayu';   
console.log('\nSetelah diubah:', mahasiswa); 
  
 
console.log('\n=== Manipulasi Array ==='); 
mahasiswa.push('Doni');          
console.log('Setelah push    :', mahasiswa); 
  
mahasiswa.unshift('Zahra');      
console.log('Setelah unshift  :', mahasiswa); 
  
const dihapusAkhir = mahasiswa.pop();   
console.log('Dihapus (pop)   :', dihapusAkhir); 
console.log('Setelah pop     :', mahasiswa); 
  
const dihapusAwal = mahasiswa.shift();  
console.log('Dihapus (shift) :', dihapusAwal); 
console.log('Setelah shift   :', mahasiswa); 
   
console.log('\n=== Pencarian ==='); 
console.log('Indeks Ahmad :', mahasiswa.indexOf('Ahmad')); 
console.log('Ada Rina?    :', mahasiswa.includes('Rina')); 
console.log('Ada Budi?    :', mahasiswa.includes('Budi')); 
  
const sebagian = nilai.slice(1, 4);   
console.log('\nNilai asli  :', nilai); 
console.log('Slice [1,4] :', sebagian); 

console.log('');
console.log('===LATIHAN===');

let daftarBelanja = ['Beras', 'Gula', 'Minyak Goreng', 'Telur', 'Susu'];

console.log("Daftar Belanja:");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}

daftarBelanja.push('Garam', 'Kopi');
console.log("\n(Setelah menambah 2 item baru)");

let itemDihapus = daftarBelanja.shift();
console.log(`Item yang dihapus dari awal: ${itemDihapus}`);

let adaSusu = daftarBelanja.includes('Susu');
if (adaSusu) {
    console.log("Cek item 'Susu': Ya, Susu ada di dalam daftar belanja.");
} else {
    console.log("Cek item 'Susu': Tidak, Susu tidak ditemukan di daftar.");
}

console.log(`Jumlah total item saat ini: ${daftarBelanja.length}`);