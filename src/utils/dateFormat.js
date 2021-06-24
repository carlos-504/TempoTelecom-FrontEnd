export const dateFormat = (createdDate) => {
  const formatedDate = new Date(createdDate);

  return `${formatedDate.getDate()}/${
    formatedDate.getMonth() + 1
  }/${formatedDate.getFullYear()} - ${formatedDate.getHours()}:${formatedDate.getMinutes()}`;
};
