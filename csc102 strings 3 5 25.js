function strings()
{
    var string1 = document.getElementById("firstString").value;
    var string2 = document.getElementById("secondString").value;

    var str3 = string1 + string2;
   // document.getElementById("updates").innerHTML= "Concatenated string = " + str3;

   var len = str3.length;
   //document.getElementById("updates").innerHTML= "len of concat string = " + len;
   var subS = str3.substring(1,3);
   document.getElementById("updates").innerHTML= "substring of str3 (1,3) = " + subS;

    var lowerC = str3.toLowerCase();// changes to lower case
    lowerC = lowerC.replace(/qwe/g, "asd");
   //var repJC = str3.replace(/qwe/g, "asd");// replace qwe with asd
   document.getElementById("updates").innerHTML= "replace qwe with asd   " + lowerC;
// remove all alerts!
   var splitStr = string1.split("");
   alert(splitStr);
   var reverseStr = splitStr.reverse();
   alert(reverseStr);
   var joinStr = reverseStr.join("");
   alert(joinStr);
   if (string1 == joinStr)
   {
    document.getElementById("updates").innerHTML = "Palindrome";
   }
   else
    {   document.getElementById("updates").innerHTML = "nope - not a pal";
    }

}
