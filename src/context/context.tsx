import { createContext, useContext, useState } from 'react'
//import { useContext } from 'react'

import staysJson from '../stays.json'
import { Stay } from '../stay.interface'

export type StayContext = {
  newStays: Stay[]
  findByCityAndGuests: (city: string, guests: number) => void
  setLocation: (city: string) => void
  location: string
  guests: number
  setGuests: (guests: number) => void
}

// Creamos el contexto
export const AppContext = createContext<StayContext>({
  newStays: [],
  findByCityAndGuests: () => {},
  setLocation: () => {},
  location: '',
  guests: 0,
  setGuests: () => {}
})

// Un custom hook para usar el context(opcional)
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within a TaskProvider')
  return context
}

// Componente que provee el contexto
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [stays] = useState(staysJson)
  const [newStays, setNewStays] = useState<Stay[]>(stays)
  const [location, setLocation] = useState<string>('Whole')

  const [guests, setGuests] = useState(0)

  const findByCityAndGuests = (city: string, guests: number) => {
    if (city !== 'Whole' && guests !== 0) {
      const filteredHouses = stays.filter((house) => {
        return house.city === city
      })

      setNewStays(filteredHouses)
    }

    if (city !== 'Whole' && guests === 0) {
      const filteredHouses = stays.filter((house) => {
        return house.city === city
      })

      setNewStays(filteredHouses)
    }

    if (guests !== 0 && city === 'Whole') {
      const filteredHouses = stays.filter((house) => {
        return house.maxGuests >= guests
      })

      setNewStays(filteredHouses)
    }
  }

  return (
    <AppContext.Provider
      value={{
        guests,
        setGuests,
        newStays,
        findByCityAndGuests,
        location,
        setLocation
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
