// Escreva um programa que receba o nome de uma peça de xadrez e 
// retorne os movimentos que ela faz.

const piece = 'KING'

switch (piece.toLowerCase()) {
  case 'pawn':
    console.log('Verticaly one square')
    break
  case 'knight':
    console.log('In a L shape.')
    break
  case 'bishop':
    console.log('Diagonals')
    break
  case 'rook':
    console.log('Horizontally or vertically')
    break
  case 'queen':
    console.log('Diagonally, horizontally, or vertically')
    break
  case 'king':
    console.log('One square in any direction')
    break
  default:
    console.log('Invalid piece')
}