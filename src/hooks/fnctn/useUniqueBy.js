const useUniqueBy=(a)=>{
    let seen = new Set();
    return a.filter(item => {
        let k = item.thread_id;
        return seen.has(k) ? false : seen.add(k);
    }); 
}

export default useUniqueBy;