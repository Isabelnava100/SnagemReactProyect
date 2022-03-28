

  const url = process.env.API_URL;
const usePokemonSprite=(pokemon)=>{
    var poke=pokemon.toLowerCase().replace(' ', '-');
  var link=url+'../assets/pokemon/sprite/'+poke+'.png';
  return link;
}

export default usePokemonSprite;