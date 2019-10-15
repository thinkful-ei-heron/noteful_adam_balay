import React from 'react'
import './FoldersList.css'
import { Link } from 'react-router-dom'

class FoldersList extends React.Component {
    state = {
        active: this.props.folderId
    }
    clickFolder = (e) => {
        const clicked = e.target.id
        this.setState({active: clicked})
    }
    render() {
        console.log(this.props.folderId)
        const folders = this.props.folders.map(itm => {
            return <Link to={`/folders/${itm.id}`} key={itm.id}><div id={itm.id} className={(this.state.active === itm.id) ? 'folder active' : 'folder'} onClick={this.clickFolder}>{itm.name}</div></Link>
        })
        return (
            <div className="folderlist">
                {folders}
            </div>
        )
    }
}

export default FoldersList 