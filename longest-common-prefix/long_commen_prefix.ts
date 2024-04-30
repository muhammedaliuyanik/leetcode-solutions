function longestCommonPrefix(strs: string[]): string {
    let counter = 0,temp="ab",temp2="abc";
    let pushCounter:number[] = []
    if(strs.length==1)
        return strs[0];

    for(let i=0; i<strs.length-1; i++){
        temp = strs[0];
        temp2 = strs[i+1];
        for(let j=0; j<temp2.length; j++)
        {
            if(temp[j]==temp2[j]){ //i ye karşılaştırığı elemanın karakter sayısından eşit ya da küçük şartı koy
            counter++; // her saydığını üzerine ekliyo
            }
            else if(counter!=0)
            break;
            else
            return "";
        }
        pushCounter.push(counter);
        counter = 0;
    }
    let minNumber = pushCounter[0]; // En küçük sayıyı ilk eleman olarak başlatın


    for (let i = 1; i < pushCounter.length; i++) {
        if (pushCounter[i] < minNumber) { // Dizideki her elemanı kontrol edin
            minNumber = pushCounter[i]; // Eğer bir eleman en küçükse, minNumber değişkenini güncelleyin
        }
    }
    let finalValue = strs[0];
    return finalValue.substring(0, minNumber);    
};