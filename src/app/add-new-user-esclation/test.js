




db.smssetting.aggregate([
    { $match: {  gateway_id:"5ffc403ab770dddc9ff60b24" } },
    { $project: { arm_by_platform: 1} }                              // arm_by_platform  ko dynamic krna padega
 ])

 // result 

var data = {
arm_by_keypad: (10) [true, true, true, true, true, false, false, false, false, false],
}

var arr = [];

for(var k = 0; k < data.arm_by_keypad.length; k++){
    if(data.arm_by_keypad[k]== true){
        arr.push(k+1);
    }
}

console.log(arr);

db.escalation_matrix.aggregate([
   { $match: {level: { $in: arr },gateway_id:"5ffc403ab770dddc9ff60b24"}},
   { $project: { phone: 1, name:1} }                              // arm_by_platform  ko dynamic krna padega

])