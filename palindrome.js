function palindrome(string){

let bag ="";
for(var i=string.length; i>=0; i--){

bag+=string[i];

}
return bag;
}

palindrome("aman");