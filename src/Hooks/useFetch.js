import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
     const [data, setData] = useState([])
     const [loading, setLoading] = useState(false)
    //  let apiUrl = 'https://fakestoreapi.com/products/14'
     let fetchData = async () => {
       try {
         setLoading(true)
         let fetchRequest = await fetch(url)
         let response = await fetchRequest.json()
        //  console.log(response)
         setData(response)
       } catch (error) {
         console.log(error)
       } finally {
         setLoading(false)
       }
     }
     useEffect(() => {
       fetchData()
     }, [url])
  return {data,loading}
}

export default useFetch