import React from 'react'
import { connect } from 'react-redux'

const SongDetails = ({song}) =>{
   if(!song){
    return <div className='container song-title'>Select a song</div>
   }
   return <div className='container song-title'>{song.title} <span>{song.duration}</span></div>
}

const mapStateToProps = (state) =>{

    return {song : state.selectedSong}

}



export default connect( mapStateToProps)(SongDetails)