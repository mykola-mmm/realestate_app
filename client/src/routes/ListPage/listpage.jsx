import React from 'react'
import { listData } from '../../lib/dummydata'
import "./listpage.scss"
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"
import Map from "../../components/map/map"

export default function ListPage() {

  const data = listData

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {
            data.map((item, id) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}
