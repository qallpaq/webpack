import React from "react"
import example from '../../assets/Без названия.png'
import svgExample from '../../assets/qwe.svg'
import './app.styles.scss'

const App = () => (
    <div className="root">
        <img src={example} alt=""/>
        <img src={svgExample} alt=""/>
        <h1 className="root__title">Ma App</h1>
    </div>
)

export default App;
