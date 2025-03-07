export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};



export const convertToRatingPercentage = (rating: string) => {
  const ratingMap: { [key: string]: number } = {
    Beginner: 20,
    Intermediate: 50,
    Advanced: 75,
    Expert: 100,
  };
  return ratingMap[rating] || 0;
};