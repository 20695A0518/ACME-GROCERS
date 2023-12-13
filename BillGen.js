function convr(n){
    var word;
    if(n<10){
        word = one_digit[n]
    }
    else if(n<20){

        word = two_digit[n - 10]
    }
    else if (n<100){
        word = tens[((n-(n%10))/10-2)] +' ' + convr(n%10)
    }
    else if(n<1000){
        word=one_digit[Math.trunc(n/100)]+' Hundred and ' +' ' + convr(n%100)
    }
    else if (n<100000){
        word = convr(parseInt(n/1000)).trim()+' Thousand'+ ' ' + convr(n%1000)
    }
    return word;
 }
function con_to_word(amount){
var n=parseInt(amount);
var word;
one_digit=[' ','One','Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
two_digit=['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
tens=['Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninty'];
if (n<0){
    word="Number is less than Zero";
}
else if (n==0){
    word="Zero";
}
else {
    word=convr(n);
 }
return word;
}
