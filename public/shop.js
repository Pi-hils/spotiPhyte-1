let gems = 10 //amount of gems user has
let goods = [{
  item: "fertilizer",
  price: 1
},{
  item: "plant pot",
  price: 2
},{
  item: "petals",
  price: 4
}];

function displayGoods() {
  goods.forEach(item => console.log(item));
}

function buy(selection) {
  for (var i = 0; i < goods.length; i++) {
    if((goods.item.includes(selection))){ 
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