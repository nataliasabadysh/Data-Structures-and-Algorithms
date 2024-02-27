// function areYouPlayingBanjo(name) {
// //   console.log(name[0])
//   return (name[0] =='R'||name[0] =='r') ? name + " plays banjo" : name + " does not play banjo"
// }
function areYouPlayingBanjo(name) {
    return name.startsWith('R') || name.startsWith('r') ? 
      `${name} plays banjo` : 
      `${name} does not play banjo`;
  }
  