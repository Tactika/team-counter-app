import React, { Component } from 'react'
// import './navbar.css';
import { Link } from 'react-router-dom'

export default class navbar extends Component {
  render() {
    return (
      <div>
        <div className="header"></div>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
