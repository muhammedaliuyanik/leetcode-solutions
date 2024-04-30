function romanToInt(s: string): number {

    const romanNumerals: { [key: string]: number } = {
        "I": 1, "V": 5, "X": 10, "L": 50,
        "C": 100, "D": 500, "M": 1000
    };

    let result: number = 0;

    // Roma rakamlarını dönüştürür
    for (let i = 0; i < s.length; i++) {
        const currentNumeral: number = romanNumerals[s[i]];
        const nextNumeral: number = romanNumerals[s[i + 1]];

        // Eğer bir sonraki rakam varsa ve mevcut rakam bir sonraki rakamdan küçükse, bu durumda bir sonraki rakamı mevcut rakamdan çıkarırız
        if (nextNumeral && currentNumeral < nextNumeral) {
            result += nextNumeral - currentNumeral;
            i++; // İki rakamı birlikte ele aldığımız için bir sonraki rakamı da atlarız
        } else {
            result += currentNumeral;
        }
    }

    return result;

    return 0;
};