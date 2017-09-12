/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
    flatteNode(root, null);
};

var flatteNode = function (root, prev) {
    if (!root) return prev;
    prev = flatteNode(root.right, prev);
    prev = flatteNode(root.left, prev);
    root.left = null;
    root.right = prev;
    return root;
};
