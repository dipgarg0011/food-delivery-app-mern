import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/exploremenu/exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category}  />
      <Appdownload/>
    </div>
  )
}

export default Home
