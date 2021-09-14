import React from 'react';
import logo from './../logo.png'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <header className="bg-onefootball-primary p-3 sticky top-0">
            <div className="container mx-auto max-w-screen-xl">
                <div className="grid grid-cols-2">
                    <Link to="/"><img src={logo} alt="onefootball" /></Link>
                </div>
            </div>
        </header>
    );
}

