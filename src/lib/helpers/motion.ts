export const slideAnimation = (direction: "left" | "right" | "up" | "down", duration?: number) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: duration || 0.6,
        ease: "easeInOut",
      },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      opacity: 0,
      transition: {
        duration: duration || 0.4,
        ease: "easeInOut",
      },
    },
  };
};
