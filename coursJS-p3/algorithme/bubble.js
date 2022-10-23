//Exercice algorithmique méthode bubble Sort
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array);
      }
    }
  }
  console.log(array);
}

bubbleSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);

//----------------------------------------------------
//Méthode plus rapide en JS pour trier avec la méthode sort() (commenté pour pas géner le reste du code)
// function bubble(array) {
//   console.log(array.sort((a, b) => a - b));
// }

// bubble([451, 2, 65, 4, 7, 98, 2, 3, 1]);
//------------------------------------------------------
