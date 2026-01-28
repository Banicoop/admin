export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}-${day}`; 
};


export const formatISODate = (date: Date) => {
  return date.toISOString().split('T')[0];
};
