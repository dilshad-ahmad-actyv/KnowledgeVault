class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 0: return None
        if x == 0 or x == 1: return x

        precision = 0.00001
        low = 0
        high = x
        mid = None
        while (high - low) > precision:
            mid = low + (high - low)/2

            if mid*mid > x:
                high = mid
            else:
                low = mid

        return int(high)
        