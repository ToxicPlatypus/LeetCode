def sort_list(head)
  arr = []
  temp = head
  while temp
    arr.push(temp.val)
    temp = temp.next
  end

  arr.sort!
  i = 0
  temp = head

  while i < arr.length
    temp.val = arr[i]
    temp = temp.next
    i += 1
  end
  head
end