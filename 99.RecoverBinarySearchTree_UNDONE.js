/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var firstNode = null;
var secondNode = null;
var prevNode = new TreeNode(-Number.MIN_VALUE);

var recoverTree = function (root) {

    traverse(root);

    console.log(firstNode);
    console.log(secondNode);

    if (firstNode && secondNode) {
        [firstNode.val, secondNode.val] = [secondNode.val, firstNode.val]
    }

    console.log(firstNode);
    console.log(secondNode);
};

var traverse = function (root) {
    if (!root) return;

    traverse(root.left);

    if (prevNode.val >= root.val) {
        if (!firstNode) {  
            firstNode = prevNode;
        }
    }

    if (prevNode.val >= root.val) {
        if (firstNode) {
            secondNode = root;
        }
    }

    prevNode = root;

    traverse(root.right);
};

var a = new TreeNode(2);
a.right = new TreeNode(1);

recoverTree(a)