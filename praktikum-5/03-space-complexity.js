function jumlahArray(arr) {
  let total = 0;
  for (const x of arr) total += x;
  return total;
}

function duplikasiArray(arr) {
  const baru = [];
  for (const x of arr) baru.push(x * 2);
  return baru;
}

function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1);
}

function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i;
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr));
console.log("Duplikasi array:", duplikasiArray(arr));
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));

function hitungUnik(arr) {
  const seen = new Set();
  for (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak));

console.log("");
console.log("LATIHAN");
// 1. Fungsi dengan Nested Loop (Brute Force)
function cariPasanganLambat(arr, target) {
  // Time Complexity: O(n^2) - Karena nested loop
  // Space Complexity: O(1) - Tidak menggunakan struktur data tambahan
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// 2. Fungsi dengan Set (Optimized)
function cariPasanganCepat(arr, target) {
  // Time Complexity: O(n) - Iterasi satu kali, lookup Set rata-rata O(1)
  // Space Complexity: O(n) - Menyimpan elemen dalam Set
  const seen = new Set();
  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.add(num);
  }
  return null;
}

// 3. Uji Coba
const arrTest = [2, 7, 11, 15];
const target = 9;
console.log("Hasil Lambat:", cariPasanganLambat(arrTest, target)); // [2, 7]
console.log("Hasil Cepat:", cariPasanganCepat(arrTest, target)); // [2, 7]

// 4. Pengukuran Waktu dengan 50.000 data
const n = 50000;
const largeArr = Array.from({ length: n }, () => Math.floor(Math.random() * n));
const missingTarget = -1; // Target yang pasti tidak ada

function ukurWaktu(fn, arr, target) {
  const start = Date.now();
  fn(arr, target);
  console.log(`${fn.name} selesai dalam: ${Date.now() - start} ms`);
}

ukurWaktu(cariPasanganLambat, largeArr, missingTarget);
ukurWaktu(cariPasanganCepat, largeArr, missingTarget);
