"use client"

import { StoreModal } from "@/components/modals/store-modal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    // This allows the client to be mounted
    // So until it's done, we return null
    // So there is no hydration issue
    useEffect(() => {
        setIsMounted(true)
    }, [])

    // If it's not mounted, 
    // it means we're on the server side
    if (!isMounted) {
        return null
    }

    return (
        <>
            <StoreModal />
        </>
    )
}