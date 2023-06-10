var arr = [];

document.getElementById("add").onclick = function(){
    var number = +document.getElementById("number").value;
    var all = document.getElementById("all");

    arr.push(number);
    console.log(arr);

    all.innerHTML = all.innerHTML + number + ",";
    console.log(all.innerHTML);
}
//Bài 1
document.getElementById("1").onclick = function(){
    var rs1 = document.getElementById("rs1");

    var sum1 = 0;
    for(var i = 0; i < arr.length ; i++)
    {
        if(arr[i] > 0)
        {
            sum1 += arr[i];
        }
    }
     rs1.innerHTML = sum1;
}

//Bài 2
document.getElementById("2").onclick = function(){
    var rs2 = document.getElementById("rs2");

    var sum2 = 0;
    for(var i = 0; i < arr.length ; i++)
    {
        if(arr[i] > 0)
        {
            sum2++;
        }
    }
     rs2.innerHTML = sum2;
}

//Bài 3
document.getElementById("3").onclick = function(){
    var rs3 = document.getElementById("rs3");

    var min = arr[0];
    for(var i = 1; i < arr.length ; i++)
    {
        if(arr[i] < min)
        {
            min = arr[i];
        }
    }
     rs3.innerHTML = min;
}

//Bài 4
document.getElementById("4").onclick = function(){
    var rs4 = document.getElementById("rs4");

    var min1;
    for(var i = 0; i < arr.length ; i++)
    {
        if(arr[i] > 0)
        {
            min1 = arr[i];
            break;
        }
    }

    for(var i = 0; i < arr.length ; i++)
    {
        if(arr[i] > 0 && arr[i] < min1)
        {
            min1 = arr[i];
        }
    }

     rs4.innerHTML = min1;
}

//Bài 5
document.getElementById("5").onclick = function(){
    var rs5 = document.getElementById("rs5");

    var sum5 = -1;
    for(var i = arr.length - 1; i >= 0 ; i--)
    {
        if(arr[i] % 2 === 0)
        {
            sum5 = arr[i];
            break;
        }
    }

     rs5.innerHTML = sum5;
}

//Bài 6
document.getElementById("6").onclick = function(){
    var site1 = +document.getElementById("site1").value;
    var site2 = +document.getElementById("site2").value;
    var all6 = document.getElementById("all6");


    var arr6 = arr;
    var tmp = arr6[site1];

    arr6[site1] = arr6[site2];
    arr6[site2] = tmp;

    for(var i = 0; i<arr6.length ; i++){
        all6.innerHTML = all6.innerHTML +  arr6[i] + ",";
    }
}

//Bài 7
document.getElementById("7").onclick = function(){
    var all7 = document.getElementById("all7");


    var arr7 = arr;

    arr7.sort(function(a, b){return a - b});;
    for(var i = 0; i<arr7.length ; i++){
        all7.innerHTML = all7.innerHTML +  arr7[i] + ",";
    }
}


//Bài 8
var check_SNT = function kiem_tra_snt(n)
{
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    if (flag == true){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById("8").onclick = function(){
    var rs8 = document.getElementById("rs8");

    var snt = -1;
    for(var i = 0; i < arr.length ; i++)
    {
        if(check_SNT(arr[i]) === true)
        {
            snt = arr[i];
            break;
        }
    }
     rs8.innerHTML = snt;
}

//Bài 9
document.getElementById("9").onclick = function(){
    var rs9 = document.getElementById("rs9");

    var count = 0;
    for(var i = 0; i < arr.length ; i++)
    {
        if(Number.isInteger(arr[i]) === true)
        {
            count ++;
        }
    }
     rs9.innerHTML = count;
}

//Bài 10
document.getElementById("10").onclick = function(){
    var rs10 = document.getElementById("rs10");
    var rs11= document.getElementById("rs11");
    var rs12 = document.getElementById("rs12");

    var count1 = 0;
    var count2 = 0;

    for(var i = 0; i < arr.length ; i++)
    {
        if(arr[i] < 0)
        {
            count1 ++;
        }
    }

    for(var i = 0; i < arr.length ; i++)
    {
        if(arr[i] > 0)
        {
            count2 ++;
        }
    }
     rs10.innerHTML = count1;
     rs11.innerHTML = count2;
     if(count1 > count2)
     {
        rs12.innerHTML = "Số ấm > số dương"
     }  
     else if(count1 < count2) 
     {
        rs12.innerHTML = "Số ấm < số dương"
     }
     else
     {
        rs12.innerHTML = "Số ấm = số dương"
     }

     
}
