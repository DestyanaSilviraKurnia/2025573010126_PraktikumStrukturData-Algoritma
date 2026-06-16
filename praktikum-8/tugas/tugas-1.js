// tugas/tugas-1.js

class HashMapLinearProbing {
  constructor(capacity = 5) {
    // Kapasitas awal sengaja diperkecil agar mudah menguji resize otomatis
    this.capacity = capacity;
    this.size = 0;
    this.table = new Array(this.capacity).fill(null);

    // Penanda khusus untuk data yang dihapus (Tombstone marker) sesuai poin 4
    this.TOMBSTONE = { deleted: true };
  }

  // Fungsi hash sederhana berbasis ASCII string
  _hash(key) {
    let hashValue = 0;
    const stringKey = String(key);
    for (let i = 0; i < stringKey.length; i++) {
      hashValue = (hashValue << 5) - hashValue + stringKey.charCodeAt(i);
      hashValue |= 0; // Mengubah ke 32-bit integer
    }
    return Math.abs(hashValue) % this.capacity;
  }

  // Mendapatkan nilai load factor saat ini
  _getLoadFactor() {
    return this.size / this.capacity;
  }

  // Poin 5: Implementasikan resize otomatis jika load factor > 0.7
  _resize() {
    console.log(
      `\n[RESIZE] Load factor > 0.7. Kapasitas diperbesar: ${this.capacity} -> ${this.capacity * 2}`,
    );

    const oldTable = this.table;
    this.capacity = this.capacity * 2;
    this.table = new Array(this.capacity).fill(null);
    this.size = 0; // Di-reset karena method set() di bawah akan menghitung ulang size

    // Rehash semua elemen lama ke tabel baru
    for (const pair of oldTable) {
      if (pair !== null && pair !== this.TOMBSTONE) {
        this.set(pair.key, pair.value);
      }
    }
  }

  // Memasukkan atau memperbarui data
  set(key, value) {
    if (this._getLoadFactor() > 0.7) {
      this._resize();
    }

    let index = this._hash(key);
    let firstTombstoneIndex = -1;

    // Poin 3: Saat collision, cari slot kosong berikutnya (modulo kapasitas)
    for (let i = 0; i < this.capacity; i++) {
      const currentIndex = (index + i) % this.capacity;
      const currentPair = this.table[currentIndex];

      // Jika ketemu slot kosong murni
      if (currentPair === null) {
        // Gunakan index tombstone yang sempat dilewati (jika ada) untuk optimasi slot
        const targetIndex =
          firstTombstoneIndex !== -1 ? firstTombstoneIndex : currentIndex;
        this.table[targetIndex] = { key, value };
        this.size++;
        return true;
      }

      // Jika menemui tombstone, catat indeksnya dan lanjutkan pencarian (tidak boleh berhenti)
      if (currentPair === this.TOMBSTONE) {
        if (firstTombstoneIndex === -1) {
          firstTombstoneIndex = currentIndex;
        }
        continue;
      }

      // Jika key sudah ada, update nilainya
      if (currentPair.key === key) {
        currentPair.value = value;
        return true;
      }
    }

    return false;
  }

  // Mengambil data (Search)
  get(key) {
    let index = this._hash(key);

    for (let i = 0; i < this.capacity; i++) {
      const currentIndex = (index + i) % this.capacity;
      const currentPair = this.table[currentIndex];

      if (currentPair === null) return undefined; // Rantai linear probing putus, data tidak ada
      if (currentPair === this.TOMBSTONE) continue; // Lewati tombstone, lanjutkan pencarian

      if (currentPair.key === key) {
        return currentPair.value;
      }
    }
    return undefined;
  }

  // Poin 4: Untuk delete, gunakan tombstone marker
  delete(key) {
    let index = this._hash(key);

    for (let i = 0; i < this.capacity; i++) {
      const currentIndex = (index + i) % this.capacity;
      const currentPair = this.table[currentIndex];

      if (currentPair === null) return false; // Data tidak ditemukan
      if (currentPair === this.TOMBSTONE) continue;

      if (currentPair.key === key) {
        this.table[currentIndex] = this.TOMBSTONE; // Ditandai tombstone, bukan null
        this.size--;
        return true;
      }
    }
    return false;
  }

  // Fungsi pembantu untuk cetak visual tabel di terminal
  printVisualTable() {
    console.log("Struktur Tabel:");
    this.table.forEach((slot, idx) => {
      if (slot === null) console.log(`  [${idx}]: null`);
      else if (slot === this.TOMBSTONE) console.log(`  [${idx}]: <TOMBSTONE>`);
      else
        console.log(`  [${idx}]: Key="${slot.key}" => Value="${slot.value}"`);
    });
    console.log(`Load Factor Saat Ini: ${this._getLoadFactor().toFixed(2)}\n`);
  }
}

// === UJI COBA TUGAS 1 ===
console.log("=== PENGUJIAN TUGAS 1: LINEAR PROBING ===");
const map = new HashMapLinearProbing(5);

console.log("1. Mengisi data awal...");
map.set("id_1", "Andi");
map.set("id_2", "Budi");
map.printVisualTable();

console.log("2. Menghapus data 'id_1' (Harus berubah jadi tombstone)...");
map.delete("id_1");
map.printVisualTable();

console.log("3. Menambahkan data baru untuk memicu resize otomatis (> 0.7)...");
map.set("id_3", "Cici");
map.set("id_4", "Dedi");
map.set("id_5", "Eka"); // Memicu resize karena load factor melewati batas
map.printVisualTable();

console.log("4. Mengambil data 'id_3':", map.get("id_3"));
