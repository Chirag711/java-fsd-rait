"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {

    const router = useRouter()

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(!token){
            router.push("/login")
        }
    },[])

    const handleLogout = () => {
        localStorage.removeItem("token")
        router.push("/login")
    }


  return (
    <div>
      dashboard page...
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default page
