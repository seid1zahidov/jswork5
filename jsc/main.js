var BMW = {
    model: 'M5 cs',
    year:'2022',
    engine:'4400cc',
    hp:'635',
    price: 300000
}
var Mercedes = {
    model:'G63',
    year:'2022',
    engine:'4000',
    hp:'585',
    price:200000
}

var carinfo = {
    carname: function(){
        return this.model +" " + this.year
    },
    carinfos: function(){
        return  this.engine + " " + this.hp
    },
    carptice: function(){
        return this.price
    }
}
console.log(carinfo.carname.call(BMW));
console.log(carinfo.carinfos.call(BMW));
console.log(carinfo.carptice.call(BMW))