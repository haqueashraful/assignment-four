function calculateMoney(ticketSale) {
  mealCost = 8 * 50;
  careTaker = 500;
  totalSale = ticketSale * 120;
  result = totalSale - mealCost - careTaker;
  if (typeof ticketSale == "number" && ticketSale >= 0) {
    return result;
  } else {
    return "Invalid Number";
  }
}


function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  let LowerCase = name.toLocaleLowerCase();
  const LastLetter = LowerCase.slice(-1);

  const validChars = ["a", "y", "i", "e", "o", "u", "w"];

  if (validChars.includes(LastLetter)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  } else {
    let validArray = [];
    for (let num of array) {
      if (typeof num == "number" && !isNaN(num)) {
        validArray.push(num);
      }
    }
    return validArray;
  }
}

function password(obj) {
  let length = Object.keys(obj).length == 3;
  if (!length) {
    return "invalid";
  }
  let site = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let name = obj.name;
  let year = obj.birthYear;
  if (site && name && year && year >= 1000 && year <= 9999) {
    return `${site}#${name}@${year}`;
  } else {
    return "invalid";
  }
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) && typeof livingCost !== "number") {
    return "invalid input";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      let tax = (arr[i] * 20) / 100;
      let afterTax = arr[i] - tax;
      sum += afterTax;
    } else {
      sum += arr[i];
    }
  }
  let savings = sum - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
