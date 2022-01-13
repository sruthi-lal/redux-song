 import React, { Component } from 'react'
 import { connect } from 'react-redux'
 export class SongList extends Component {
          renderList(){
              return this.props.song.map((s) =>{
                  return(
                      <div key={s.title}>
                          <div>
                              <button>Select</button>
                          </div>
                          <div>
                              {s.title}
                          </div>

                      </div>
                  )

              })
          }

     render() {
           console.log(this.props)
         return (
             <div>
                 {this.renderList()}
             </div>
         )
     }
 }

 const mapStateToProps = (state) => {
     return { song: state.song}

 }
 
 export default connect(mapStateToProps)(SongList);
 