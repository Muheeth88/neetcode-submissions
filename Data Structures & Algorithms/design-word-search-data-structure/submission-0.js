class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEnd = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        const dfs = (index, node) => {
            if(index === word.length) {
                return node.isEnd;
            }

            const char = word[index]

            if(char === ".") {
                for (let child in node.children) {
                    if(dfs(index + 1, node.children[child])) {
                        return true
                    }
                }
                return false
            }

            if(!node.children[char]) {
                return false
            }

            return dfs(index+1, node.children[char])
        }


        return dfs(0, this.root);
    }
}

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}
