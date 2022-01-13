 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 import { selectSong } from '../actions'
 export class SongList extends Component {
          renderList(){
              return this.props.song.map((s) =>{
                  return(
                      <div className='row' key={s.title}>
                           <div className = "col-12 song">
                            <p>{s.title}</p>
                              <button
                              onClick={() => this.props.selectSong(s)}
                               className='btn btn-info lft'
                               >Select</button>
                          </div>
                           
                         

                      </div>
                  )

              })
          }

     render() {
           console.log(this.props)
         return (
             <div className='container song-space'>
                 {this.renderList()}
             </div>
         )
     }
 }

 const mapStateToProps = (state) => {
     console.log(state)
     return { song: state.song}

 }
 
 export default connect(mapStateToProps , {selectSong })(SongList);
 