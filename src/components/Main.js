import React from 'react' 
import Header from './Header'
import FoldersList from './FoldersList'
import AddFolder from './AddFolder'
import NotesList from './NotesList'
import AddNote from './AddNote'


class Main extends React.Component {
    state = {
        active: null
    }
    clickFolder = (e) => {
        const clicked = e.target.id
        this.setState({active: clicked})
    }
    render() {
    return (
      <main>
      <Header clickHeader={this.props.clickHeader}/>
      <section className="folders">
        <FoldersList folders={this.props.state.folders}/>
        <AddFolder />
      </section>
      <section className="notes">
        <NotesList notes={this.props.state.notes}/>
        <AddNote />
      </section>
      </main>
        )
    }
}

export default Main