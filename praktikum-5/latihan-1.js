// --- Fungsi-fungsi dengan Big O ---

// O(1)
function fungsiA(n) {
    return n * 2;
}

// O(n^2)
function fungsiB(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // operasi konstan
        }
    }
}

// O(log n)
function fungsiC(n) {
    for (let i = 1; i < n; i *= 2) {
        // operasi konstan
    }
}

// O(n^3) - Misal arr memiliki panjang n
function fungsiD(n) {
    const arr = new Array(n).fill(0);
    arr.forEach(x => arr.forEach(y => arr.forEach(z => {
        // operasi konstan
    })));
}

// --- Fungsi Pengukur Waktu ---

function hitungKompleksitas(n, fn) {
    const start = Date.now();
    fn(n);
    const end = Date.now();
    console.log(`Waktu eksekusi untuk n=${n}: ${end - start} ms`);
}

// --- Menjalankan Pengukuran ---

const n = 1000;

console.log("Pengukuran Waktu:");
hitungKompleksitas(n, fungsiA);
hitungKompleksitas(n, fungsiB);
hitungKompleksitas(n, fungsiC);
hitungKompleksitas(n, fungsiD);