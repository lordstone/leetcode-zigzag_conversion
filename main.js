/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length === 0 || s === null){
        return "";
    }
    if(s.length === 1 ){
        return s;
    }
    if(numRows === 1){
        return s;
    }
    var str_arr = [];
    for(i = 0; i < numRows;i++){
        str_arr[i] = "";
    }
     var denom;
    if(numRows % 2 === 1){
        denom = numRows + 1;
    }else{
        
        denom = numRows;
    }
    var direction = 0;//0 for going down 1 for going up
    var lvl = -1; // 
    for (i = 0;i < s.length ; i++){
        var tmpstr = s[i];
        if(direction === 1){
            lvl --;
        }else{
            lvl ++;
        }
        str_arr[lvl] += tmpstr;
        if(lvl === 0 && direction === 1){
            direction = 0;
        }else if (lvl === numRows - 1 && direction === 0){
            direction = 1;
        }
        
    }
  
    var my_string = "";
    for (i = 0 ; i < numRows; i++){
        if(str_arr[i] !== "" && str_arr[i] !== null && str_arr[i].length >0 && str_arr[i] !== undefined){
            my_string += str_arr[i];
        }
    }
    return my_string;
};
