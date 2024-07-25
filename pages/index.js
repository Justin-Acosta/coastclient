import { useAppContext } from '@/context/state.js'
import Layout from '../components/layout'
import {Home} from './home'
import { useState,useEffect } from 'react'


export default function Index() {
  return (
    <Home/>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}