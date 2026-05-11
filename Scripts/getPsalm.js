function getPsalm(hour) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ][new Date().getDay()];

    const schema = {
        Compline: {
            Sunday: ["4", "31:1-5", "91"],
            Monday: ["7", "15", "125"],
            Tuesday: ["11", "16", "30"],
            Wednesday: ["40", "120", "134"],
            Thursday: ["46", "47", "48"],
            Friday: ["13", "86", "141"],
            Saturday: ["85", "129", "130"]
        }
    };

    return schema[hour]?.[weekday] ?? [];
}

module.exports = getPsalm;
