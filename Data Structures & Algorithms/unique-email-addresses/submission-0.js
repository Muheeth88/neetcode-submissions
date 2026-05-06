class Solution {
    numUniqueEmails(emails) {
       const set = new Set();

        for (let email of emails) {
            let [local, domain] = email.split("@");

            if (local.includes("+")) {
                local = local.slice(0, local.indexOf("+"));
            }

            local = local.replaceAll(".", "");

            set.add(local + "@" + domain);
        }

        return set.size;
    }
}
