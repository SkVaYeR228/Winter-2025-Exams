const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (input) => {
    const lowerInput = input.toLowerCase();

    if (input !== lowerInput) {
        return -1;
    }

    const fullDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const index = fullDays.findIndex(day => day === lowerInput);

    return index === -1 ? -1 : index + 1;
};

module.exports = parseDay;
