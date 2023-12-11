/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    let slow = fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast)
            return true;
    }
    return false;
};

/*
var hasCycle = function(head) {
    s = new Set();
    while(head != null){
        if(s.has(head))
            return true;
        s.add(head);
        head = head.next;
    }
    return false;
}; */