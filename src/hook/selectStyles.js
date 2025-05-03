import Select from "react-select";
import makeAnimated from "react-select/animated";

export const animatedComponents = makeAnimated(); // ✅ Hiệu ứng động

export const selectStyles = {
  control: (provided) => ({
    ...provided,
    width: "200px", // ✅ Cố định kích thước Select
  }),
  menu: (provided) => ({
    ...provided,
    width: "200px", // ✅ Giữ dropdown đúng kích thước
  }),
  singleValue: (provided) => ({
    ...provided,
    whiteSpace: "nowrap", // ✅ Ngăn label xuống dòng
    overflow: "hidden",
    textOverflow: "ellipsis", // ✅ Thêm "..." nếu quá dài
  }),
};

export default function CustomSelect({ options, value, onChange, placeholder = "Chọn..." }) {
  return (
    <Select
      options={options}
      components={animatedComponents}
      styles={selectStyles}
      isClearable
      menuPortalTarget={document.body}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
