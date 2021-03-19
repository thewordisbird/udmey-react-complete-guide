import { useState, useEffect } from 'react';

const useHttpErrorHandler = (httpClient) => {
  const [error, setError] = useState()
    
  const reqInterceptor = httpClient.interceptors.request.use(req => {
    setError(null)
    return req
  })
  const respInterceptor = httpClient.interceptors.response.use(
    resp => resp,
    err => {
    setError(err)
    return Promise.reject(err)
  })
  
  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor)
      httpClient.interceptors.response.eject(respInterceptor)
    }
  }, [reqInterceptor, respInterceptor, httpClient])
 

  const errorConfirmedHandler = () => {
    setError(null)
  }

  return [
    error, 
    errorConfirmedHandler
  ]
}

export default useHttpErrorHandler;