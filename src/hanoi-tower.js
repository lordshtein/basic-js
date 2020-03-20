module.exports = function calculateHanoi(disk, speed) {
    const answer = {};
    answer['turns']=Math.pow(2,disk)-1;
    answer['seconds']=(Math.pow(2,disk)-1)/(speed/3600) // two times faster then taking "turn" for object
    return answer
}