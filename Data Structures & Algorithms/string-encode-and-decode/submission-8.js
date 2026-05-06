class Solution {

    splitter = "|"
    encode(strs) {
        if(strs.length === 0) return ""
        let encoded = strs.join(this.splitter) + this.splitter
        return encoded
    }

    decode(str) {   
        if (!str) return []
    let decoded = str.split(this.splitter)
    console.log(decoded) 
    return decoded.slice(0, -1)
    }
}
