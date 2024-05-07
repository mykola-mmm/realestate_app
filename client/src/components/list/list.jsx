import React from 'react'
import {listData} from '../../lib/dummydata'
import Card from '../card/card'
import './list.scss'

export default function List() {
  return (
    <div className='list'>
        {
            listData.map((item, index) => (
                <Card key={item.id} item={item}></Card>
            ))
        }
    </div>
  )
}
