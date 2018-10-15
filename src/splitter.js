import { CUSTOM_PERCENTAGES } from "./splitTypes";

const handleCustomPercentage = (people, { amount }) => 
    people.map(person => ({
        id: person.id,
        cost: amount * person.share
    }));

const handleEvenly = (people, { amount }) => 
    people.map(person => ({
        id: person.id,
        cost: amount / people.length
    }));


const split = (people, cost) => {
    if(cost.splitType === CUSTOM_PERCENTAGES) {
        return handleCustomPercentage(people, cost);
    }
    return handleEvenly(people, cost);
};

export default split;