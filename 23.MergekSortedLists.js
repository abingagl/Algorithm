/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists || !lists.length) return [];
    return divideAndConquer(lists, 0, lists.length - 1);
};

var divideAndConquer = function (lists, left, right) {
    if (left === right) return lists[right];
    const mid = Math.floor((left + right) / 2);
    const leftList = divideAndConquer(lists, left, mid);
    const rightList = divideAndConquer(lists, mid + 1, right);
    return merge2Lists(leftList, rightList);
};

var merge2Lists = function (l1, l2) {
    if (!l1 || !l2) return l1 || l2;
    const head = new ListNode();
    let curr = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1) {
        curr.next = l1;
    }
    if (l2) {
        curr.next = l2;
    }
    return head.next;
};

mergeKLists([[],[]])