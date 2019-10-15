import React from 'react' 

class Note extends React.Component {
    clickBack = (e) => {
        this.props.clickBack()
    }
    render() {
        console.log(this.props.history)
        const currNote = this.props.note
        const folder = this.props.folders.find(itm => itm.id === currNote[0].folderId)
        const date = new Date(currNote[0].modified).toDateString()
        return (
            <div className="noteview">
                <div className="back_folder">
                    <button type="button" onClick={this.props.history.goBack}>Go Back</button>
                    <span>{folder.name}</span>
                </div>
                <div>
                    <div>
                    <span>{currNote[0].name}</span>
                    <span>Modified on: {date}</span>
                    <button type="button">Delete</button>
                    </div>
                    <p>{currNote[0].content}</p>
                </div>
            </div>
        )
    }
}

export default Note