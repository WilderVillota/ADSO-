import sys
array = [64, 34, 25, 12, 22, 11, 90]

def selectionsort(array)
   for i in range(len(array)):
       idxDES = i
       for j in range(i + 1, len(array)):
          if array[inxDES] > array[j]:
              idxDES = j


               array[i], array[idxDES] = array[idxDES], array[i]



selectionsort(array)
print("array ordenado:",)
for i in range(len(array)):
    print("%d" % array[i],)