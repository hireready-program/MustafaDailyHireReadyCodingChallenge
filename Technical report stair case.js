/* 

** General Information

  Platform: HackerRank
  
  Date: 30/1/2026
  
  Language: JavaScript
  
  Collaboration: Team
  
  Challenge Name: Staircase
  
  Challenge Link:
  https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
** Problem Description:

  Complete the  function with the following parameter(s):

: an integer
Print

Print a staircase as described above. No value should be returned.
Note: The last line is not preceded by spaces. All lines are right-aligned.

Input Format

A single integer, , denoting the size of the staircase.

Constraints
*/
//The Solution:

      function staircase(n) {
  // a for loop to iterate n times
    for(let i =1;i <= n;i++){
//printing the (n-i)number as spaces before the "#" to match the correct pattern 
    console.log(" ".repeat(n-i) + "#".repeat(i))       
    }

}
