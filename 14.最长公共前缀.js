/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return ''
    let idx = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][0] !== str1[j][i] || strs[j] === undefined) {
                return idx;
            }
        }
        idx+=strs[0][i]
    };
    return idx;
};
// @lc code=end

