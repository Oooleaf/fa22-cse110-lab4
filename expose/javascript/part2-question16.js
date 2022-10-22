let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

//my part
/*iterate for loop, 
print the property if the property starts with r or 
the value of property is odd number*/
for (const keys in statistics) {
        if(keys[0] == 'r' || statistics[keys] % 2 != 0){
            console.log(statistics[keys]);
        }
  }