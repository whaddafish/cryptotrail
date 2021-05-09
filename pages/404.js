import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()
  const [timer, setTimer] = useState(5)

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  })

  useEffect(() => {
    setInterval(() => {
      var count = timer
      setTimer(count-=1)
    }, 1000)
  })

  return (
    <div className="notFound">
      <h1>Ooooops....</h1>
      <h2>That page can not be found</h2>
      <p>Go back to <Link href="/"><a className="redirect-to-home">Homepage</a></Link></p>
      <h3>Auto-redirecting to homepage in {timer}...</h3>
    </div>
  )
}

export default NotFound
