export const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short" };
  return new Date(date).toLocaleDateString("en-US", options);
};


export const formatDateInput = (value: string) => {
  value = value.replace(/\D/g, "");
  if (value.length >= 2) value = `${value.slice(0, 2)}-${value.slice(2)}`;
  if (value.length >= 5) value = `${value.slice(0, 5)}-${value.slice(5, 9)}`;
  return value;
};
