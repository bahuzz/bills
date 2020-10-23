import { from } from 'rxjs'
import { Bill } from './interfaces/bill';

export const Bills:Bill[] = [
  {id: 1, name: 'Интернет', price: 600, months: [1,6]},
  {id: 2, name: 'Домашний телефон', price: 500, months: [3,5]},
  {id: 3, name: 'Мобильный телефон', price: 300, months: [9]},
  {id: 4, name: 'Фитнес', price: 1000, months: []},
  {id: 5, name: 'Музыка', price: 200, months: []},
]
