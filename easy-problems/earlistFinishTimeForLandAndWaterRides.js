

function earliestFinishTimeForLandAndWaterRides(landStartTime, landDuration, waterStartTime, waterDuration) {

    /**
     * 
     * @param {Number[]} start1 
     * @param {Number[]} dur1 
     * @param {Number[]} start2 
     * @param {Number[]} dur2 
     * @returns {Number}
     */
    const calc = (start1, dur1, start2, dur2) => {
        let firstRideFinishTime = Infinity;

        for (let i = 0; i < start1.length; i++) {
            firstRideFinishTime = Math.min(firstRideFinishTime, start1[i] + dur1[i]);
        }
        let overAllFinishTime = Infinity;
        for (let i = 0; i < start2.length; i++) {

            const secondStartTime = Math.max(firstRideFinishTime, start2[i]);
            const secondFinishTime = secondStartTime + dur2[i];
            overAllFinishTime = Math.min(overAllFinishTime, secondFinishTime);
        }
        return overAllFinishTime;
    }
    const landFirst = calc(landStartTime, landDuration, waterStartTime, waterDuration);
    const waterFirst = calc(waterStartTime, waterDuration, landStartTime, landDuration);

    return Math.min(landFirst, waterFirst);
};



const landStartTime = [2, 8], landDuration = [4, 1], waterStartTime = [6], waterDuration = [3];

const result = earliestFinishTimeForLandAndWaterRides(landStartTime, landDuration, waterStartTime, waterDuration);
console.log(result);