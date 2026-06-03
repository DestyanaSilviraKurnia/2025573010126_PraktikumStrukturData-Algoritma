// =========================================================================
// 1. Implementasi Queue Berbasis Linked List (Materi Modul 6 & 7)
// =========================================================================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Menunjuk ke depan antrean (Front)
    this.tail = null; // Menunjuk ke belakang antrean (Rear)
    this.length = 0;
  }

  // enqueue: Menambahkan elemen ke akhir antrean
  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // dequeue: Mengambil/menghapus elemen dari depan antrean
  dequeue() {
    if (this.isEmpty()) return null;
    const removedNode = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.length--;
    return removedNode.data;
  }

  // Memeriksa apakah antrean kosong
  isEmpty() {
    return this.length === 0;
  }

  // Mendapatkan ukuran antrean
  size() {
    return this.length;
  }

  // Mengonversi linked list ke array (hanya untuk visualisasi cetak)
  getElements() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

// =========================================================================
// 2. Class Pasien (Sesuai Soal No. 2)
// =========================================================================
class Pasien {
  constructor(id, nama, prioritas) {
    this.id = id;
    this.nama = nama;
    this.prioritas = prioritas; // 'darurat' atau 'biasa'

    // Mencatat waktu pendaftaran saat objek dibuat
    const sekarang = new Date();
    this.waktuDaftar = sekarang.toLocaleTimeString("id-ID");
  }
}

// =========================================================================
// 3. Class AntrianRS (Sesuai Soal No. 3, 4, 5, 6)
// =========================================================================
class AntrianRS {
  constructor() {
    // No. 3: Dua Queue terpisah menggunakan Linked List
    this.antrianDarurat = new Queue();
    this.antrianBiasa = new Queue();
  }

  // No. 4: Method daftar(pasien)
  daftar(pasien) {
    if (pasien.prioritas === "darurat") {
      this.antrianDarurat.enqueue(pasien);
      console.log(
        `[DAFTAR] Pasien DARURAT masuk: ${pasien.nama} (${pasien.id})`,
      );
    } else if (pasien.prioritas === "biasa") {
      this.antrianBiasa.enqueue(pasien);
      console.log(`[DAFTAR] Pasien Biasa masuk: ${pasien.nama} (${pasien.id})`);
    } else {
      console.log(`[ERROR] Prioritas "${pasien.prioritas}" tidak valid.`);
    }
  }

  // No. 5: Method layani()
  layani() {
    let pasienDilayani = null;

    // Aturan: Selalu cek dan layani pasien darurat dulu
    if (!this.antrianDarurat.isEmpty()) {
      pasienDilayani = this.antrianDarurat.dequeue();
      console.log(`\n>> [MELAYANI] Menangani Pasien *DARURAT*`);
    }
    // Jika antrean darurat kosong, baru layani antrean biasa
    else if (!this.antrianBiasa.isEmpty()) {
      pasienDilayani = this.antrianBiasa.dequeue();
      console.log(`\n>> [MELAYANI] Menangani Pasien Biasa`);
    } else {
      console.log(`\n>> [INFO] Semua antrean kosong. Tidak ada pasien.`);
      return;
    }

    // Tampilkan info detail pasien yang dilayani
    console.log(`   ID           : ${pasienDilayani.id}`);
    console.log(`   Nama         : ${pasienDilayani.nama}`);
    console.log(`   Waktu Daftar : ${pasienDilayani.waktuDaftar}`);
  }

  // No. 6: Method tampilkanAntrian()
  tampilkanAntrian() {
    console.log(`\n================ STATUS ANTREAN RS ================`);

    // Tampilkan daftar nama di Antrean Darurat
    const daruratList = this.antrianDarurat.getElements().map((p) => p.nama);
    console.log(`Antrean Darurat [Total: ${this.antrianDarurat.size()}]:`);
    console.log(
      daruratList.length > 0
        ? `  Front -> [${daruratList.join(" | ")}] -> Rear`
        : `  (Kosong)`,
    );

    // Tampilkan daftar nama di Antrean Biasa
    const biasaList = this.antrianBiasa.getElements().map((p) => p.nama);
    console.log(`Antrean Biasa   [Total: ${this.antrianBiasa.size()}]:`);
    console.log(
      biasaList.length > 0
        ? `  Front -> [${biasaList.join(" | ")}] -> Rear`
        : `  (Kosong)`,
    );

    console.log(`====================================================`);
  }
}

// =========================================================================
// 4. Simulasi Sistem (Sesuai Soal No. 7)
// =========================================================================
const rs = new AntrianRS();

// Kumpulan nama sampel untuk diacak
const poolNama = [
  "Andi",
  "Budi",
  "Chandra",
  "Dewi",
  "Ethan",
  "Fanya",
  "Gilang",
  "Hana",
  "Indra",
  "Julia",
];
const opsiPrioritas = ["darurat", "biasa"];

console.log("=== MEMULAI SIMULASI PENDAFTARAN 10 PASIEN ACAK ===");

// Loop untuk mendaftarkan 10 pasien acak
for (let i = 1; i <= 10; i++) {
  const nama = poolNama[i - 1];
  // Mengacak status antara 'darurat' atau 'biasa'
  const prioritas =
    opsiPrioritas[Math.floor(Math.random() * opsiPrioritas.length)];
  const id = `PS-${String(i).padStart(3, "0")}`; // Format: PS-001, PS-002...

  const pasienBaru = new Pasien(id, nama, prioritas);
  rs.daftar(pasienBaru);
}

// Cetak status antrean setelah semua terdaftar
rs.tampilkanAntrian();

console.log("\n=== MEMULAI PROSES PELAYANAN SATU PER SATU ===");
// Eksekusi pelayanan sebanyak 10 kali sampai antrean habis
for (let i = 1; i <= 10; i++) {
  rs.layani();
}

// Cetak status akhir untuk memastikan antrean sudah kosong semua
rs.tampilkanAntrian();
