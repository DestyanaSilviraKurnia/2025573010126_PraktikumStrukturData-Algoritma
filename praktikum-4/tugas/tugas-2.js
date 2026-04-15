// Implementasi Class Stack
class Stack {
  constructor() {
    this.items = [];
  }

  // Menambah elemen ke tumpukan
  push(element) {
    this.items.push(element);
  }

  // Mengambil elemen terakhir dari tumpukan
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Mengecek apakah stack kosong
  isEmpty() {
    return this.items.length === 0;
  }
}

// Function cekKurungSeimbang
function cekKurungSeimbang(ekspresi) {
  const tumpukan = new Stack();

  for (let i = 0; i < ekspresi.length; i++) {
    const karakter = ekspresi[i];

    // Jika ketemu kurung buka, masukkan ke stack
    if (karakter === '(' || karakter === '[' || karakter === '{') {
      tumpukan.push(karakter);
    } 
    // Jika ketemu kurung tutup
    else if (karakter === ')' || karakter === ']' || karakter === '}') {
      // Jika stack kosong saat mau pop, berarti tidak seimbang
      if (tumpukan.isEmpty()) {
        return false;
      }

      const top = tumpukan.pop();
      
      // (Opsional) Validasi kesesuaian jenis kurung
      if (
        (karakter === ')' && top !== '(') ||
        (karakter === ']' && top !== '[') ||
        (karakter === '}' && top !== '{')
      ) {
        return false;
      }
    }
  }

  // Di akhir, jika stack kosong berarti seimbang
  return tumpukan.isEmpty();
}

// Pengujian dengan berbagai string
const testCases = [
  '(2 + 3) * (4 - 1)',
  '([a + b)]',
  ')(',
  '((()))',
  '{[()]}'
];

console.log("--- Hasil Pengujian Keseimbangan Kurung ---");
testCases.forEach((ekspresi) => {
  const hasil = cekKurungSeimbang(ekspresi);
  console.log(`'${ekspresi}' -> Seimbang: ${hasil}`);
});
