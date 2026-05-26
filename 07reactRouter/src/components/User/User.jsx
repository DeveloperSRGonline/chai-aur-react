import { useParams } from 'react-router-dom'

function User() {
    // to get the params value 
    const {userid} = useParams()
  return (
    // getting dynamic date from param
    <div className='bg-gray-600 text-white text-center text-5xl italic p-4 mt-15'>User: {userid}</div>
  )
}

export default User