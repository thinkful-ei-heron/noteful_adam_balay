import React from 'react'
import { Link } from 'react-router-dom'


class NotesList extends React.Component {
    
    render() {
        const notes = this.props.notes.map(itm => {
            const date= new Date(itm.modified).toDateString()
            return (
            <li key={itm.id} id={itm.id}>
                <Link to={`/notes/${itm.id}`}>
                <span>{itm.name}</span>
                <span>Modified on: {date}</span>
                </Link>
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