// distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return someValue - 42;
    } else {
        return 42 - someValue;
    }
}

// distanceFromHqInFeet: Returns the number of feet from Scuber's headquarters to the pickup location.
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block is 264 feet
}

// distanceTravelledInFeet: Calculates the number of feet a passenger travels given a starting block and an ending block
function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return blocks * 264; // 1 block is 264 feet
}

// calculatesFarePrice: Given the same starting and ending block, return the fare for the customer.
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance < 2500) {
        return 25; // Flat fare for a distance over 2000 feet and under 2500 feet
    } else {
        return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
}
