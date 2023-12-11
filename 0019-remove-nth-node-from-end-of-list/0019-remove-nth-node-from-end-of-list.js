/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    count = 1;
    temp = head;
    while(temp.next != null){
        temp = temp.next;
        count++;
    }
    if(count == n){
        newHead = head.next;
        return newHead;
    }
    else{
        count = count - n;
        temp = head;
        while(temp.next != null){
            count--;
            if(count == 0){
                deleteNode = temp.next;
                temp.next = temp.next.next;
                return head;
            }
            temp = temp.next;
        }
    }
};
