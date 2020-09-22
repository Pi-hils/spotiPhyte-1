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
    // if(Object.values(goods).includes(selection)){
    if((goods[i].item.includes(selection))){ 
   gems -= goods[i].price;
      return "item purchased"

    } else if((goods[1].item.includes(selection))){ 
      gems -= goods[1].price;
        return "item purchased"
      } else {
      return `${selection} is not valid`;
    }
  }
}