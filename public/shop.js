let gems = 10 //amount of gems user has
let goods = [{
  item: "fertilizer",
  price: 1
},{
  item: "plant pot",
  price: 2
},{
  item: "petels",
  price: 4
}];

function displayGoods() {
  var i;
  for (i = 0; i < goods.length; i++) {
    return `${goods.item}, price: ${goods.price}`
  }
  console.log(goods)
}

function buy(selection) {
  var i;
  for (i = 0; i < goods.length; i++) {
    if (selection === goods[i].item ){ 
      gems -= goods[i].price;
      return "item purchased"
    // (goods[i].item === selection && goods[i].price <= gems) {
       //gems -= goods[i].price;
      
    } else {
      return `${selection} is not valid`;
    }
  }
}