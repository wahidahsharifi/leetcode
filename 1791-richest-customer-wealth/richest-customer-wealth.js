var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(account => account.reduce((a,c) => a + c)))
};