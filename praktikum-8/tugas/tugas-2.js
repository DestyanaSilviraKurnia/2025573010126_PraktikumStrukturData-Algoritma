// tugas/tugas-2.js

/**
 * Poin 2: subArrayJumlahK(arr, k)
 * Menghitung jumlah subarray yang jumlah elemennya = k dengan Prefix Sum + HashMap.
 * Time Complexity: O(n) | Space Complexity: O(n)
 */
function subArrayJumlahK(arr, k) {
  const sumMap = new Map();
  sumMap.set(0, 1); // Basis data: prefix sum awal bernilai 0 sebanyak 1 kali

  let currentSum = 0;
  let count = 0;

  for (let num of arr) {
    currentSum += num;

    // Jika (currentSum - k) ada di map, berarti ada subarray bernilai k yang melintas
    if (sumMap.has(currentSum - k)) {
      count += sumMap.get(currentSum - k);
    }

    sumMap.set(currentSum, (sumMap.get(currentSum) || 0) + 1);
  }

  return count;
}

/**
 * Poin 3: karakterPertamaUnik(s)
 * Mengembalikan indeks karakter pertama yang tidak berulang.
 * Time Complexity: O(n) | Space Complexity: O(1) (karena variasi karakter alfabet konstan)
 */
function karakterPertamaUnik(s) {
  const freqMap = new Map();

  // Iterasi pertama: Hitung frekuensi tiap karakter
  for (let char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Iterasi kedua: Cari karakter pertama yang frekuensinya tepat = 1
  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

/**
 * Poin 4: topKFrequent(arr, k)
 * Mengembalikan k elemen yang paling sering muncul.
 * Time Complexity: O(n log n) [karena pengurutan] | Space Complexity: O(n)
 */
function topKFrequent(arr, k) {
  const freqMap = new Map();

  // Hitung frekuensi tiap angka
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Ubah map jadi array entri [angka, frekuensi], lalu urutkan menurun berdasarkan frekuensi
  const sortedEntries = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

  // Ambil k elemen teratas, lalu petakan kembali untuk mengambil angkanya saja
  return sortedEntries.slice(0, k).map((entry) => entry[0]);
}

// === UJI COBA TUGAS 2 (SESUAI CONTOH GAMBAR) ===
console.log("=== PENGUJIAN TUGAS 2: SOAL KLASIK ===");

// 1. Uji subArrayJumlahK
const res1 = subArrayJumlahK([1, 1, 1], 2);
console.log(
  `subArrayJumlahK([1,1,1], k=2)     => Hasil: ${res1} (Ekspektasi: 2)`,
);

// 2. Uji karakterPertamaUnik
const res2 = karakterPertamaUnik("leetcode");
console.log(
  `karakterPertamaUnik('leetcode') => Hasil: ${res2} (Ekspektasi: 0, yaitu huruf 'l')`,
);

// 3. Uji topKFrequent
const res3 = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(
  `topKFrequent([1,1,1,2,2,3], k=2) => Hasil: [${res3}] (Ekspektasi: [1, 2])`,
);
