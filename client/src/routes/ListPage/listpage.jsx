import React from 'react'
import { listData } from '../../../../lib/dummydata'
import "./listpage.scss"
import Filter from "../../components/filter/filter"
import Card from "../../components/card/card"

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
          <div className="tst">
            some text
          </div>
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  )
}
