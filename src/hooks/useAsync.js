import { useCallback, useEffect, useState } from "react"

export default function useAsync(callback, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()
  const [args, setArgs] = useState(null);

  const execute = useCallback((...params) => {
    setArgs(params);
  }, []);

  const callbackMemoized = useCallback(async () => {
    try {
      setLoading(true)
      setError(undefined)
      setValue(undefined)

      const value = args ? await callback(...args) : await callback()
      setValue(value)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [...dependencies, args])

  useEffect(() => {
    if (args === null) {
      callbackMemoized()
    }
  }, [callbackMemoized])
  
  useEffect(() => {
    if (args !== null) {
      callbackMemoized();
    }
  }, [args, callbackMemoized]);

  return { loading, error, value, execute }
}