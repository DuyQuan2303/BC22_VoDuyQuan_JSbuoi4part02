// Bài tập 1
// Bước 1: Tạo ra các biến ngày tháng năm
// Bước 2 : kiểm tra ngày tháng năm
// - Nếu là ngày cuối cùng của tháng, tháng cuối cùng của năm
// Bước 3 : xuất ra kết quả
document.getElementById("btnDate").onclick = function () {
  var date = parseInt(document.getElementById("txtNgay").value);
  var month = parseInt(document.getElementById("txtThang").value);
  var year = parseInt(document.getElementById("txtNam").value);

  var newDate = date;
  var newMonth = month;
  var newYear = year;

  var oldDate = date;
  var oldMonth = month;
  var oldYear = year;

  if ((month == 1, 3, 5, 7, 8, 10 && date == 31)) {
    newDate = 1;
    newMonth += 1;
    console.log(newDate, newMonth);
  }
  if ((month == 4, 6, 9, 11 && date == 30)) {
    newDate = 1;
    newMonth += 1;
    console.log(newDate, newMonth);
  }
  if (month == 12 && date == 31) {
    newDate = 1;
    newMonth = 1;
    newYear += 1;
    console.log(newDate, newMonth, newYear);
  }

  if (year % 4 == 0) {
    //2 th
    if (date == 28) {
      newDate += 1;
      // newMonth += 1;
    } else if (date == 29) {
      newDate = 1;
      newMonth += 1;
    } else {
      if (date == 28) {
        newDate = 1;
        newMonth += 1;
      }
    }
    // newDate +=1;
  }

  // newDate += 1;
  console.log(newDate, newMonth, newYear);

  var thongbao =
    "Ngay tiep theo la:  " + newDate + "Thang " + newMonth + "Nam " + newYear;

  // newDate = date + 1;
  // newMonth = month + 1;
  // console.log(newDate);
  // console.log(newMonth);
  document.getElementById("footerDate").innerHTML = thongbao;
  document.getElementById("footerDate").classList = "showInfo";
};

// Bai tap 2
// Bước 1: Tạo ra các biến ngày tháng năm
// Bước 2 : kiểm tra ngày tháng năm
// Bước 3 : xuất ra kết quả

document.getElementById("btnReadDate").onclick = function () {
  var thang = parseInt(document.getElementById("txtMonth").value);
  var nam = parseInt(document.getElementById("txtYear").value);

  var checkDayOfMonth = 0;
  var checkLeapYear = 0;

  if ((thang === 1, 3, 5, 7, 8, 10, 12 && nam % 4 != 0)) {
    checkDayOfMonth = 31;
    // checkLeapYear = 365;
    checkLeapYear = "Nam ko nhuan";

    console.log(checkDayOfMonth);
  } else {
    checkDayOfMonth = 31;

    // checkLeapYear = 366;
    checkLeapYear = "Nam nhuan";
  }
  if ((thang === 4, 6, 9, 11 && nam % 4 != 0)) {
    checkDayOfMonth = 30;
    // checkLeapYear = 365;
    checkLeapYear = "Nam ko nhuan";
  } else {
    checkDayOfMonth = 30;

    // checkLeapYear = 366;
    checkLeapYear = "Nam nhuan";
  }

  if (thang === 2 && nam % 4 != 0) {
    checkDayOfMonth = 28;
    checkLeapYear = "Nam ko nhuan";
  } else if (thang === 2 && nam % 4 == 0) {
    checkDayOfMonth = 29;
    checkLeapYear = "Nam nhuan";
  }

  var noti = "Co : " + checkDayOfMonth + "ngay va La " + checkLeapYear;
  document.getElementById("footerReadDate").innerHTML = noti;
  document.getElementById("footerReadDate").classList = "showInfo";
};

