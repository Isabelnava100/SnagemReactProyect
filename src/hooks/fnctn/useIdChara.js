const useIdChara=(data)=>{
    let array1=[...new Set(data.map((chara)=>chara.id_chara))];
    let array2=[...new Set(data.map((chara)=>chara.name))];
   let result2 = [], i = -1;
    while ( array1[++i] ) { 
     result2.push( [ array1[i], array2[i] ] );
   }
   return result2;
}

export default useIdChara;