/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;

    var leftList = [];
    var rightList = [];
    leftOrder(root.left, leftList);
    rightOrder(root.right, rightList);

    if (leftList.length !== rightList.length) return false;

    for (let i = 0; i < leftList.length; i++) {
        if (leftList[i] !== rightList[i]) {
            return false;
        }
    }

    return true;
};

var leftOrder = function(root, leftList) {
    leftList.push(root && root.val);
    if (!root) return ;
    leftOrder(root.left, leftList);
    leftOrder(root.right, leftList);
}

var rightOrder = function(root, rightList) {
    rightList.push(root && root.val);
    if (!root) return ;
    rightOrder(root.right, rightList);
    rightOrder(root.left, rightList);
}