/**
 * BÀI 2: Tính tiền điện
 * Bước 1: Tạo biến lấy dữ liệu
 * - hoTen: Lấy họ tên người dùng.
 * - soKw: Lấy số điện tiêu thụ và đổi sang kiểu số.
 * Bước 2: Kiểm tra dữ liệu
 * - Kiểm tra họ tên và số điện có bị bỏ trống không.
 * - Kiểm tra số điện có hợp lệ và lớn hơn hoặc bằng 0 không.
 * Bước 3: Khởi tạo biến tính tiền
 * - tongTien = 0: Lưu tổng tiền điện.
 * - tienBac1 đến tienBac5: Lưu tiền điện của từng bậc.
 * Bước 4: Tính tiền điện theo số kWh của từng bậc
 * - Bậc 1: 50 kWh đầu tiên, đơn giá 500 đồng/kWh.
 * - Bậc 2: 50 kWh tiếp theo, đơn giá 650 đồng/kWh.
 * - Bậc 3: 100 kWh tiếp theo, đơn giá 850 đồng/kWh.
 * - Bậc 4: 150 kWh tiếp theo, đơn giá 1.100 đồng/kWh.
 * - Bậc 5: Số kWh vượt quá 350, đơn giá 1.300 đồng/kWh.
 * Bước 5: Tính tổng tiền
 * - tongTien = tienBac1 + tienBac2 + tienBac3 + tienBac4 + tienBac5.
 * Bước 6: Xuất kết quả
 * - Hiển thị họ tên, số điện tiêu thụ và tổng tiền điện phải trả.
 */
document.getElementById("btn-tinh-tien-dien").onclick = function () {
  const hoTen = document.getElementById("ho-ten").value;
  const soKwText = document.getElementById("so-kw").value;
  const soKw = Number(soKwText);
  const p_b2 = document.getElementById("p-b2");

  if (hoTen === "" || soKwText === "") {
    p_b2.innerHTML = "Vui lòng nhập họ tên và số điện tiêu thụ.";
  } else if (isNaN(soKw) || soKw < 0) {
    p_b2.innerHTML = "Số điện tiêu thụ phải là số lớn hơn hoặc bằng 0.";
  } else {
    let tienBac1 = 0;
    let tienBac2 = 0;
    let tienBac3 = 0;
    let tienBac4 = 0;
    let tienBac5 = 0;
    let tongTien = 0;

    if (soKw <= 50) {
      tienBac1 = soKw * 500;
    } else if (soKw <= 100) {
      tienBac1 = 50 * 500;
      tienBac2 = (soKw - 50) * 650;
    } else if (soKw <= 200) {
      tienBac1 = 50 * 500;
      tienBac2 = 50 * 650;
      tienBac3 = (soKw - 100) * 850;
    } else if (soKw <= 350) {
      tienBac1 = 50 * 500;
      tienBac2 = 50 * 650;
      tienBac3 = 100 * 850;
      tienBac4 = (soKw - 200) * 1100;
    } else {
      tienBac1 = 50 * 500;
      tienBac2 = 50 * 650;
      tienBac3 = 100 * 850;
      tienBac4 = 150 * 1100;
      tienBac5 = (soKw - 350) * 1300;
    }

    tongTien = tienBac1 + tienBac2 + tienBac3 + tienBac4 + tienBac5;

    p_b2.innerHTML =
      "Họ tên: " +
      hoTen +
      " | Số điện tiêu thụ: " +
      soKw +
      " kWh | Tiền điện phải trả: " +
      tongTien.toLocaleString("vi-VN") +
      " đồng.";
  }
};
