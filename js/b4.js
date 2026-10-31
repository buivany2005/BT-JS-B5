/**
 * BÀI 4: Tính tiền cáp
 * Bước 1: Lấy loại khách hàng, mã khách hàng, số kênh cao cấp và số kết nối.
 * Bước 2: Nếu chọn doanh nghiệp thì hiện ô nhập số kết nối.
 *         Nếu chọn nhà dân thì ẩn ô nhập số kết nối.
 * Bước 3: Tính tiền cáp
 * - Nhà dân: 4.5$ phí xử lý + 20.5$ phí dịch vụ + 7.5$ mỗi kênh cao cấp.
 * - Doanh nghiệp: 15$ phí xử lý + 75$ cho 10 kết nối đầu tiên
 *   + 5$ mỗi kết nối thêm + 50$ mỗi kênh cao cấp.
 * Bước 4: Hiển thị mã khách hàng, loại khách hàng và tổng tiền cáp.
 */
const loaiKhachHangInput = document.getElementById("loai-khach-hang");
const soKetNoiContainer = document.getElementById("so-ket-noi-container");

// Ẩn hoặc hiện ô số kết nối tùy theo loại khách hàng.
loaiKhachHangInput.onchange = function () {
  if (loaiKhachHangInput.value === "doanhNghiep") {
    soKetNoiContainer.classList.remove("hidden");
  } else {
    soKetNoiContainer.classList.add("hidden");
  }
};

document.getElementById("btn-tinh-tien-cap").onclick = function () {
  const loaiKhachHang = loaiKhachHangInput.value;
  const maKhachHang = document.getElementById("ma-khach-hang").value;
  const soKenhText = document.getElementById("so-kenh-cao-cap").value;
  const soKenh = Number(soKenhText);
  const soKetNoiText = document.getElementById("so-ket-noi").value;
  const soKetNoi = Number(soKetNoiText);
  const p_b4 = document.getElementById("p-b4");
  let tongTien = 0;
  let tenLoaiKhachHang = "";

  if (loaiKhachHang === "" || maKhachHang === "" || soKenhText === "") {
    p_b4.innerHTML =
      "Vui lòng chọn loại khách hàng, nhập mã khách hàng và số kênh cao cấp.";
  } else if (isNaN(soKenh) || soKenh < 0 || soKenh % 1 !== 0) {
    p_b4.innerHTML = "Số kênh cao cấp phải là số nguyên lớn hơn hoặc bằng 0.";
  } else if (loaiKhachHang === "nhaDan") {
    tenLoaiKhachHang = "Nhà dân";
    tongTien = 4.5 + 20.5 + soKenh * 7.5;

    p_b4.innerHTML =
      "Mã khách hàng: " +
      maKhachHang +
      " | Loại khách hàng: " +
      tenLoaiKhachHang +
      " | Số kênh cao cấp: " +
      soKenh +
      " | Tổng tiền cáp: $" +
      tongTien.toFixed(2);
  } else if (loaiKhachHang === "doanhNghiep") {
    tenLoaiKhachHang = "Doanh nghiệp";

    if (soKetNoiText === "") {
      p_b4.innerHTML = "Vui lòng nhập số kết nối của doanh nghiệp.";
    } else if (isNaN(soKetNoi) || soKetNoi < 0 || soKetNoi % 1 !== 0) {
      p_b4.innerHTML = "Số kết nối phải là số nguyên lớn hơn hoặc bằng 0.";
    } else {
      tongTien = 15 + 75 + soKenh * 50;

      if (soKetNoi > 10) {
        tongTien = tongTien + (soKetNoi - 10) * 5;
      }

      p_b4.innerHTML =
        "Mã khách hàng: " +
        maKhachHang +
        " | Loại khách hàng: " +
        tenLoaiKhachHang +
        " | Số kênh cao cấp: " +
        soKenh +
        " | Số kết nối: " +
        soKetNoi +
        " | Tổng tiền cáp: $" +
        tongTien.toFixed(2);
    }
  } else {
    p_b4.innerHTML = "Loại khách hàng không hợp lệ.";
  }
};
