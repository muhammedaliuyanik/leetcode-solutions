# Intuition

<!-- 
    Palindrome: A number that reads the same backward as forward, e.g., 212.
    It should be symmetric!
    Given a number x, return true if it is a palindrome, otherwise return false.
    
    1) Check the first and last digit of the given number.
        If they are equal, continue to check symmetrically.
        312213 - This number has an even number of digits.
        22122 - This number has an odd number of digits.
        -121 - Negative numbers are not palindromes.
-->

# Complexity

- Time complexity:
    <!-- 
        O(n) - The code iterates through half of the input number's digits to check if it is a palindrome. 
        Therefore, the time complexity is O(n) where n is the number of digits in the input number. 
    -->

![leetcode Solution Runtime & Memory](https://prnt.sc/3gKFwSx7GOrV)
