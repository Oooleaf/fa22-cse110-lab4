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
    
12. A. student.name
    B. student['Grad Year']
    C. student.greating()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. A.'3'+2 = 32
    B.'3'-2 = 1
    C. 3 + null = 3
    D.'3'+ null = 3
    E. true + 3 = 4
    F. false + null = 0
    G. '3' + undefined = 3undefined
    H. '3' - undefined = NaN

14. yesabcdef
    
15.  yes gogogo
    
16.  see code
    
17.  yes gogogo

18. see code 
    
19. yes gogogo