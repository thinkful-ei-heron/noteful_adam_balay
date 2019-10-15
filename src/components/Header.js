import React from 'react' 
import './Header.css'

class Header extends React.Component {
    clickHeader = (e) => {
        this.props.clickHeader()
    }
    render() {
        return (
            <header onClick={this.clickHeader}>
                <h1>Noteful</h1>
            </header>
        )
    }
}

export default Header