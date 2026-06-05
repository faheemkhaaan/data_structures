function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {


    const result = new ListNode();

    let p1 = list1.val;
    let p2 = list2.val;

    if (p1 > p2) {
        result.val = p1;
        result.next = new ListNode(p2);
    } else {
        result.val = p2;
        result.next = new ListNode(p1);
    }

    while (list1.next || list2.next) {
        p1 = list1.next.val;
        p2 = list2.next.val;

        if (p1 > p2) {
            result.val = p1;
            result.next = new ListNode(p2);
        } else {
            result.val = p2;
            result.next = new ListNode(p1);
        }
        list1.next = list1.next.next;
        list2.next = list2.next.next;
    }
    return result
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const result = mergeTwoLists(list1, list2);
console.log(result);

