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

/**
 * 一个机器人位于一个 m x n 网格的左上角。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角。
 * 问总共有多少条不同的路径
 * 1. dp[i][j] 代表到 i,j 位置的路径数
 * 2. dp[i][j] = dp[i-1][j] + dp[i][j-1]
 * 3. dp[i][0] = i dp[0][j] = j
 */
const dp3 = function (i, j) {
  const dp = new Array(i).fill(0).map((x, xIndex, arr) => {
    return new Array(j).fill(0).map((y, yIndex) => {
      if (xIndex === 0) {
        console.log(`(${xIndex}, ${yIndex})`)
        return 1
      } else if (yIndex === 0) {
        console.log(`(${xIndex}, ${yIndex})`)
        return 1
      } else {
        return 0
        const total = (arr[xIndex - 1][yIndex] + arr[xIndex][yIndex - 1])
        console.log(`(${xIndex}, ${yIndex}), ${JSON.stringify(arr)}, ${arr[xIndex - 1][yIndex]}, ${arr[xIndex][yIndex - 1]}, ${total}`)
        return total
      }
    })
  })

  dp.forEach((x, xIndex, arr) => {
    a.forEach((y, yIndex) => {
      y = arr[xIndex - 1][yIndex] + arr[xIndex][yIndex - 1]
    })
  })

  console.log(dp)

  return dp[i - 1][j - 1]
}

console.log(dp3(5, 5))