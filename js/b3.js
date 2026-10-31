/**
 * BÀI 3: Tính thuế thu nhập cá nhân
 * Bước 1: Tạo biến lấy dữ liệu
 * - hoTen: Lấy họ tên người nộp thuế.
 * - tongThuNhap: Lấy tổng thu nhập trong một năm.
 * - soNguoiPhuThuoc: Lấy số người phụ thuộc.
 * Bước 2: Tính thu nhập chịu thuế
 * - Giảm trừ bản thân: 4 triệu đồng.
 * - Giảm trừ mỗi người phụ thuộc: 1.6 triệu đồng.
 * - Thu nhập chịu thuế = tổng thu nhập - 4 triệu - số người phụ thuộc x 1.6 triệu.
 * - Nếu thu nhập chịu thuế nhỏ hơn hoặc bằng 0 thì tiền thuế bằng 0.
 * Bước 3: Chọn thuế suất theo bậc thu nhập chịu thuế
 * - Đến 60 triệu: 5%; đến 120 triệu: 10%; đến 216 triệu: 15%.
 * - Đến 384 triệu: 20%; đến 624 triệu: 25%; đến 960 triệu: 30%.
 * - Trên 960 triệu: 35%.
 * - Lấy toàn bộ thu nhập chịu thuế nhân với thuế suất của bậc.
 * Bước 4: Xuất kết quả
 * - Hiển thị họ tên và tiền thuế phải nộp.
 */
document.getElementById("btn-tinh-thue").onclick = function () {
  const hoTen = document.getElementById("ho-ten-thue").value;
  const tongThuNhapText = document.getElementById("tong-thu-nhap").value;
  const soNguoiPhuThuocText =
    document.getElementById("so-nguoi-phu-thuoc").value;
  const tongThuNhap = Number(tongThuNhapText);
  const soNguoiPhuThuoc = Number(soNguoiPhuThuocText);
  const p_b3 = document.getElementById("p-b3");

  if (
    hoTen === "" ||
    tongThuNhapText === "" ||
    soNguoiPhuThuocText === ""
  ) {
    p_b3.innerHTML =
      "Vui lòng nhập họ tên, tổng thu nhập năm và số người phụ thuộc.";
  } else if (
    isNaN(tongThuNhap) ||
    isNaN(soNguoiPhuThuoc) ||
    tongThuNhap < 0 ||
    soNguoiPhuThuoc < 0 ||
    soNguoiPhuThuoc % 1 !== 0
  ) {
    p_b3.innerHTML =
      "Thu nhập phải từ 0 trở lên và số người phụ thuộc phải là số nguyên không âm.";
  } else {
    const tienGiamTruBanThan = 4e+6;
    const tienGiamTruNguoiPhuThuoc = 1.6e+6 * soNguoiPhuThuoc;
    let thuNhapChiuThue =
      tongThuNhap - tienGiamTruBanThan - tienGiamTruNguoiPhuThuoc;

    if (thuNhapChiuThue < 0) {
      thuNhapChiuThue = 0;
    }

    let thueSuat = 0;

    if (thuNhapChiuThue <= 60e+6) {
      thueSuat = 0.05;
    } else if (thuNhapChiuThue <= 120e+6) {
      thueSuat = 0.1;
    } else if (thuNhapChiuThue <= 216e+6) {
      thueSuat = 0.15;
    } else if (thuNhapChiuThue <= 384e+6) {
      thueSuat = 0.2;
    } else if (thuNhapChiuThue <= 624e+6) {
      thueSuat = 0.25;
    } else if (thuNhapChiuThue <= 960e+6) {
      thueSuat = 0.3;
    } else {
      thueSuat = 0.35;
    }

    const tongTienThue = thuNhapChiuThue * thueSuat;

    p_b3.innerHTML =
      "Họ tên: " +
      hoTen +
      "; Tiền thuế thu nhập cá nhân: " +
      tongTienThue.toLocaleString("vi-VN") +
      " VND";
  }
};
