/**
 * BÀI 1: Xét tuyển đại học
 * Mô hình 3 khối:
 *
 * Khối nhập:
 * - Lấy điểm của 3 môn, điểm chuẩn, khu vực và đối tượng ưu tiên.
 *
 * Khối xử lý:
 * - Đổi điểm 3 môn và điểm chuẩn sang kiểu số.
 * - Kiểm tra điểm 3 môn nằm trong khoảng 0 đến 10, điểm chuẩn nằm
 *   trong khoảng 0 đến 30.
 * - Khởi tạo điểm khu vực và điểm đối tượng bằng 0.
 * - Nếu khu vực là A thì cộng 2 điểm, B cộng 1 điểm, C cộng 0.5 điểm.
 *   Nếu không thuộc các khu vực trên thì điểm khu vực bằng 0.
 * - Nếu đối tượng là 1 thì cộng 2.5 điểm, 2 cộng 1.5 điểm, 3 cộng 1 điểm.
 *   Nếu không thuộc các đối tượng trên thì điểm đối tượng bằng 0.
 * - Tính tổng điểm = điểm 3 môn + điểm khu vực + điểm đối tượng.
 * - Nếu có một môn bằng 0 điểm thì rớt ngay, không xét điểm chuẩn.
 * - Nếu không có môn nào bằng 0: tổng điểm lớn hơn hoặc bằng điểm chuẩn
 *   thì đậu, ngược lại thì rớt.
 *
 * Khối xuất:
 * - Hiển thị thông báo nếu dữ liệu không hợp lệ.
 * - Nếu dữ liệu hợp lệ, hiển thị kết quả đậu hoặc rớt và tổng điểm.
 */

document.getElementById("btn-xet-tuyen").onclick = function () {
  const diemMon1Text = document.getElementById("diem-mon-1").value;
  const diemMon2Text = document.getElementById("diem-mon-2").value;
  const diemMon3Text = document.getElementById("diem-mon-3").value;
  const diemChuanText = document.getElementById("diem-chuan").value;
  const khuVuc = document.getElementById("khu-vuc").value;
  const doiTuong = document.getElementById("doi-tuong").value;

  const diemMon1 = Number(diemMon1Text);
  const diemMon2 = Number(diemMon2Text);
  const diemMon3 = Number(diemMon3Text);
  const diemChuan = Number(diemChuanText);

  let diemKhuVuc = 0;
  if (khuVuc === "A") {
    diemKhuVuc = 2;
  } else if (khuVuc === "B") {
    diemKhuVuc = 1;
  } else if (khuVuc === "C") {
    diemKhuVuc = 0.5;
  }

  let diemDoiTuong = 0;
  if (doiTuong === "1") {
    diemDoiTuong = 2.5;
  } else if (doiTuong === "2") {
    diemDoiTuong = 1.5;
  } else if (doiTuong === "3") {
    diemDoiTuong = 1;
  }

  const tongDiemMon = diemMon1 + diemMon2 + diemMon3;
  const tongDiem = tongDiemMon + diemKhuVuc + diemDoiTuong;

  let thongBao = "";

  if (
    diemMon1Text === "" ||
    diemMon2Text === "" ||
    diemMon3Text === "" ||
    diemChuanText === ""
  ) {
    thongBao = "Vui lòng nhập điểm cả 3 môn và điểm chuẩn.";
  } else if (
    diemMon1 < 0 ||
    diemMon1 > 10 ||
    diemMon2 < 0 ||
    diemMon2 > 10 ||
    diemMon3 < 0 ||
    diemMon3 > 10 ||
    diemChuan < 0 ||
    diemChuan > 30
  ) {
    thongBao = "Điểm mỗi môn phải từ 0 đến 10, điểm chuẩn từ 0 đến 30.";
  } else if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    thongBao =
      "Bạn đã rớt, có môn bị 0 điểm nên không cần xét điểm chuẩn. Tổng điểm: " +
      tongDiem;
  } else if (tongDiem >= diemChuan) {
    thongBao = "Bạn đã đậu, Tổng điểm: " + tongDiem;
  } else {
    thongBao = "Bạn đã rớt, Tổng điểm: " + tongDiem;
  }

  document.getElementById("p-b1").innerHTML = thongBao;
};
