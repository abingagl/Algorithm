/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// ListNode.prototype.toString = function () {
//     var arr = [];
//     var that = this;
//     do {
//         arr.push(that.val);
//         that = that.next
//     } while (that)
//     return `[${arr.toString()}]`;
// }

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0);
    var curr = head;
    var overflow = 0;
    while (l1 || l2) {
        var a = l1 ? l1.val : 0;
        var b = l2 ? l2.val : 0;
        var sum = (a + b + overflow) % 10;
        curr.next = new ListNode(sum);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        curr = curr.next;
        overflow = ( a + b + overflow ) > 9 ? 1 : 0;
    }
    if (overflow) {
        curr.next = new ListNode(overflow);
    }

    var result = listToArray(head);
    return result;
};

var listToArray = function (head) {
    var result = [];
    while (head && head.next) {
        head = head.next;
        result.push(head.val);
    }
    return result;
}

// test
var t11 = new ListNode(1);
var t12 = new ListNode(8);
t11.next = t12;
var t21 = new ListNode(0);
console.log(addTwoNumbers(t11, t21));


// test
var t11 = new ListNode(2);
var t12 = new ListNode(4);
var t13 = new ListNode(3);
t11.next = t12;
t12.next = t13;
var t21 = new ListNode(5);
var t22 = new ListNode(6);
var t23 = new ListNode(4);
t21.next = t22;
t22.next = t23;
console.log('' + addTwoNumbers(t11, t21));