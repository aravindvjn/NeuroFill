export const isWelcomeShown = () => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("isWelcomeShown");
  };
  
  export const setIsWelcomeShown = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isWelcomeShown", "true");
    }
  };
  