// Bai tap 3
/*
B1 : Tao ra biet so de nhap vao
B2: Tao ra cac bien hang tram , hang chuc , hang don vi va tinh tu so duoc nhap vao
B3: Chia cac truong hop doc
b4: xuat ra ket qua
*/
document.getElementById("btnReadNumber").onclick = function () {
  var n = document.getElementById("txtNumber").value;
  var hundred = Math.floor(n / 100);
  var ten = Math.floor((n % 100) / 10);
  var unit = n % 10;

  var docHundred = 0;
  var docTen = 0;
  var docUnit = 0;

  console.log(hundred, ten, unit);
  // console.log(hundred);

  switch (hundred) {
    case 1:
      docHundred = "mot tram";
      break;
    case 2:
      docHundred = "hai tram";
      break;
    case 3:
      docHundred = "ba tram";
      break;
    case 4:
      docHundred = "bon tram";
      break;
    case 5:
      docHundred = "nam tram";
      break;
    case 6:
      docHundred = "sau tram";
      break;
    case 7:
      docHundred = "bay tram";
      break;
    case 8:
      docHundred = "tam tram";
      break;
    case 9:
      docHundred = "chin tram";
      break;

    default:
      break;
  }
  switch (ten) {
    case 0 :
      docTen = "linh";
      break;
    case 1:
      docTen = "muoi";
      break;
    case 2:
      docTen = "hai muoi";
      break;
    case 3:
      docTen = "ba muoi";
      break;
    case 4:
      docTen = "bon muoi";
      break;
    case 5:
      docTen = "nam muoi";
      break;
    case 6:
      docTen = "sau muoi";
      break;
    case 7:
      docTen = "bay muoi";
      break;
    case 8:
      docTen = "tam muoi";
      break;
    case 9:
      docTen = "chin muoi";
      break;

    default:
      break;
  }
  switch (unit) {
    case 1:
      docUnit = "mot";
      break;
    case 2:
      docUnit = "hai";
      break;
    case 3:
      docUnit = "ba";
      break;
    case 4:
      docUnit = "bon";
      break;
    case 5:
      docUnit = "nam";
      break;
    case 6:
      docUnit = "sau";
      break;
    case 7:
      docUnit = "bay";
      break;
    case 8:
      docUnit = "tam";
      break;
    case 9:
      docUnit = "chin";
      break;
      case 0:
        docUnit = " ";
        break;

    default:
      break;
  }
  var inKetQua = docHundred+ " " + docTen + " "+ docUnit;
  document.getElementById("footerReadNumber").innerHTML = inKetQua;
};


// Bai tap 4 :
// B1 : 
function soSanh(a, b, c) {
  var soLonNhat = a;
  if(soLonNhat < b)
  {
      soLonNhat = b;
  }
  else
  {
      soLonNhat = soLonNhat;
  }
  if(soLonNhat < c)
  {
      soLonNhat = c;
  }
  else
  {
      soLonNhat = soLonNhat;
  }
  return soLonNhat;
}

document.getElementById("btnKhoangCach").onclick = function () {
  // Lay ten sinh vien
  const name1 = document.getElementById("txtName1").value;
  const name2 = document.getElementById("txtName2").value;
  const name3 = document.getElementById("txtName3").value;


  // Lay toa do sinh vien
var toaDoX1 = document.getElementById("txtToaDoX1").value;
var toaDoY1 = document.getElementById("txtToaDoY1").value;

var toaDoX2 = document.getElementById("txtToaDoX2").value;
var toaDoY2 = document.getElementById("txtToaDoY2").value;

var toaDoX3 = document.getElementById("txtToaDoX3").value;
var toaDoY3 = document.getElementById("txtToaDoY3").value;

// Lay toa do truong 
var toaDoXTruong = document.getElementById("txtToaDoX").value;
var toaDoYTruong = document.getElementById("txtToaDoY").value;

// Tinh khoang cach
var khoangCach1 = Math.sqrt(((toaDoXTruong-toaDoX1)*(toaDoXTruong-toaDoX1)+(toaDoYTruong-toaDoY1)*(toaDoYTruong-toaDoY1)));
var khoangCach2 = Math.sqrt(((toaDoXTruong-toaDoX2)*(toaDoXTruong-toaDoX2)+(toaDoYTruong-toaDoY2)*(toaDoYTruong-toaDoY2)));
var khoangCach3 = Math.sqrt(((toaDoXTruong-toaDoX3)*(toaDoXTruong-toaDoX3)+(toaDoYTruong-toaDoY3)*(toaDoYTruong-toaDoY3)));

var n = soSanh(khoangCach1,khoangCach2,khoangCach3);
var ketqua;
switch (n){
  case khoangCach1 :
  ketqua = name1 + " xa truong nhat";
  break;
  case khoangCach2 :
    ketqua = name2 + " xa truong nhat";
    break;
  case khoangCach3 :
    ketqua = name3 + " xa truong nhat";
    break;
    default:
      break;

}
document.getElementById("footerKhoangCach").innerHTML = ketqua;
document.getElementById("footerKhoangCach").classList = "showInfo";


}