import React from 'react'
import './homepage.scss'
import Searchbar from '../../components/searchbar/searchbar'

export default function HomePage() {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Tempor incidunt ut labore et dolore
                    </h1>
                    <p>Scribitur textus hic pro demonstratione tantum. Tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <Searchbar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16</h1>
                            <h2>sint occaecat</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>qui officia</h2>
                        </div>
                        <div className="box">
                            <h1>4141</h1>
                            <h2>non proident</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>

    )
}
