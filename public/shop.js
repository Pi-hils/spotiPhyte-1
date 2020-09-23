let goods = {
  "fertilizer": 1,
  "weedkiller": 2,
  "miracleGro": 4,
  "dancepowder": 6
};

function displayGoods() {
  let arrayOfGoods  = [];
  for (let i=0; i < Object.keys(goods).length; i++ ) {
    arrayOfGoods.push(`> ${Object.keys(goods)[i]}, price: ${Object.values(goods)[i]}`);
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
