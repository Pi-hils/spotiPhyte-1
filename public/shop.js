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
  var i;
  for (i = 0; i < goods.length; i++) {
    if (goods[i].item === selection && goods[i].price <= gems) {
      gems -= goods[i].price;
      [selection]();
    } else {
      return `${selection} is not valid`;
    }
  }
}