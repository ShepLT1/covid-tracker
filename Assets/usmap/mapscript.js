simplemaps_usmap.hooks.click_state = function(id){
    localStorage.setItem("Landing State", simplemaps_usmap_mapdata.state_specific[id].abbrev);
  }