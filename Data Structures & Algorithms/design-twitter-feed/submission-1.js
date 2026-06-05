class Twitter {
    constructor() {
        this.userId = crypto.randomUUID();
        this.tweets = new Map();
        this.follows = new Map();
        this.followers = new Map();
        this.time = 0;
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let userTweets = this.tweets.get(userId) || [];
        userTweets.push([tweetId, this.time++]);
        this.tweets.set(userId, userTweets);
        return tweetId;
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        let allTweets = [];

        // User's own tweets
        const userTweets = this.tweets.get(userId) || [];
        allTweets.push(...userTweets);

        // Tweets of followed users
        const following = this.follows.get(userId) || [];

        for (let followeeId of following) {
            const tweets = this.tweets.get(followeeId) || [];
            allTweets.push(...tweets);
        }

        // Sort newest first
        allTweets.sort((a, b) => b[1] - a[1]);

        // Return latest 10 tweetIds
        return allTweets.slice(0, 10).map((tweet) => tweet[0]);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId === followeeId) return;
        let following = this.follows.get(followerId) || [];

        if (!following.includes(followeeId)) {
            following.push(followeeId);
        }

        this.follows.set(followerId, following);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
            if (followerId === followeeId) return;
        let following = this.follows.get(followerId) || [];

        const index = following.indexOf(followeeId);

        if (index !== -1) {
            following.splice(index, 1);
        }

        this.follows.set(followerId, following);
    }
}
