let gems = 10 //amount of gems user has

let goods = {
  "fertilizer": 1,
  "plant pot": 2,
  "petals": 4
};

function displayGoods() {
  let arrayOfGoods  = [];
  console.log(Object.keys(goods));
  for (let i=0; i < Object.keys(goods).length; i++ ) {
    arrayOfGoods.push(`${Object.keys(goods)[i]}, price: ${Object.values(goods)[i]}`);
  }
  return arrayOfGoods.join("<br/>");
}

function buy(selection) {
    if (selection in goods) {
      gems -= goods[selection]
      return `${selection} purchased`
    } else {
      return `${selection} is not valid`;
    }
  }
