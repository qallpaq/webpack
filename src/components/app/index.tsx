import React from 'react'
import example from '../../assets/Без названия.png'
import svgExample from '../../assets/qwe.svg'
import { Assembly } from '../assembly'
import './app.scss'

const App: React.FC = () => (
    <div className="root">
        <h1>Изображения для теста</h1>
        <img src={example} alt="" />
        <img src={svgExample} alt="" />
        <Assembly />
    </div>
)

export default App
