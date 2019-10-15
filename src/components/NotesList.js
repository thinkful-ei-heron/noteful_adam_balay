import React from 'react'


class NotesList extends React.Component {
    clickNote = (e) => {
        this.props.clickNote(e.currentTarget.id)
    }
    render() {
        const notes = this.props.notes.map(itm => {
            const date= new Date(itm.modified).toDateString()
            return (
            <li key={itm.id} id={itm.id} onClick={this.clickNote}>
                <span>{itm.name}</span>
                <span>Modified on: {date}</span>
                <button type="button">Delete</button>
            </li>
            )
        })
        return (
            <div className="noteslist">
                <ul>
                    {notes}
                </ul>
            </div>
        )
    }
}

export default NotesList