// Buat program yang menghitung rata-rata UN beserta gradenya,dengan mengisi 4 nilai yakni
// Bahasa indonesia,
// Bahasa Inggris,
//  Matematika,
// IPA

// yang di dalam program tersebut memiliki validasi yaitu
// semua nilai tersebut harus diisi dan juga untuk grade memiliki kondisi
// dengan ketentuan sebagai berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

const nilaiIndo = 80;
const nilaiInggris = 90;
const nilaiMatematika = 89;
const nilaiIpa = 69;

const rataRata = (nilaiIndo + nilaiInggris + nilaiMatematika + nilaiIpa) / 4;

if (nilaiIndo && nilaiInggris && nilaiMatematika && nilaiIpa) {
  if (rataRata >= 90 && rataRata <= 100) {
    console.log(`Rata-rata = ${rataRata} 
    Grade = A`);
  } else if (rataRata >= 80 && rataRata <= 89) {
    console.log(`Rata-rata = ${rataRata} 
    Grade = B`);
  } else if (rataRata >= 70 && rataRata <= 79) {
    console.log(`Rata-rata = ${rataRata}
    Grade = C`);
  } else if (rataRata >= 60 && rataRata <= 69) {
    console.log(`Rata-rata = ${rataRata}
    Grade = D`);
  } else if (rataRata >= 0 && rataRata <= 59) {
    console.log(`Rata-rata = ${rataRata}
    Grade = E`);
  }
} else {
  console.log("Semua nilai harus diisi!");
}
