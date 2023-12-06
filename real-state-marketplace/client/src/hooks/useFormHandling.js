import { useState } from "react"

export function useFormHandling() {
    const [error, setError] = useState(null) 
    const [loading, setLoading] = useState(false)

    const handleAsyncFunction = async (asyncFunction) => {
        try {
            setLoading(true)
            await asyncFunction()
            setError(null)
        } catch (error) {
            setError(error.message)
            throw error.message
        } finally {
            setLoading(false)
        }
    }

    const setErrorHandler = (error) => {
        setError(error)
    }

    return { 
        error, 
        setErrorHandler, 
        loading, 
        handleAsyncFunction 
    }
}