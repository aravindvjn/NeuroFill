export const validateUserInput = (name: string, value: string | undefined) => {
    if (!value) return "This field is required.";
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format.";
    if (name === "password" && value.length < 6) return "Password must be at least 6 characters.";
    return "";
  };
  