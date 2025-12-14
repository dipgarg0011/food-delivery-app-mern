import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/exploremenu/exploremenu'
import Fooddisplay from '../../components/Fooddisplay/Fooddisplay'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category}  />
    </div>
  )
}

export default Home
