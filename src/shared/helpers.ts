export const strToNumbers = (str: string) => str.replace(/\D/g, "");

export const formatDate = (date: string, location: string = "pt-BR") => {
  const objDate = new Date(date);

  const time = objDate.toLocaleTimeString(location, {
    minute: "numeric",
    hour: "numeric",
  });
  const formatedDate = objDate.toLocaleDateString(location, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `${time}, ${formatedDate}`;
};
