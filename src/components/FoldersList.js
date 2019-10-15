import React from 'react'
import './FoldersList.css'

class FoldersList extends React.Component {
    clickFolder = (e) => {
        this.props.clickFolder(e.target.id)
    }
    render() {
        const folders = this.props.folders.map(itm => {
            return <li key={itm.id} id={itm.id} onClick={this.clickFolder}>{itm.name}</li>
        })
        return (
            <div className="folderlist">
                <ul>
                    {folders}
                </ul>
            </div>
        )
    }
}

export default FoldersList 