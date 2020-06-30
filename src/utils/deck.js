import frontCanada from '../assets/canada.svg'
import frontUsa from '../assets/usa.svg'
import frontRussia from '../assets/russia.svg'
import frontUk from '../assets/uk.svg'
import frontGermany from '../assets/germany.svg'
import frontFrance from '../assets/france.svg'
import frontChine from '../assets/china.svg'
import frontItaly from '../assets/italy.svg'

const shuffle = (arr) => {
  const _arr = arr.slice(0)
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let temp = _arr[i]
    _arr[i] = _arr[randomIndex]
    _arr[randomIndex] = temp
  }
  return _arr
}

export default () => {
  let id = 0
  const cards = [
    {type: 'canada', front: frontCanada},
    {type: 'usa', front: frontUsa},
    {type: 'russia', front: frontRussia},
    {type: 'uk', front: frontUk},
    {type: 'germany', front: frontGermany},
    {type: 'france', front: frontFrance},
    {type: 'china', front: frontChine},
    {type: 'italy', front: frontItaly},
  ]

    .reduce((acc, card) => {
        acc = [...acc, {id: id++, ...card}]
        acc = [...acc, {id: id++, ...card}]
      return acc

    }, [])
  return shuffle(cards)
}