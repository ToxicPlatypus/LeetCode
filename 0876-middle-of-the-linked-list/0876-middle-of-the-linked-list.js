/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow = fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;

    //$$$$$$$$$$$ Another Solution $$$$$$$$$$$$$$$$
    // let temp = head, count=1;
    // while(temp.next){
    //     temp = temp.next;
    //     count++;
    // }
    // count = parseInt(count/2);

    // while(count){
    //     head = head.next;
    //     count--;
    // }
    // return head;
}