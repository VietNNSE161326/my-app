import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../shared/ThemeContext'

export default function Navigation() {
    const { theme, dark, toggle } = useContext(ThemeContext)
    return (
        <div>
            <nav>
                <ul style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <li><a href='#home' className='active' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Home</a></li>
                    <li><a href='#news' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>News</a></li>
                    <li><a href='#about' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>About</a></li>
                    <li><a href='#contract' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Contract</a></li>
                </ul>
                <div style={{ position: 'relative' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>

            </nav>
        </div>
    )
}

