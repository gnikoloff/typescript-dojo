const timeout = n => new Promise(res => setTimeout(res, n));
async function addNums(a, b) {
    await timeout(500);
    return a + b;
}
(async () => {
    console.log('result is ' + await addNums(5, 5));
})();
