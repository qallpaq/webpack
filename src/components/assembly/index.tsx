import React from 'react'
import { isDevelopment } from '../../utils'
import './assembly.scss'

export const Assembly: React.FC = () => (
    <div className="assembly">
        <p className="assembly__title">Режим сборки:</p>
        <h1 className="assembly__mode">{isDevelopment ? 'DEV' : 'PROD'}</h1>
    </div>
)
