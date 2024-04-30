function isPalindrome(x: number): boolean {

    let loopSize;
    let minusControl = 0;

    if(x < 0)
        minusControl == 1;

    if(minusControl == 1)
        x = -(x);

    let numberAsString: string = x.toString(); 
    let numberState = x % 2;

    if(numberState == 0) //sayý çift karakterliyse
        loopSize = numberAsString.length/2;
    else{ //sayý tek karakterliyse
        let temp = numberAsString.length+1;
        loopSize=(temp/2);
    }

    let lastItem = numberAsString.length-1;
    for(let i =0; i<loopSize; i++){
        {
            if(numberAsString[i] != numberAsString[lastItem]){
                console.log("palindrome deðil!")
                return false;
            }
            if(lastItem==i)
                break;
            lastItem--;
        }
    }
    return true;
};