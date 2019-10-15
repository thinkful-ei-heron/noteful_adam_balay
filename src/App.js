import React from 'react';
import './App.css'
import Note from './components/Note'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import Folder from './components/Folder';



 class App extends React.Component {
  state = {
    folders: this.props.Store.folders,
    notes: this.props.Store.notes,
    noteView: false,
    currNoteId: null
  }

  clickBack = () => {
    this.setState({
      noteView: !this.state.noteView
    })
  }
  
  render() {
    // if (this.state.noteView) {
    //   return (
    //   <div className="App">
    //     <Header />
    //     <Note clickBack={this.clickBack} currNoteId={this.state.currNoteId} store={this.props.Store}/>
    //   </div>
    //   )
    // }
    return (
    <div className="App">
      <Route 
        exact 
        path="/" 
        render={() => <Main state={this.state} clickBack={this.clickBack} />}
      />
      <Route 
        path="/folders/:folderId"
        render={(props) => <Folder folders={this.props.Store.folders} notes={this.props.Store.notes.filter(itm => itm.folderId === props.match.params.folderId)}/>}
      />
      <Route 
        path="/notes/:noteId"
        render={(props) => <Note history={props.history} folders={this.props.Store.folders} note={this.props.Store.notes.filter(itm => itm.id === props.match.params.noteId)}/>}
      />
    </div>
  )
 }
}

export default App;
