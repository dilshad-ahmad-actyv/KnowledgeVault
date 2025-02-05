
def plusOne (digits):
    carry = 1
    n = len(digits)

    for i in range(n-1, -1, -1):
        sum = digits[i] + carry

        if sum == 10:
            digits[i] = 0
            carry = 1
        else:
            digits[i] = sum
            carry = 0
    
  

    if carry == 1:
        digits.insert(0, 1)
  
    return digits


digits = [9]
print(plusOne(digits))
