const regex = {
  priority: /^0|1|2$/,
  name: /^[a-zA-Z ]{3,50}$/,
  quantity: /^[0-9]{1,3}$/,
  price: /^[0-9]{1,4}$/,
  dateNeeded: /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/,
  link: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
  deliveryPrice: /^[0-9]{1,3}$/,
};

const checkRegexToBuy = (
  priority,
  name,
  quantity,
  price,
  dateNeeded,
  link,
  deliveryPrice
) => {
  const priorityRes = checkPriority(priority);
  if (priorityRes !== true) return ["priority", priorityRes];
  const nameRes = checkName(name);
  if (nameRes !== true) return ["name", nameRes];
  const quantityRes = checkQuantity(quantity);
  if (quantityRes !== true) return ["quantity", quantityRes];
  const priceRes = checkPrice(price);
  if (priceRes !== true) return ["price", priceRes];
  const dateNeededRes = checkDateNeeded(dateNeeded);
  if (dateNeededRes !== true) return ["dateNeeded", dateNeededRes];
  const linkRes = checkLink(link);
  if (linkRes !== true) return ["link", linkRes];
  const deliveryPriceRes = checkDeliveryPrice(deliveryPrice);
  if (deliveryPriceRes !== true) return ["deliveryPrice", deliveryPriceRes];
  return true;
};

const checkPriority = (priority) => {
  if (!regex.priority.test(priority)) return "Priority should be between 0-2.";
  return true;
};

const checkName = (name) => {
  if (!regex.name.test(name))
    return "Name should only contain letters, space and - symbol. It should be between 3-50.";
  return true;
};

const checkQuantity = (quantity) => {
  if (quantity < 0) {
    return "Quantity should be at least 0.";
  } else if (quantity > 300) {
    return "Quantity shouldn't be bigger than 300.";
  } else if (!regex.quantity.test(quantity))
    return "Quantity should be a number between 0-300.";
  return true;
};

const checkPrice = (price) => {
  if (price < 0) {
    return "Price should be at least 0.";
  } else if (price > 5000) {
    return "Price shouldn't be bigger than 5000.";
  } else if (!regex.price.test(price))
    return "Quantity should be a number between 0-5000.";
  return true;
};

const checkDateNeeded = (dateNeeded) => {
  // DD/MM/YYYY
  var splitted;
  try {
    splitted = dateNeeded.split("/");
  } catch (err) {
    return "Date Needed should be in format DD/MM/YYYY.";
  }
  var day;
  try {
    day = parseInt(splitted[0]);
  } catch (err) {
    return "Day should be a valid number.";
  }
  var month;
  try {
    month = parseInt(splitted[1]);
  } catch (err) {
    return "Month should be a valid number.";
  }
  var year;
  try {
    year = parseInt(splitted[2]);
  } catch (err) {
    return "Year should be a valid number.";
  }
  if (day <= 0 || day > 31) return "The day should be a number between 1-31.";
  if (month <= 0 || month > 12)
    return "The month should be a number between 1-12.";
  if (year < new Date().getFullYear() || year > 2100)
    return "The year should be a number between 2023-2100.";
  if (!regex.dateNeeded.test(dateNeeded))
    return "Date Needed should be in format DD/MM/YYYY.";
  return true;
};

const checkLink = (link) => {
  if (!regex.link.test(link)) return "Link should be a valid URL.";
  return true;
};

const checkDeliveryPrice = (deliveryPrice) => {
  if (deliveryPrice < 0) {
    return "Delivery price should be at least 0.";
  } else if (deliveryPrice > 300) {
    return "Delivery price shouldn't be bigger than 300.";
  } else if (!regex.deliveryPrice.test(deliveryPrice))
    return "Delivery price should be a number between 0-300.";
  return true;
};

export default checkRegexToBuy;
