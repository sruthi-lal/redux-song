 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 export class SongList extends Component {
     render() {
           console.log(this.props)
         return (
             <div>
                 SongList
             </div>
         )
     }
 }

 const mapStateToProps = (state) => {
     return { song: state.song}

 }
 
 export default connect(mapStateToProps)(SongList);
 