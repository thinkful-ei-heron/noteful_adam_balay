import React from 'react'
import Header from './Header'
import FoldersList from './FoldersList'
import AddFolder from './AddFolder'
import NotesList from './NotesList'
import AddNote from './AddNote'


class Folder extends React.Component {
    render() {
        return (
            <main>
            <Header clickHeader={this.props.clickHeader}/>
            <section className="folders">
            <FoldersList clickFolder={this.props.clickFolder} folders={this.props.folders}/>
            <AddFolder />
            </section>
            <section className="notes">
            <NotesList clickNote={this.props.clickNote} notes={this.props.notes}/>
            <AddNote />
            </section>
            </main>
        )
    }
}

export default Folder