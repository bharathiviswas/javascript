function Validation() {
    var str1 = document.getElementById("one").value;
    var a = /^[a-zA-z]{2,50}$/;
    if (a.test(str1)) {
    }
    else {
        if (str1.trim() == "") {
            document.getElementById("one").style.border = "1px solid red";
            document.getElementById("first").style.visibility = "visible";
            document.getElementById("first").innerHTML = "Please enter your Name"
        }
        else {
            document.getElementById("one").style.border = "1px solid red";
            document.getElementById("first").style.visibility = "visible";
        }
    }
    var str2 = document.getElementById("two").value;
    var b = /^([a-z 0-9\.-]+)@([a-z A-Z 0-9 _]+).([a-z]+)(.[a-z]{2,8})?$/;
    if (b.test(str2)) {

    }
    else {
        if (str2.trim() == "") {
            document.getElementById("two").style.border = "1px solid red";
            document.getElementById("second").style.visibility = "visible";
            document.getElementById("second").innerHTML = "Please enter your EmailId"
        }
        else {
            document.getElementById("two").style.border = "1px solid red";
            document.getElementById("second").style.visibility = "visible";
        }
    }
    var str3 = document.getElementById("three").value;
    var c = /^[\w \.-]{3,25}$/;
    if (c.test(str3)) {

    }
    else {
        if (str3.trim() == "") {
            document.getElementById("three").style.border = "1px solid red";
            document.getElementById("third").style.visibility = "visible";
            document.getElementById("third").innerHTML = "Please enter your Address"
        }
        else {
            document.getElementById("three").style.border = "1px solid red";
            document.getElementById("third").style.visibility = "visible";
        }
    }
    var str3i = document.getElementById("three1").value;
    var ci = /^[a-z A-Z]{3,25}$/;
    if (ci.test(str3i)) {

    }
    else {
        if (str3i.trim() == "") {
            document.getElementById("three1").style.border = "1px solid red";
            document.getElementById("third1").style.visibility = "visible";
            document.getElementById("third1").innerHTML = "Please enter your City"
        }
        else {
            document.getElementById("three1").style.border = "1px solid red";
            document.getElementById("third1").style.visibility = "visible";
        }
    }
    var str4 = document.getElementById("four").value;
    var d = /^[a-z A-Z 0-9 \.-]{3,25}$/;
    if (d.test(str4)) {

    }
    else {
        if (str4.trim() == "") {
            document.getElementById("four").style.border = "1px solid red";
            document.getElementById("fourth").style.visibility = "visible";
            document.getElementById("fourth").innerHTML = "Please enter your Address"
        }
        else {
            document.getElementById("four").style.border = "1px solid red";
            document.getElementById("fourth").style.visibility = "visible";
        }
    }
    var strcity = document.getElementById("cityname").value;
    if (ci.test(strcity)) {

    }
    else {
        if (str3i.trim() == "") {
            document.getElementById("cityname").style.border = "1px solid red";
            document.getElementById("city").style.visibility = "visible";
            document.getElementById("city").innerHTML = "Please enter your City"
        }
        else {
            document.getElementById("cityname").style.border = "1px solid red";
            document.getElementById("city").style.visibility = "visible";
        }
    }
    var str11 = document.getElementById("rone").value;
    if (a.test(str11)) {

    }
    else {
        if (str1.trim() == "") {
            document.getElementById("rone").style.border = "1px solid red";
            document.getElementById("rfirst").style.visibility = "visible";
            document.getElementById("rfirst").innerHTML = "Please enter your Father Name"
        }
        else {
            document.getElementById("rone").style.border = "1px solid red";
            document.getElementById("rfirst").style.visibility = "visible";
        }
    }
    var str21 = document.getElementById("rtwo").value
    var date = /^([0-3][0-9]+)-([0-1][0-9]+)-([0-9]{1,4})$/;
    if (date.test(str21)) {

    }
    else {
        if (str1.trim() == "") {
            document.getElementById("rtwo").style.border = "1px solid red";
            document.getElementById("rsecond").style.visibility = "visible";
            document.getElementById("rsecond").innerHTML = "Please enter your Date of Birth"
        }
        else {
            document.getElementById("rtwo").style.border = "1px solid red";
            document.getElementById("rsecond").style.visibility = "visible";
        }
    }
    var str22 = document.getElementById("rtwotwo").value
    var no = /^[6-9][0-9]{9}$/;
    if (no.test(str22)) {

    }
    else {
        if (str1.trim() == "") {
            document.getElementById("rtwotwo").style.border = "1px solid red";
            document.getElementById("rsecondsecond").style.visibility = "visible";
            document.getElementById("rsecondsecond").innerHTML = "Please enter your Mobile Number"
        }
        else {
            document.getElementById("rtwotwo").style.border = "1px solid red";
            document.getElementById("rsecondsecond").style.visibility = "visible";
        }
    }
    var str31 = document.getElementById("rthree").value
    if (d.test(str31)) {

    }
    else {
        if (str31.trim() == "") {
            document.getElementById("rthree").style.border = "1px solid red";
            document.getElementById("rthird").style.visibility = "visible";
            document.getElementById("rthird").innerHTML = "Please enter your Address"
        }
        else {
            document.getElementById("rthree").style.border = "1px solid red";
            document.getElementById("rthird").style.visibility = "visible";
        }
    }
    var str41 = document.getElementById("rfour").value;
    var pincode = /^[1-9][0-9]{5}$/
    if (pincode.test(str41)) {

    }
    else {
        if (str41.trim() == "") {
            document.getElementById("rfour").style.border = "1px solid red";
            document.getElementById("rfourth").style.visibility = "visible";
            document.getElementById("rfourth").innerHTML = "Please enter your Pincode"
        }
        else {
            document.getElementById("rfour").style.border = "1px solid red";
            document.getElementById("rfourth").style.visibility = "visible";
        }
    }
    var str51 = document.getElementById("rfive").value
    if (d.test(str51)) {

    }
    else {
        if (str51.trim() == "") {
            document.getElementById("rfive").style.border = "1px solid red";
            document.getElementById("rfifth").style.visibility = "visible";
            document.getElementById("rfifth").innerHTML = "Please enter your Address"
        }
        else {
            document.getElementById("rfive").style.border = "1px solid red";
            document.getElementById("rfifth").style.visibility = "visible";
        }
    }
    var str61 = document.getElementById("rsix").value;
    if (pincode.test(str61)) {

    }
    else {
        if (str61.trim() == "") {
            document.getElementById("rsix").style.border = "1px solid red";
            document.getElementById("rsixth").style.visibility = "visible";
            document.getElementById("rsixth").innerHTML = "Please enter your Pincode"
        }
        else {
            document.getElementById("rsix").style.border = "1px solid red";
            document.getElementById("rsixth").style.visibility = "visible";
        }
    }

}
function Address()
{
    var add1=document.getElementById("three").value;
    var add2=document.getElementById("rthree").value;
    var add3=document.getElementById("threei").value;
    document.getElementById("four").innerHTML=add1;
    document.getElementById("rfive").innerHTML=add2;
    document.getElementById("cityname").innerHTML=add3;
    
}