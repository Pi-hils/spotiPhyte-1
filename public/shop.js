let goods = {
  "fertilizer": 1,
  "plant pot": 2,
  "petals": 4
};

function displayGoods() {
  let arrayOfGoods  = [];
  for (let i=0; i < Object.keys(goods).length; i++ ) {
    arrayOfGoods.push(`> ${Object.keys(goods)[i]}, price: ${Object.values(goods)[i]}`);
  }
  return arrayOfGoods.join("<br/>");
}

function buy(selection) {
    if (gems >= goods[selection]){
      gems -= goods[selection]
      $('#gems').text(gems);
      return `${selection} purchased`
    } else {
      return 'Insufficient gems'
    }
  }

