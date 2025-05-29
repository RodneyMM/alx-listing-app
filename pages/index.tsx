import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to ALX Listings</h1>
        <Card title="Sample Listing" image="/assets/placeholder.jpg" />
        <div className="mt-4">
          <Button label="Book Now" onClick={() => alert('Booked!')} />
        </div>
      </main>
    </>
  )
}