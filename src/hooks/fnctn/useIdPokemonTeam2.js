const useIdPokemonTeam2=(data)=>{

    let arraycount=[...new Set(data.map((chara)=>chara.team_id_ctl))];
    let separatedByChara=arraycount.map((object, i) => (data.filter((e)=>e.team_id_ctl===arraycount[i])));
   return separatedByChara;
}

export default useIdPokemonTeam2;