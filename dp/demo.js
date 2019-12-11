/**
 * 问题描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * 
 * 1. dp[n] 代表跳到第n级台阶有 n 中跳法
 * 2. dp[n] = dp[n-1] + dp[n-2]
 * 3. dp[1] = 1 dp[2] = 2
 */
// function dp1 (n) {
//   if (n <= 2) {
//     return n
//   }

//   return dp1(n-1) + dp1(n-2)
// }

// // console.log(dp1(250))


// function dp2 (n) {
//   const dp = []
//   dp[0] = 1
//   dp[1] = 2
//   for  (let i=2; i<n; i++) {
//     dp[i] = dp[i-1] + dp[i-2]
//   }

//   return dp[n-1]
// }
// console.log(dp2(80))

// /**
//  * 一个机器人位于一个 m x n 网格的左上角。
//  * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。
//  * 问总共有多少条不同的路径
//  * 1. dp[i][j] 代表到 i,j 位置的路径数
//  * 2. dp[i][j] = dp[i-1][j] + dp[i][j-1]
//  * 3. dp[i][0] = i dp[0][j] = j
//  */
// const dp3 = function (m, n) {
//   const dp = new Array(m)
//   for (let i = 0; i < m; i++) {
//     dp[i] = new Array(n)
//     for (let j = 0; j < n; j++) {
//       if ( i === 0 || j === 0) {
//         dp[i][j] = 1
//       } else {
//         dp[i][j] = dp[i][j-1] + dp[i-1][j]
//       }
//     }
//   }
//   console.log(dp)
//   return dp[m - 1][n - 1]
// }

// console.log(dp3(5, 5))

/**
 * 给定一个包含非负整数的mxn网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 *  说明：每次只能向下或者向右移动一步。
 * 1.dp[i][j] 为到 i,j 路径最小数字和
 * 2.dp[i][j] = min(dp[i][j-1], dp[i-1][j]) + arr[i][j]
 * 3.初始值为dp[i][0] = dp[i-1][0] + arr[i][0]  dp[0][j] = dp[0][j-1] + arr[0][j] arr[0][0] = 0
 */
// const dp4 = function (arr) {
//   const m = arr.length
//   const n = arr[0].length

//   const dp = new Array(m).fill(0).map(item => new Array(n))

//   dp[0][0] = arr[0][0]

//   for (let i = 1; i < m; i++) {
//     dp[i][0] = dp[i-1][0] + arr[i][0]
//   }

//   for (let j = 1; j < n; j++) {
//     dp[0][j] = dp[0][j-1] + arr[0][j]
//   }

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + arr[i][j]
//     }
//   }

//   console.log(dp)

//   return dp[m-1][n-1]
// }

// const a = [
//   [1, 4, 5, 7],
//   [5, 3, 2, 2],
//   [6, 1, 1, 7]
// ]

// console.log(dp4(a))


/**
 * 给定两个单词 word1 和 word2，计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 你可以对一个单词进行如下三种操作：
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 */
// 示例 1:
// 输入: word1 = "horse", word2 = "ros"
// 输出: 3
// 解释:
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')
