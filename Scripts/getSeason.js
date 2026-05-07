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

    if (today >= new Date(year, 11, 25) || today <= new Date(year, 0, 5))
        return "Christmastide";

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

module.exports = getSeason;
