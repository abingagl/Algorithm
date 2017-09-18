class Solution(object):
    def findWords(self, board, words):
        """
        :type board: List[List[str]]
        :type words: List[str]
        :rtype: List[str]
        """


        def find(self, board, i, j, trie, pre):
            if '#' in trie:
                