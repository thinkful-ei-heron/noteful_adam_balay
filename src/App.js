import React from 'react';
import Header from './components/Header'
import './App.css'
import Note from './components/Note'
import { Route } from 'react-router-dom'
import Main from './components/Main'



 class App extends React.Component {
  state = {
    folders: this.props.Store.folders,
    notes: this.props.Store.notes,
    noteView: false,
    currNoteId: null
  }

  clickFolder = (folderId) => {
    const newNotes = this.props.Store.notes.filter(itm => itm.folderId === folderId)
    this.setState({
      notes: newNotes
    })
  }

  clickNote = (noteId) => {
    this.setState({
      noteView: !this.state.noteView,
      currNoteId: noteId
    })
  }

  clickBack = () => {
    this.setState({
      noteView: !this.state.noteView
    })
  }

  clickHeader = () => {
    this.setState({
      folders: this.props.Store.folders,
      notes: this.props.Store.notes,
      noteView: false,
      currNoteId: null
    })
  }
  
  render() {
    if (this.state.noteView) {
      return (
      <div className="App">
        <Header clickHeader={this.clickHeader}/>
        <Note clickBack={this.clickBack} currNoteId={this.state.currNoteId} store={this.props.Store}/>
      </div>
      )
    }
    return (
    <div className="App">
      <Route 
        exact 
        path="/" 
        render={() => <Main state={this.state} clickHeader={this.clickHeader} clickBack={this.clickBack} clickNote={this.clickNote} clickFolder={this.clickFolder}/>}
      />
    </div>
  )
 }
}

export default App;
