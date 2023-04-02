import sys
from decimal import Decimal

sum = 0 # define sum as a global variable
power = 0 # define power as a global variable
max_val = (3**100)/1800
inner_sum = 0

sys.setrecursionlimit(20000)

result_poly = ""


def calculate(x):
    global power
    return x**power

def main():
    global max_val
    global sum # declare sum as a global variable
    global power
    global result_poly
    global constant
    f_n = 0
    for x in range(11):
        f_result = calculate(x)
        f_n += f_result
        sum += f_result
    result_poly += "∑x^" + str(power)
    print("Result of sum from 0 to 10 when power is ", power, " is ", f_n)
    power += 1
    if(sum < max_val):
        result_poly += " + "
        main()
    else:
        print(result_poly + " = " + str(sum))


def calculate_individually(x):
    global inner_sum
    sum_dummy = 0
    for power in range(46):
        sum_dummy += (x**power)
        inner_sum += (x**power)
    print("Result of f(" + str(x) + ") is " + str(sum_dummy))

if __name__ == "__main__":
    main()
    for x in range(11):
        calculate_individually(x)
    print(inner_sum == sum)