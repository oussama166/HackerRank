import { timeStamp } from "console";

/**
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */
export const climbingTheLeaderBoard = (
  ranked: number[],
  player: number[]
): number[] => {
  // we have first list of the user already on the leaderboard  ranked[]
  // after this we have new player in the game who had the follwing points player[]

  // TODO : to give the the updated leaderbord postions of the new player using the player[] and ranked[]
  const finalResult: number[] = [];

  // Sort the ranked array in descending order initially
  ranked.sort((a: number, b: number) => b - a);

  // Function to find the index where the new score should be inserted
  function binarySearchInsertIndex(arr: number[], score: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (arr[mid] === score) {
        return mid;
      } else if (arr[mid] < score) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return low;
  }

  // Iterate through each player's score
  player.forEach((elem) => {
    // Find the index where the new score should be inserted
    const insertIndex = binarySearchInsertIndex(ranked, elem);

    // The rank of the new score is the index where it was inserted
    finalResult.push(insertIndex + 1);

    // Insert the new score into the ranked array
    ranked.splice(insertIndex, 0, elem);
  });

  return finalResult;
};

console.log(
  climbingTheLeaderBoard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
