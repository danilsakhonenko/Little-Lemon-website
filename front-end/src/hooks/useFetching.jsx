import { useState } from "react"

export const useFetching=(callback)=>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async(...callbackArgs)=>{
        try {
            setIsLoading(true);
            await callback(...callbackArgs);
        } catch (error) {
            setError(error.message);
        }finally{
            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error]
}