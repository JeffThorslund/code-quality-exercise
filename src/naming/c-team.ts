const getOISDataFromMainFloor = (list1: number[][]): number[] => {
  const list2: number[] = [];

  for (let i = 0; i < list1.length; i++) {
    if (list1[i][list1[i].length - 1] == 4) {
      list2.push(list1[i][0]);
    }
  }

  return list2;
};

/**
 * STEP 1
 *
 * Write out 3 questions that you have this function, that you were unable to determine from reading this code.
 *
 * 1.
 * 2.
 * 3.
 */

/**
 * STEP 2
 * Rename anything you want in this function in a way that answers the 3 questions written above.
 *
 * You may create function, rename functions, and create new variable bindings, but nothing else!
 */

/**
 * STEP 3
 *
 * Seeing the updated code, do you feel that your questions were answered?
 *
 * 1.
 * 2.
 * 3.
 */

export {};
