const Car = function(make,model,colour,image,registrationNumber, price) {
  
    
      this.make = make;
      this.model = model;
      this.colour = colour;
      this.image = image;
      this.registrationNumber = registrationNumber;
      this.price = price;
      this.showAll = function () {
        console.log(this.make,this.model,this.colour,this.image,this.registrationNumber,this.price);};
       

    }
    const car_1 = new Car("a","2019","r","img","22334411","94000");
    const car_2 = new Car("b","2020","b","img","22334411","88000");
    const car_3 = new Car("c","2018","r","img","22334411","72000");
    const car_4 = new Car("d","2016","g","img","22334411","78000");
    const car_5 = new Car("e","2009","w","img","22334411","100000");
    car_1.showAll()
