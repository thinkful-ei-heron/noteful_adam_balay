import React from 'react' 

class Note extends React.Component {
    clickBack = (e) => {
        this.props.clickBack()
    }
    render() {
        const currNote = this.props.store.notes.find(itm => itm.id === this.props.currNoteId)
        const folder = this.props.store.folders.find(itm => itm.id === currNote.folderId)
        const date = new Date(currNote.modified).toDateString()
        return (
            <div className="noteview">
                <div className="back_folder">
                    <button type="button" onClick={this.clickBack}>Go Back</button>
                    <span>{folder.name}</span>
                </div>
                <div>
                    <div>
                    <span>{currNote.name}</span>
                    <span>Modified on: {date}</span>
                    <button type="button">Delete</button>
                    </div>
                    <p>{currNote.content}</p>
                </div>
            </div>
        )
    }
}

export default Note