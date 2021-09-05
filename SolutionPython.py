from math import factorial as f

# factorial() method is a library method of math module, 
# it is used to find the factorial of a given number, 
# it accepts a positive integer number and returns the factorial of the number.

# Pascal's triangle logic
# nCr = n!/((n-r)!*r!)

#                   0C0
#               1C0     1C1
#           2C0     2C1     2C2
#       3C0     3C1     3C2     3C3
#   4C0     4C1     4C2     4C3     4C4
#   .
#   .
#   .
#   .
#   .
# continues


N = int(input("Enter number of rows for generating Pascal's triangle : "))
for i in range(N):
    for j in range(i+1): 
        print(f(i)//(f(j)*f(i-j)), end=" ")
 
    # for new line
    print()
    
