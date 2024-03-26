const isPrime = require('./primeNumber');

describe('Pengecekan angka yang merupakan Bilangan Prima', () => {
    test('2, 3, 7 adalah bilangan prima', () => {
        //Given
        const primeNumber1 = 2;
        const primeNumber2 = 3;
        const primeNumber3 = 7;

        //When
        const result1 = isPrime(primeNumber1);
        const result2 = isPrime(primeNumber2);
        const result3 = isPrime(primeNumber3);

        //Then
        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });
});

describe('Pengecekan angka yang bukan merupakan Bilangan Prima', () =>{
    test('4 dan 25 bukan bilangan prima', () => {
        //Given
        const primeNumber1 = 4;
        const primeNumber2 = 25;

        //When
        const result1 = isPrime(primeNumber1);
        const result2 = isPrime(primeNumber2);

        //Then
        expect(result1).toBe(false);
        expect(result2).toBe(false);
    });
});

describe('Pengecekan tipe data', () => {
    test('tiga adalah bilangan prima', () => {
        //Given
        const primeNumber = 'tiga';

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe(true);
    });

    test('tiga adalah bukan angka)', () => {
        //Given
        const primeNumber = 'tiga';

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe("it's not a number");
    });
});
