import { AppWrapper, useAppContext } from '@/context/state.js'
import Layout from '../components/layout'
import { Home } from './home.js'
import { LocationsBar } from '@/components/locations-bar.js'
import { Items } from '@/components/items.js'
import { Background } from './background.js'
import { PlayerProfile } from '@/components/profile.js'




export default function Index() {

  return (
    <Home />
  )
}

Index.getLayout = function getLayout(page) {


  if (true) {
    console.log('fart')
  }
  return (

    <Layout>
      <Background />
      <LocationsBar />
      <div className='rightContainer'>
        <div className='mainContainer'>
          <PlayerProfile />
          {page}
        </div>
        <Items />
      </div>
    </Layout>


  )
}