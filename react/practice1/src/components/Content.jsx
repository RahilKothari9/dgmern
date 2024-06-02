import React, { useEffect, useState } from 'react'

const Content = ({section}) => {
  const url = {
    'users': 'https://jsonplaceholder.typicode.com/users',
    'posts': 'https://jsonplaceholder.typicode.com/posts',
    'comments': 'https://jsonplaceholder.typicode.com/comments'
  }

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    var fetchAdd = url[section];
    const getInfo = async (endpoint) => {
      setLoading(true);
      const response = await fetch(endpoint)
      try {
          const result = await response.json();
          setData(result)
      }
      catch (err)
      {
        console.log(err);
      }
      finally {
        setLoading(false);
      }

    }
    getInfo(fetchAdd);
  }, [section])
  return (
    (loading)? <h2>Content is Loading</h2>
    :
      <ul>
        {data.map((item)=>{

          return(<li key={item.id}>{JSON.stringify(item)}</li>)
           
        })}
      </ul>
      
  )
}

export default Content