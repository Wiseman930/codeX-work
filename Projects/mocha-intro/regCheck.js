function regCheck(registrationNumber, location){
return registrationNumber.endsWith(location);
};
console.log(regCheck('DC 55 YU GP', 'GP'));
console.log(regCheck('CJ 123 908', 'CJ'));
console.log(regCheck('5566 L', 'L'));
console.log(regCheck('ERT 123 EC', 'EC'));
console.log(regCheck('FGT 123 MP', 'MP'));
console.log(regCheck('FGT 123 MM', 'MP'));