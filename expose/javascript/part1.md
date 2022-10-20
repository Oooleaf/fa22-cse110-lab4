[var declaration]

  1.What is printed by line 9? If the code returns an error, explain why. ^^^^^
    values added:  20
    because num1 = 10, num2 = 10, we are at add if condition, result = num1 + num2 = 10 + 10 = 20, then print result get 20.

  2.What is printed by line 13? If the code returns an error, explain why. 
    final result:  20
    because we already get result = 20 which is if part, and we will not run the else return which means we will not exit function. We are still in the function scope, and print the result which is 20


[let declaration]

  3. What is printed by line 9? If the code returns an error, explain why. ^^^^^  
  values added:  20

  4. What is printed by line 13? If the code returns an error, explain why. 
  the code returns an error.
  because we delcare the type of result is let, which means it will only works in the block scope. It can only be accessed within the block it is defined in. Line 13 is already out of the if block, then it returns an error.
  
[const declaration]

  5. What is printed by line 9? If the code returns an error, explain why. ^^^^^
  the code returns an error.
  The const will only works in the block scope. The result already be assgined as 10, and it cannot be reassigned after this, then it returns an error, the program stopped, and it cannot go to line 9.
  
  6. What is printed by line 13? If the code returns an error, explain why. 
  the code returns an error.
  The const will only works in the block scope. The result already be assigned as 10, and it cannot be reassigned after this, then it returns an error, the program stopped, and it cannot go to line 13.


