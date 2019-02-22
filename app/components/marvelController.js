// private 
import MarvelService from "./marvelService.js";

let _marvelService = new MarvelService()

function drawApiHeros() {
   let template = ''
   let heros = _marvelService.drawApiHeros
   heros.forEach(h => {
      let button = `<button class ="btn btn-primary" onclick="app.controllers.marvelController.addToTeam('${h.id}')">ADD TO TEAM</button>`
   template += h.getCard(button)
})
document.querySelector('.myteam').innerHTML = template
}

//public
export default class MarvelController {
   constructor() {
      _marvelService.addSubscriber('apiHeros', drawApiHeros)
      _marvelService.addSubscrier('myTeam', drawMyTeam)

      //Initialize Data
      _marvelService.getMarvelData()
      _marvelService.getMyTeamData()
   }
   addToTeam(id) {
      _marvelService.addToTeam(id)
   }
   removeFromTeam(id) {
      _marvelService.removeFromTeam(id)

   }

   showEditFrom(id)
   document.getElementById(id).hidden = false;

}

editHero(event) {
   event.preventDefaultI();
   let data = {
      id: event.target.id,
      description: event.target.description.value
   }

   _marvelService.editHero(data)
}
