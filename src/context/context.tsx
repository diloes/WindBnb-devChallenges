import { createContext, useState } from 'react'
import { useContext } from 'react'

import staysJson from '../stays.json'
// Creamos el contexto
const AppContext = createContext({})

// Un custom hook para usar el context(opcional)
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useAppContext must be used within a TaskProvider')
  return context
}

// Componente que provee el contexto
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [stays] = useState(staysJson)
  const [newStays, setNewStays] = useState(stays)

  const findByCity = (city: string) => {
    const filteredHouses = stays.filter((house) => {
      return house.city === city
    })

    setNewStays(filteredHouses)
  }

  return (
    <AppContext.Provider value={{ newStays, findByCity }}>{children}</AppContext.Provider>
  )
}
