const regex = {
  type: /^(parents|three_shifts|12_with_24_48|one_shift|two_shifts)$/,
  start_date: /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/,
  end_date: /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/,
  payment_type: /^(hourly|daily|weekly|biweekly|monthly)$/,
  payment: /^(?:[1-9]\d{0,5}|0)$/,
  payment_date: /^(0|[1-9]|[12]\d|3[01])$/  ,
  holidays: /^(0|[1-9]|[12]\d|3[01])$/  ,
  tickets_per_mo: /^(0|[1-9]|[12]\d|3[01])$/  ,
  price_per_ticket: /^(?:\d{1,2}|100)$/,
};

const checkRegexToWork = (
  type,
  start_date,
  end_date,
  payment_type,
  payment,
  payment_date,
  holidays,
  tickets_per_mo,
  price_per_ticket
) => {
  const typeRes = checkType(type);
  if (typeRes !== true) return ["type", typeRes];
  const dateStartRes = checkStartDate(start_date);
  if (dateStartRes !== true) return ["start_date", dateStartRes];
  const dateEndRes = checkEndDate(end_date);
  if (dateEndRes !== true) return ["end_date", dateEndRes];
  const paymentTypeRes = checkPaymentType(payment_type);
  if (paymentTypeRes !== true) return ["payment_type", paymentTypeRes];
  const paymentRes = checkPayment(payment);
  if (paymentRes !== true) return ["payment", paymentRes];
  const paymentDateRes = checkPaymentDate(payment_date);
  if (paymentDateRes !== true) return ["payment_date", paymentDateRes];
  const holidaysRes = checkHolidays(holidays);
  if (holidaysRes !== true) return ["holidays", holidaysRes];
  const ticketsPerMoRes = checkTicketsPerMonth(tickets_per_mo);
  if (ticketsPerMoRes !== true) return ["tickets_per_mo", ticketsPerMoRes];
  const pricePerTicketRes = checkPricePerTicket(price_per_ticket);
  if (pricePerTicketRes !== true)
    return ["price_per_ticket", pricePerTicketRes];
  return true;
};

const checkType = (type) => {
  if (!regex.type.test(type))
    return "Use either: parents, one_shift, two_shifts, three_shifts or 12_with_24_48.";
  return true;
};
const checkStartDate = (start_date) => {
  // DD/MM/YYYY
  var splitted;
  try {
    splitted = start_date.split("/");
  } catch (err) {
    return "Start Date should be in format DD/MM/YYYY.";
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
  if (!regex.start_date.test(start_date))
    return "Start Date should be in format DD/MM/YYYY.";
  return true;
};
const checkEndDate = (end_date) => {
  // DD/MM/YYYY
  var splitted;
  try {
    splitted = end_date.split("/");
  } catch (err) {
    return "End Date should be in format DD/MM/YYYY.";
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
    return "The year should be a number between current year-2100.";
  if (!regex.end_date.test(end_date))
    return "End Date should be in format DD/MM/YYYY.";
  return true;
};
const checkPaymentType = (payment_type) => {
  if (!regex.payment_type.test(payment_type)) {
    return "Use either: hourly, daily, weekly, biweekly or monthly";
  }
  return true;
};
const checkPayment = (payment) => {
  if (!regex.payment.test(payment)) {
    return "Payment should be a number between 0(inclusive) and 999,999(inclusive).";
  }
  return true;
};
const checkPaymentDate = (payment_date) => {
  if (!regex.payment_date.test(payment_date)) {
    return "Payment Date should be a number between 0(inclusive) and 31(inclusive).";
  }
  return true;
};
const checkHolidays = (holidays) => {
  if (!regex.holidays.test(holidays)) {
    return "Holidays should be a number between 0(inclusive) and 31(inclusive).";
  }
  return true;
};
const checkTicketsPerMonth = (tickets_per_mo) => {
  if (!regex.tickets_per_mo.test(tickets_per_mo)) {
    return "Tickets per month should be a number between 0(inclusive) and 31(inclusive).";
  }
  return true;
};
const checkPricePerTicket = (price_per_ticket) => {
  if (!regex.price_per_ticket.test(price_per_ticket)) {
    return "Price per ticket should be a number between 0(inclusive) and 100(inclusive).";
  }
  return true;
};

export default checkRegexToWork;
