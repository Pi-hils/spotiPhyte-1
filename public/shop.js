let gems = 10 //amount of gems user has

let goods = [{
  item: "fertilizer",
  price: 1
}];

function displayGoods() {
  var i;
  for (i = 0; i < goods.length; i++) {
    return `${goods[i].item}, price: ${goods[i].price}`
  }
  console.log(goods)
}

function buy(selection) {
    if (selection in goods) {
      gems -= goods[selection]
      return `${selection} purchased`
    } else {
      return `${selection} is not valid`;
    }
  }
