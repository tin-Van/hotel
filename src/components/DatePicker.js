import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_blue.css"; // ✅ Dùng giao diện Material
import "../assets/css/flatpickr.css"
export default function DatePicker({ selectedDate, setSelectedDate }) {
  return (
    <Flatpickr
      options={{
        dateFormat: "d/m/Y", // ✅ Định dạng ngày
        enableTime: false, // ✅ Chỉ chọn ngày, không chọn giờ
        minDate: "today",// ngày giới hạn ko chọn ngày trước hiện tại
        animate: true, // ✅ Hiển thị mượt hơn
    disableMobile: true, // ✅ Dùng giao diện chuẩn trên mobile
      }}
      value={selectedDate || new Date()}
      onChange={(date) => setSelectedDate(date)}
    />
  );
}
