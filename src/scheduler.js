/**
 * Creates an instance of the mlfq scheduler
 */

import Scheduler from "./mlfq";

import random from "./randomAdapter";

const scheduler = new Scheduler({
    timeQuantums: [50, 5, 5, 5, 5, 5, 5, 5],
    boostTime: Infinity,
    resetTQsOnIO: false,
    random,
    speed: 3000,
    generation: [
        {
            ioFrequencyRange: [4, 4],
            jobRuntimeRange: [Infinity, Infinity],
            numJobsRange: [1, 1],
            jobCreateTimeRange: [10, 10],
            ioLengthRange: [5, 5]
        },
        {
            ioFrequencyRange: [4, 4],
            jobRuntimeRange: [Infinity, Infinity],
            numJobsRange: [1, 1],
            jobCreateTimeRange: [1, 1],
            ioLengthRange: [5, 5]
        }
    ]
});
export default scheduler;