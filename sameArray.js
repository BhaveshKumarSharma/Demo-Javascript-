const array1 = [1, 2, 3, 4, 15, 80, 29, 23, 12];

const array2 = [1, 2, 3, 4, 5, 0, 9, 23, 12];

function checkSameArray(A, B) {
  let sortArray1 = A.sort((a, b) => {
    return a - b;
  });
  //   console.log(sortArray1);
  let sortArray2 = B.sort((a, b) => {
    return a - b;
  });

  if (sortArray1 === sortArray2) {
    return "same array";
  } else {
    return "not same";
  }

  // console.log(
  //   JSON.stringify(
  //     A.slice().sort((a, b) => {
  //       return a - b;
  //     })
  //   )
  // );
}

checkSameArray(array1, array2);
