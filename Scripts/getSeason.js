function addDays(date, days) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

function getEaster(y) {
    const a = y % 19;
    const b = Math.floor(y / 100);
    const c = y % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);

    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(y, month - 1, day);
}

function getAdventStart(year) {
    const christmas = new Date(year, 11, 25);

    const lastSunday = new Date(christmas);
    lastSunday.setDate(christmas.getDate() - christmas.getDay());

    const adventStart = new Date(lastSunday);
    adventStart.setDate(lastSunday.getDate() - 21);

    return adventStart;
}

/**
 * CURRENT SEASON (used by Templater in Compline, etc.)
 */
function getSeason() {
    const today = new Date();
    const year = today.getFullYear();

    const easter = getEaster(year);

    const septuagesima = addDays(easter, -63);
    const ashWednesday = addDays(easter, -46);
    const passionSunday = addDays(easter, -14);
    const palmSunday = addDays(easter, -7);
    const pentecost = addDays(easter, 49);
    const trinity = addDays(easter, 56);

    const adventStart = getAdventStart(year);

    if (
        today >= new Date(year, 11, 25) ||
        today <= new Date(year, 0, 5)
    ) return "Christmastide";

    if (today >= adventStart && today < new Date(year, 11, 25))
        return "Adventide";

    if (today >= new Date(year, 0, 6) && today < septuagesima)
        return "Epiphanytide";

    if (today >= septuagesima && today < ashWednesday)
        return "Gesimatide";

    if (today >= ashWednesday && today < passionSunday)
        return "Lententide";

    if (today >= passionSunday && today < palmSunday)
        return "Passiontide";

    if (today >= palmSunday && today < easter)
        return "HolyWeek";

    if (today >= easter && today < pentecost)
        return "Eastertide";

    if (today >= pentecost && today < trinity)
        return "Whitsuntide";

    if (today >= trinity && today < adventStart)
        return "Trinitytide";

    return "Common";
}

/**
 * FULL CALENDAR DATA (for debugging / validation)
 */
function getSeasonData(year) {
    const easter = getEaster(year);

    return {
        year,
        epiphany: new Date(year, 0, 6),

        septuagesima: addDays(easter, -63),
        ashWednesday: addDays(easter, -46),
        passionSunday: addDays(easter, -14),
        palmSunday: addDays(easter, -7),

        easter,
        pentecost: addDays(easter, 49),
        trinity: addDays(easter, 56),

        adventStart: getAdventStart(year),
        christmas: new Date(year, 11, 25)
    };
}

module.exports = {
    getSeason,
    getSeasonData
};
