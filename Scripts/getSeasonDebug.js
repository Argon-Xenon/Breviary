module.exports.getSeasonDebug = () => {
    const today = new Date();
    const year = today.getFullYear();

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
        const day = christmas.getDay();

        const lastSundayBeforeChristmas = new Date(christmas);
        lastSundayBeforeChristmas.setDate(christmas.getDate() - day);

        const adventStart = new Date(lastSundayBeforeChristmas);
        adventStart.setDate(lastSundayBeforeChristmas.getDate() - 21);

        return adventStart;
    }

    const easter = getEaster(year);

    const septuagesima = addDays(easter, -63);
    const ashWednesday = addDays(easter, -46);
    const passionSunday = addDays(easter, -14);
    const palmSunday = addDays(easter, -7);
    const pentecost = addDays(easter, 49);
    const trinity = addDays(easter, 56);

    const adventStart = getAdventStart(year);

    const christmas = new Date(year, 11, 25);
    const epiphany = new Date(year, 0, 6);

    const season = module.exports(); // reuse your main function

    return {
        year,
        today,
        season,
        christmas,
        epiphany,
        adventStart,
        septuagesima,
        ashWednesday,
        passionSunday,
        palmSunday,
        easter,
        pentecost,
        trinity
    };
};