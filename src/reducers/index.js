import { combineReducers } from "redux";


const songReducer = () =>{
    return[
        {title:'Kabhi Bhula Kabhi Yaad Kiya',duration:'05:57'},
        {title:'Yeh Dua Hai Meri',duration:'06:15'},
        {title:'Sun Sun Barsat Ki Dhun',duration:'07:16'},
        {title:'Aaj Hamne Dil Ka',duration:'07:11'},
        {title:'Dheere Dhheere Se Meri Zindagi Mein Aana',duration:'05:29'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
        if(action.type === 'SONG_SELECTED'){
            return action.payload;
        }

        return selectedSong;
}


export default combineReducers({
    song :songReducer,
    selectedSong :selectedSongReducer 
})