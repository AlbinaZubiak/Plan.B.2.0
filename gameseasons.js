const gameSeasons = () => {
  let monthNumber = Number(prompt('Введите номер месяца'));
  switch (monthNumber) {
    case 1: case 2: case 12:
      alert('зима');
      break;

    case 3: case 4: case 5:
      alert('весна');
      break;

    case 6: case 7: case 8:
      alert('лето');
      break;

    case 9: case 10: case 11:
      alert('осень');
      break;

    default:
      alert('такого месяца нет!');
      break;
  }
}

/*game 2*/
let gameWords = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
gameWords = gameWords.sort(() => Math.random() - 0.5);
alert(gameWords.join(', '));

let answer = () => {
  let question1 = prompt('Чему равнялся первый элемент массива?');
  let question2 = prompt('Чему равнялся последний элемент массива?');
  if (question1.toLowerCase() === gameWords[0].toLowerCase() && question2.toLowerCase() === list[list.length - 1].toLowerCase()) {
    alert('Поздравляем, вы угадали оба элемента!')
  } else if (question1.toLowerCase() === gameWords[0].toLowerCase() || question2.toLowerCase() === list[list.length - 1].toLowerCase()) {
    alert('Вы были близки к победе!');
  } else {
    alert('Неверный ответ')
  }
}
answer()