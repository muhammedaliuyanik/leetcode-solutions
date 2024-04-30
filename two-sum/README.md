# Problem Description

- Find pairs of numbers in the array whose binary sums are equal to the target.
- Read the first and second elements of the array, then sum them.
- Check if the sum is equal to the target.
- If it is, output the indices of the elements being looked at.
- This condition can be satisfied multiple times; the resulting ranges should be obtained.
- The found ranges should be stored in an array, and the first and last numbers should be outputted.

# Complexity
- O(n^2)	The code contains nested loops where each loop iterates over the entire 'nums' array. Therefore, the time complexity is O(n^2) where 'n' is the number of elements in the 'nums' array.

![](submit.png)