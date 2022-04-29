var myRegexp = /202[0-9]\-T\d{2}(.*?)\-/ig;
var str = 'https://files.customs.gov.vn/TONG_CUC/Lists/ThongKeHaiQuanLichCongBo/Attachments/1477/2022-T02K1-1N(VN-SB).pdf';
var myArray = str.match(myRegexp);
console.log(myArray);
var match = myRegexp.exec(str);
console.log(match);
console.log(match[1]); // abc