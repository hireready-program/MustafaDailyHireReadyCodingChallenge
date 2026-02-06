/* 

** General Information

  Platform: Hacker Rank
  
  Date: 2/6/2026
  
  Language: JavaScript
  
  Collaboration: Team
  
  Challenge Name: Sales By Match  
  Challenge Link:
  https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

** Problem Description:

 There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

Constraints

 where 
Sample Input

STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

** The Solution with js:

    function sockMerchant(n, ar) {
    // Write your code here
    let pairs  = 0
    ar.sort((a,b)=> a-b)
    for(let i =0;i<ar.length;i++){
        if(ar[i]==ar[i+1]){
            pairs++
            i=i+1
        }
    }
    return pairs
}

** Logic Explanation:
We solved a HackerRank problem about pairing socks. The input consists of the number of socks and an array where each number represents a sock color. 
The goal is to return the total number of matching pairs.
Our approach was to first sort the array so that socks of the same color are adjacent. Then we traversed the array, 
and whenever two consecutive elements had the same value, we counted one pair and skipped the next element to avoid reusing a sock.
  
*/
function sockMerchant(n, ar) {
    // Write your code here
    let pairs  = 0
    ar.sort((a,b)=> a-b)
    for(let i =0;i<ar.length;i++){
        if(ar[i]==ar[i+1]){
            pairs++
            i=i+1
        }
    }
    return pairs
}
