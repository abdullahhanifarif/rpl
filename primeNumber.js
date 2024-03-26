// Fungsi untuk menentukan apakah suatu bilangan prima atau tidak
function isPrime(number) {
    //memastikan tipe data inputan adalah number
    if (typeof number === 'number') {
        // Bilangan 1 dan 0 bukan bilangan prima
        if (number <= 1) {
            return false;
        }
        // Loop untuk memeriksa pembagi dari 2 hingga akar kuadrat dari bilangan
        for (let i = 2; i <= Math.sqrt(number); i++) {
            // Jika ditemukan pembagi, bilangan bukan prima
            if (number % i === 0) {
                return false;
            }
        }
        // Jika tidak ditemukan pembagi, bilangan prima
        return true;
    } else {
        return "it's not a number";
    }
}

module.exports = isPrime;
