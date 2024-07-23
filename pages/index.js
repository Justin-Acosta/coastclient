import Layout from '../components/layout'
import LocationsBar from '../components/locations-bar'
import {Home} from './home'

export default function Index() {
  return (
    <Home />
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <LocationsBar />
      {page}
    </Layout>
  )
}