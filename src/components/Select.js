import CustomSelect from "../hook/selectStyles";
import { useLocations } from "../hook/useLocations";

export default function LocationSelect({ selectedValue, setSelectedValue }) {
  const { data, isLoading, error } = useLocations();

  if (isLoading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Có lỗi xảy ra!</p>;

  const options = data.map((location) => ({
    value: location.id,
    label: location.name,
  }));

  return <CustomSelect options={options} value={selectedValue} onChange={setSelectedValue} />;
}
