


//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

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
var deleteDuplicates = function (head) {

    const result = new ListNode();
    let current = head;
    let seen = current.val;
    while (current) {
        if (seen !== current.val) {
            result.next = current;
        }
        seen = current.val;
        current = current.next;
    }
    return result.next;
};






const head = new ListNode(1, new ListNode(1, new ListNode(2)));
const result = deleteDuplicates(head);
console.log(result);