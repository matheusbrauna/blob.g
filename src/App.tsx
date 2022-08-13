import { Center } from '@chakra-ui/react'
import { VerticalCard } from './components/card/VerticalCard'
import { Header } from './components/commons/Header'

import { verticalCards } from './components-mock.json'

export function App() {
  return (
    <>
      <Header />
      <Center>
        {verticalCards.map((card) => (
          <VerticalCard key={card.title} card={card} />
        ))}
      </Center>
    </>
  )
}
