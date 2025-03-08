export const formatDate = (date: string) => {
  const [day, month, year] = date.split("-").map(Number);
  const dateObj = new Date(year, month - 1, day);
  return dateObj.toLocaleString("en-US", { month: "long", year: "numeric" });
};


export const formatDateInput = (value: string) => {
  value = value.replace(/\D/g, "");
  if (value.length >= 2) value = `${value.slice(0, 2)}-${value.slice(2)}`;
  if (value.length >= 5) value = `${value.slice(0, 5)}-${value.slice(5, 9)}`;
  return value;
};
