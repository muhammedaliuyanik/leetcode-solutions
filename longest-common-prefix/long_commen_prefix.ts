function longestCommonPrefix(strs: string[]): string {
    // dizi g�ndercek dizi i�indeki kelimelerin ilk harfleri ayn� olanlar� bul.
    //kelime kelime baks�n
    let counter = 0,temp="ab",temp2="abc";
    let pushCounter:number[] = []
    if(strs.length==1)
        return strs[0];

    for(let i=0; i<strs.length-1; i++){
        temp = strs[0];
        temp2 = strs[i+1];
        for(let j=0; j<temp2.length; j++)
        {
            if(temp[j]==temp2[j]){ //i ye kar��la�t�r��� eleman�n karakter say�s�ndan e�it ya da k���k �art� koy
            counter++;// her sayd���n� �zerine ekliyo
            }
            else if(counter!=0)
            break;
            else
            return "";
        }
        pushCounter.push(counter);
        counter = 0;
    }
    let minNumber = pushCounter[0]; // En k���k say�y� ilk eleman olarak ba�lat�n

    for (let i = 1; i < pushCounter.length; i++) {
        if (pushCounter[i] < minNumber) { // Dizideki her eleman� kontrol edin
            minNumber = pushCounter[i]; // E�er bir eleman en k���kse, minNumber de�i�kenini g�ncelleyin
        }
    }
    let finalValue = strs[0];
    return finalValue.substring(0, minNumber);    
};