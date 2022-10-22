1. print output 3. Because prices is an array, and line 19 shows the length of prices is 3. i  is var, which means we can acces anywhere in the function. We have a for loop add 1 to i each time, until get 3. Hence, the final result of i is 3.
   
2. print output 150. i is var, which means we can acces anywhere in the function. Because dicountPrice = prices[i] * (1-discount),  i has been updated as 3, the index 3 element in the prices is 300, discount = 0.5. Then discountPrice = 300*(1-0.5) = 300*0.5 = 150.
   
3. print output 150. i is var, which means we can acces anywhere in the function. Because finalPrice = Math.round(discountedPrice * 100)/ 100, and we know discountedPrice = 150, and we get finalPrice = Math.round(150 * 100)/ 100 = 150.
   
4. This function will return [50, 100, 150], which is the value of discounted. We run the for loop, and we will get i = 1, i = 2, i = 3. Computing these in finalPrice, and line 9 will push the updated value to discounted. Also we know variable of i is var, which means we can acces anywhere in the function. Then we get the updated discouted.
   
5. Throw an error. i is let, which means we cannot access i outside of the block. We know we defined let i in the for loop, but line 12 is out of the for loop block. When we arrive to line 12, i is not defined.
   
6. Throw an error. i is let, which means we cannot access i outside of the block, same as discoutnedPrice. We defined let i and let discountedPrice in the for loop, but line 13is out of the for loop block. When we arrive to line 13, discountedPrice is undefined.
   
7. print output 150.  i and finalPrice is let, which means we cannot access i outside of the block. We defined finalPrice in the function scope, which means we can acces finalPrice in this scope. After running for loop 3 times, the finalPrice has been updated as 150, and accessible since line 14 is also in the function scope.

8. This function will return [50, 100, 150], which is the value of discounted. After running the for loop, new values updated and pushed to the discounted. varibale of discounted is let, which means we can access discounted in function scope, and return line is also ins the function scope.

9. Throw an error. variable of i is let, which means we cannot access i outside of for loop. Line 11 is out of for loop.
    
10. print output 3. variable of length is defined as counst, which means it cannot be changed after first assigned, and we cannot access length outside of the block. We defined length in the function scope, length=prices.length =3, and this didn't change, line 12 is also inside of function block.
    
11. The function will return [50, 100, 150], which is the value of discounted. variable of discounted is const, values cannot reassigned to discounted. The discounted array didn't change, and the elements in the array can be updated.
    

12. - A. student.name
    - B. student['Grad Year']
    - C. student.greating()
    - D. student['Favorite Teacher'].name
    - E. student.courseLoad[0]


13. 
    - A.'3'+ 2 = 32   because '3' is a string, 2 will automatically convert to a string.  this is a string conversion.
    - B.'3'- 2 = 1    '3' is a string, when do subtraction, because 2 is a number, this is a numeric conversion.
    - C. 3 + null = 3     when do the addition, null has been converted to 0.
    - D.'3'+ null = 3null      because '3' is a string, and null converted to string.
    - E. true + 3 = 4     when do the addition, true has been converted to number 1
    - F. false + null = 0 because false and null both have been converted to 0, add them and get 0
    - G. '3' + undefined = 3undefined     '3' is a string, undefined will also be converted to a string, this is a string conversion.
    - H. '3' - undefined = NaN    '3' is a string, we do subtraction, also we know undefined converted to NaN, this is a numeric convertion.


14. - A.‘2’ > 1               true    '2' has been converted to number 2
    - B.‘2’ < ‘12’            false   '2' and '12' are both strings, in string comparies, they are compared letter-by-letter, we know first char 2 < 1 is false.
    - C.2 == ‘2’              true    2 is a number, and '2' has been converted to number 2.
    - D.2 === ‘2’             false   === means a strict equality operator, and it checks the equality without type conversion. We know they types of 2 and '2' are different because 2 is a number and '2' is a string.
    - E.true == 2             false   true has been converted to 1, we know 1 and 2 are not equal.
    - F.true === Boolean(2)   true    because the first part true is a boolean result, the second part Boolean(2) is true and this is also a boolean result. We know === is strict equality and this checks the data types, and here we have same data types for both part.
    

15.  
    - == means the equality test, and it can check the euqality with type conversions.
    - === means the strict euality check, and this can check the equality without type conversions.
    
16.  
    [see code in part2-question16.js](https://github.com/Oooleaf/fa22-cse110-lab4/blob/main/expose/javascript/part2-question16.js)
    
17.  
    - [2, 4, 6]
    - Because we have input array [1,2,3], the array length of input is 3. We take the input array into function modifyArray for loop, loop 3 times and push it to callback. We also have the function doSomething which will double the input value. Then we call the function with modifyArray([1,2,3], doSomething), then we will double the input value, iterate 3 times and push new value to the newArr.

18. 
    [see code in part2-question18.js](https://github.com/Oooleaf/fa22-cse110-lab4/blob/main/expose/javascript/part2-question18.js)
    
19. `1 
     4 
     3 
     2`