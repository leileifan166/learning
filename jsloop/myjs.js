var arr = ['red','green','blue'];
/* arr.length = 5;
console.log(arr); */

arr[3] = 'pink';
console.log(arr);
console.log(arr[3]);

var arr1 = [];
for(i = 0; i < 10; i++){
    arr1[i] = i + 1;
}
console.log(arr1);

/* var newarr =[];
var j = 0;
var arr2 = [2,0,6,1,77,0,52,0,25,7];
for(i = 0; i < arr2.length; i++){
    if(arr2[i] > 10){
        newarr[j] = arr2[i];
        j++;
    }
}
console.log(newarr);
 */


var newarr =[];
var arr2 = [2,0,6,1,77,0,52,0,25,7];
for(i = 0; i < arr2.length; i++){
    if(arr2[i] > 10){
        newarr[newarr.length] = arr2[i];
    }
}
console.log(newarr);




