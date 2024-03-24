'use client'


import { useEffect, useState } from "react"

interface Props{
    slug: string
}


export const StockLabel = ({slug}:Props) => {

    const [stock, setStock] = useState(0)

    const [isLoading, setIsLoading] = useState(true)

 

  
  return (
    <>

        <h1 className="antialiased font-bold text-xl">
            Disponible: {stock}
        </h1>
        
    </>
  )
}

