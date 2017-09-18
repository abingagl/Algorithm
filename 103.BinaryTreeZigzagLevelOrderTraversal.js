/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [][];

    while (root.next)
};

var divide = function (node, order) {
    if (!node) return null;
    if (order) {
        return [node.left, node.right];
    } else {
        return [node.right, node.left];
    }
};