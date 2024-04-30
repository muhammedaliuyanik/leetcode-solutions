function longestCommonPrefix(strs: string[]): string {
    // dizi göndercek dizi içindeki kelimelerin ilk harfleri ayný olanlarý bul.
    //kelime kelime baksýn
    let counter = 0,temp="ab",temp2="abc";
    let pushCounter:number[] = []
    if(strs.length==1)
        return strs[0];

    for(let i=0; i<strs.length-1; i++){
        temp = strs[0];
        temp2 = strs[i+1];
        for(let j=0; j<temp2.length; j++)
        {
            if(temp[j]==temp2[j]){ //i ye karþýlaþtýrýðý elemanýn karakter sayýsýndan eþit ya da küçük þartý koy
            counter++;// her saydýðýný üzerine ekliyo
            }
            else if(counter!=0)
            break;
            else
            return "";
        }
        pushCounter.push(counter);
        counter = 0;
    }
    let minNumber = pushCounter[0]; // En küçük sayýyý ilk eleman olarak baþlatýn

    for (let i = 1; i < pushCounter.length; i++) {
        if (pushCounter[i] < minNumber) { // Dizideki her elemaný kontrol edin
            minNumber = pushCounter[i]; // Eðer bir eleman en küçükse, minNumber deðiþkenini güncelleyin
        }
    }
    let finalValue = strs[0];
    return finalValue.substring(0, minNumber);    
};