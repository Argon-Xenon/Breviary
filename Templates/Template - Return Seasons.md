<%*
const cal = tp.user.getSeasonDebug?.();

if (!cal) {
    tR += "getSeasonDebug() not found. Add a debug export to getSeason.js.";
    return;
}

function fmt(d) {
    return new Date(d).toISOString().split("T")[0];
}

tR += `# Liturgical Calendar Debug (${cal.year})

## Fixed
Christmas: ${fmt(cal.christmas)}
Epiphany: ${fmt(cal.epiphany)}

## Advent
Advent Start: ${fmt(cal.adventStart)}

## Pre-Lent
Septuagesima: ${fmt(cal.septuagesima)}

## Lent Cycle
Ash Wednesday: ${fmt(cal.ashWednesday)}
Passion Sunday: ${fmt(cal.passionSunday)}
Palm Sunday: ${fmt(cal.palmSunday)}

## Easter Cycle
Easter: ${fmt(cal.easter)}
Pentecost: ${fmt(cal.pentecost)}
Trinity: ${fmt(cal.trinity)}

## Today
Today: ${fmt(cal.today)}
Season: ${cal.season}
`;
%>