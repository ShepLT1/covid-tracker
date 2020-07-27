simplemaps_usmap.hooks.click_state = function(id){
    localStorage.setItem("Abbreviation", "states/" + simplemaps_usmap_mapdata.state_specific[id].abbrev);
  }