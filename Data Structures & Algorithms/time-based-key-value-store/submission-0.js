class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    set(key, value, timestamp) {
        if(!this.keyStore.get(key)) {
            this.keyStore.set(key,[])
        }

        this.keyStore.get(key).push([timestamp, value]);
    }

    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        const arr = this.keyStore.get(key)

        let left = 0
        let right = arr.length - 1

        let result = "";


        while (left <= right) {
            let mid = Math.floor((left + right)/2)
            let currentTimeStamp = arr[mid][0]
            if(currentTimeStamp === timestamp) {
                result = arr[mid][1]
                return result
            }

            if (currentTimeStamp < timestamp) {
                result = arr[mid][1]
                left = mid + 1
            }

            if (currentTimeStamp > timestamp) {
                right = mid - 1
            }
        }

        return result
    }
}
