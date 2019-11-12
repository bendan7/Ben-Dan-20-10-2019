import React from 'react'
import {Link} from "react-router-dom";



function Header(props) {
    return(
        <div className="nav d-flex justify-content-between p-1 p-sm-5">
        <h2>Herolo Task</h2>
          <div >
            <Link to="/">
              <button style={{marginRight:'1vw',}} type="button" className="btn btn-outline-light  " >Home</button>
            </Link>
            <Link to="/favoritesPage">
              <button style={{marginLeft:'1vw'}} type="button" className="btn btn-outline-light " >Favorites</button>
            </Link>
          </div>
      </div>
    )
}

export default Header;