// 1. (Buka/Buat file tugas/tugas-1.js)

// 2. Parent Class: Produk
class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    console.log(`[ID: ${this.id}] ${this.nama} - Harga: Rp${this.harga} (Stok: ${this.stok})`);
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (this.stok - jumlah < 0) {
      console.log(`Gagal jual ${this.nama}: Stok tidak cukup!`);
    } else {
      this.stok -= jumlah;
      console.log(`Berhasil jual ${jumlah} ${this.nama}. Sisa stok: ${this.stok}`);
    }
  }
}

// 3. Child Class: ProdukDigital
class ProdukDigital extends Produk {
  constructor(id, nama, harga, stok, ukuranFile, formatFile) {
    // Memanggil constructor parent
    super(id, nama, harga, stok);
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  // Override info()
  info() {
    console.log(`[Digital] ${this.nama} | Ukuran: ${this.ukuranFile}MB | Format: ${this.formatFile}`);
  }

  download() {
    console.log(`Mengunduh ${this.nama}... File siap dalam format ${this.formatFile}.`);
  }

  // Override jual() - Produk digital tidak mengurangi stok fisik
  jual(jumlah) {
    console.log(`Berhasil jual ${jumlah} lisensi digital untuk ${this.nama}.`);
  }
}

// 4. Child Class: ProdukFisik
class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  // Override info()
  info() {
    console.log(`[Fisik] ${this.nama} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`);
  }

  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    const totalOngkir = beratKg * tarifPerKg;
    console.log(`Estimasi ongkir untuk ${this.nama}: Rp${totalOngkir}`);
    return totalOngkir;
  }
}

// 5. Buat minimal 2 instance dan masukkan ke array
const p1 = new ProdukDigital(1, "E-Book JS Dasar", 50000, 999, 15, "PDF");
const p2 = new ProdukDigital(2, "Kursus Video Node.js", 250000, 999, 1200, "MP4");
const p3 = new ProdukFisik(3, "Keyboard Mechanical", 450000, 10, 800, "30x15x4cm");
const p4 = new ProdukFisik(4, "Mouse Gaming", 200000, 0, 150, "12x6x3cm");

const daftarProduk = [p1, p2, p3, p4];

// 6. Penggunaan forEach, filter, dan map
console.log("--- (a) Semua Info Produk ---");
daftarProduk.forEach(p => p.info());

console.log("\n--- (b) Produk yang Tersedia ---");
const produkTersedia = daftarProduk.filter(p => p.tersedia());
produkTersedia.forEach(p => console.log(`- ${p.nama} (Stok: ${p.stok})`));

console.log("\n--- (c) Array Nama Produk Saja ---");
const namaSaja = daftarProduk.map(p => p.nama);
console.log(namaSaja);

// Uji coba tambahan untuk validasi
console.log("\n--- Uji Coba Method Tambahan ---");
p1.download();
p3.hitungOngkir(10000);
p3.jual(2);  // Stok berkurang
p4.jual(1);  // Gagal karena stok 0