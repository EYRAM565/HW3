import React, { Component } from 'react';
import './layout.css';
import './wallpaper.css';
import hulk from './hulk-1.jpg';
import ven from './ven.jpg';
import venom from './venom-2.jpg';
import './my.css';




class Web extends Component {
    render() {
        return (
            <div>
                <nav className="Navbar">
                    <div className="container">
                       <a href="#">Hulk</a>
                       <a href="#" className="logo is-active">Marvel</a>
                       <a href="#">venom</a>
                    </div>

                </nav>
                <header className="header">
                  <div className="container">
                    <h1 className="title">Marvel's fearless</h1>
                    <p className="subtile">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                    molestias earum eveniet.
                    </p>
                    <div className="search-bar">
                       <input type="search" placeholder="Search"/>
                    </div>
                    <div className="wallpaper">
                        <article className="wallpaper">
                            <img src={hulk} alt="wallpaper #1" className="wallpaper"/>
                        </article> 
                        <article className="wallpaper">
                             <img src={ven} alt="wallpaper #1" className="wallpaper"/>
                        </article>
                        <article className="wallpaper">
                            <img src={venom} alt="wallpaper #1" className="wallpaper"/>
                        </article>
                    </div>
                  </div>
                </header>
            </div>
        );
    }
}


export default Web;