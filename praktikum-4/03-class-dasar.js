class Mahasiswa {
    constructor(nama, nim, jurusan){
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.nilai = [];
    }

    tambahNilai(nilai) {
        this.nilai.push(nilai);
    }

    hitungRataRata() {
        if (this.nilai.length === 0) return 0;
        const total = this.nilai.reduce((sum, n) => sum + n, 0);
        return(total / this.nilai.length). toFixed(2);
    }

    getInfo() {
        return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`;
    }
}

const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika');
const mhs2 = new Mahasiswa('Siti Rahayu', '2021002', 'Sistem Informasi');
const mhs3 = new Mahasiswa('Ahmad Fauzi', '2021003', 'Informatika');

mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78);
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95);
mhs3.tambahNilai(70); mhs3.tambahNilai(75);
console.log('=== Data Mahasiswa ===');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());

class Kalkulator {
    static tambah(a, b) { return a + b; }
    static kurang(a, b) { return a - b; }
    static kali(a, b) { return a * b; }
    static bagi(a, b) {
        if (b === 0) return 'Error: bagi nol';
        return a / b;
    }
}
console.log('\n=== Static Method ===');
console.log('10 + 5 =', Kalkulator.tambah(10, 5));
console.log('10 * 5 =', Kalkulator.kali(10, 5));
console.log('10 / 0 =', Kalkulator.bagi(10, 0));

class Lingkaran {
    constructor(jariJari) {
        this._jariJari = jariJari; 
    }

    get jariJari() { return this._jariJari; }
    get luas() { return (Math.PI * this._jariJari ** 2).toFixed(2); }
    get keliling() { return (2 * Math.PI * this._jariJari).toFixed(2); }

set jariJari(nilai) {
    if (nilai <= 0) throw new Error('Jari-jari harus positif!');
    this._jariJari = nilai;
    }
}

console.log('\n=== Getter & Setter ===');
const l = new Lingkaran(7);
console.log('Jari-jari:', l.jariJari);
console.log('Luas :', l.luas);
console.log('Keliling :', l.keliling);
l.jariJari = 10;
console.log('Setelah diubah - Luas:', l.luas);

console.log('\n=== LATIHAN 3 : Class BankAccount ===');

class BankAccount {
  constructor(namaPemilik, saldoAwal = 0) {
    this.namaPemilik = namaPemilik;
    this.saldo = saldoAwal;
  }

  setor(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah setoran harus lebih dari 0.");
    } else {
      this.saldo += jumlah;
      console.log(`Berhasil setor Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
    }
  }

  tarik(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah tarikan harus lebih dari 0.");
    } else if (jumlah > this.saldo) {
      console.log("Error: Saldo tidak mencukupi.");
    } else {
      this.saldo -= jumlah;
      console.log(`Berhasil tarik Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
    }
  }

  cekSaldo() {
    console.log(`Pemilik: ${this.namaPemilik} | Saldo: Rp${this.saldo}`);
  }

  static transfer(akunAsal, akunTujuan, jumlah) {
    if (jumlah <= 0) {
      console.log("Error: Jumlah transfer harus lebih dari 0.");
      return;
    }
    
    if (akunAsal.saldo >= jumlah) {
      akunAsal.saldo -= jumlah;
      akunTujuan.saldo += jumlah;
      console.log(`Transfer Rp${jumlah} dari ${akunAsal.namaPemilik} ke ${akunTujuan.namaPemilik} BERHASIL.`);
    } else {
      console.log(`Transfer GAGAL: Saldo ${akunAsal.namaPemilik} tidak cukup.`);
    }
  }
}

const akunDesty = new BankAccount("Desty", 500000);
const akunIza = new BankAccount("Iza", 100000);

akunDesty.cekSaldo();
akunIza.cekSaldo();

console.log("--- Uji Setor & Tarik ---");
akunDesty.setor(200000);  
akunDesty.setor(-5000);   
akunIza.tarik(150000);  
akunIza.tarik(50000);  

console.log("--- Uji Transfer ---");

BankAccount.transfer(akunDesty, akunIza, 300000); 
BankAccount.transfer(akunDesty, akunIza, 1000000); 

akunDesty.cekSaldo();
akunIza.cekSaldo();