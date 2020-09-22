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
  // var i;
  goods.forEach(item => console.log(item));
  // {
  //   return `${goods[i].item}, price: ${goods[i].price}`
  // }
  // console.log(goods)
}

function buy(selection) {
  for (var i = 0; i < goods.length; i++) {
    if (selection === goods[i].item ){ 
   console.log (i) 
   gems -= goods[i].price;
      return "item purchased"
    // (goods[i].item === selection && goods[i].price <= gems) {
       //gems -= goods[i].price;
      
    } else {
      return `${selection} is not valid`;
    }
  }
}