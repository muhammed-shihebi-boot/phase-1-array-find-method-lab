// code your solution here
const superbowlWin = (objs) => {
    const winner = objs.find(obj => obj.result === 'W'); 
    if(winner){
        return winner.year
    }
}