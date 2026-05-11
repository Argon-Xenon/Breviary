<%*
const dataFn = tp.user.getSeasonData;

const year = new Date().getFullYear();
const c = dataFn(year);

tR += JSON.stringify(c, null, 2);
%>