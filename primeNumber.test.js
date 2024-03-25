const isPrime = require('./primeNumber');


describe('Pengecekan Bilangan Prima', () => {
    test('2 adalah bilangan prima', () => {
        //Given
        const primeNumber = 2;

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe(true);
    });
    test('3 adalah bilangan prima', () => {
        //Given
        const primeNumber = 3;

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe(true);
    });
    test('4 bukan bilangan prima', () => {
        //Given
        const primeNumber = 4;

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe(false);
    });
    test('7 adalah bilangan prima', () => {
        //Given
        const primeNumber = 7;

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe(true);
    });
    test('25 bukan bilangan prima', () => {
        //Given
        const primeNumber = 25;

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe(false);
    });
});


describe('Pengecekan tipe data', () => {
    // test('tiga adalah bilangan prima', () => {
    //     //Given
    //     const primeNumber = 'tiga';

    //     //When
    //     const result = isPrime(primeNumber);

    //     //Then
    //     expect(result).toBe(true);
    // });

    test('tiga adalah string(inputan salah)', () => {
        //Given
        const primeNumber = 'tiga';

        //When
        const result = isPrime(primeNumber);

        //Then
        expect(result).toBe('inputannya salah');
    });
});
