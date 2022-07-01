export class Solution {
  /**
   * @param nums: An integer array
   * @return: The length of LIS (longest increasing subsequence)
   */
  longestIncreasingSubsequence(nums) {
    // write your code here
    const stk = []

    for(const e of nums) {
        if(stk.length === 0 || e > stk[stk.length - 1]) {
            stk.push(e)
            continue
        }
        let l = 0, r = stk.length - 1
        while(l < r) {
            const mid = l + ((r- l) >> 1)
            if(stk[mid] < e) l = mid + 1
            else r = mid
        }
        stk[l] = e
    }

    return stk.length
  }
}
