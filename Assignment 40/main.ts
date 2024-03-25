// Album
function make_album(artist: String , title : String ,tracks? : number){
    let album = {artist,title}
    if (tracks){
        album ['tracks'] = tracks ;
    }
    return album;
}
console.log(make_album("Artist One","The First Album"));
console.log(make_album("Artist Two","The Second Album",10));
console.log(make_album("Artist Three","The Third Album",12));