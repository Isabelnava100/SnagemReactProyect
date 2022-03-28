const useIdPokemonTeam=(data)=>{

    let arraycount=[...new Set(data.map((chara)=>chara.id_chara))];
    let separatedByChara=arraycount.map((object, i) => (data.filter((e)=>e.id_chara===arraycount[i])));
   return separatedByChara;
}

export default useIdPokemonTeam;