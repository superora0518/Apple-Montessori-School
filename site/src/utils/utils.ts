export const formatPhoneNumber = (phone: string) => {
  return `(${phone.substring(0, 3)}) ${phone.substring(3, 6)}-${phone.substring(
    6,
    10
  )}`;
};

export const string2Date = (dateStr: string) => {
  const [date, time] = dateStr.split(` `);
  const datetime = new Date();
  if (date?.length) {
    const [year, month, day] = date.split(`-`);
    datetime.setFullYear(parseInt(year || `1900`, 10));
    datetime.setMonth(parseInt(month || `1`, 10) - 1);
    datetime.setDate(parseInt(day || `1`, 10));
  }
  if (time?.length) {
    const [hour, minute, second] = time.split(`:`);
    datetime.setHours(
      parseInt(hour || `0`, 10),
      parseInt(minute || `0`, 10),
      parseInt(second || `0`, 10)
    );
  }
  return datetime;
};

export const formatDate = (
  date: Date,
  format: string,
  utc: boolean = false
) => {
  const MMMM = [
    `\x00`,
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];
  const MMM = [
    `\x01`,
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];
  const dddd = [
    `\x02`,
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  const ddd = [`\x03`, `Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];
  let formatted = format;

  const ii = (i: number, len: number = 2): string => {
    let s = `${i}`;
    while (s.length < len) s = `0${s}`;
    return s;
  };

  const y = utc ? date.getUTCFullYear() : date.getFullYear();
  formatted = formatted.replace(/(^|[^\\])yyyy+/g, `$1${y}`);
  formatted = formatted.replace(
    /(^|[^\\])yy/g,
    `$1${y.toString().substr(2, 2)}`
  );
  formatted = formatted.replace(/(^|[^\\])y/g, `$1${y}`);

  const M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
  formatted = formatted.replace(/(^|[^\\])MMMM+/g, `$1${MMMM[0]}`);
  formatted = formatted.replace(/(^|[^\\])MMM/g, `$1${MMM[0]}`);
  formatted = formatted.replace(/(^|[^\\])MM/g, `$1${ii(M)}`);
  formatted = formatted.replace(/(^|[^\\])M/g, `$1${M}`);

  const d = utc ? date.getUTCDate() : date.getDate();
  formatted = formatted.replace(/(^|[^\\])dddd+/g, `$1${dddd[0]}`);
  formatted = formatted.replace(/(^|[^\\])ddd/g, `$1${ddd[0]}`);
  formatted = formatted.replace(/(^|[^\\])dd/g, `$1${ii(d)}`);
  formatted = formatted.replace(/(^|[^\\])d/g, `$1${d}`);

  const H = utc ? date.getUTCHours() : date.getHours();
  formatted = formatted.replace(/(^|[^\\])HH+/g, `$1${ii(H)}`);
  formatted = formatted.replace(/(^|[^\\])H/g, `$1${H}`);

  let h;
  if (H > 12) {
    h = H - 12;
  } else if (H === 0) {
    h = 12;
  } else {
    h = H;
  }
  formatted = formatted.replace(/(^|[^\\])hh+/g, `$1${ii(h)}`);
  formatted = formatted.replace(/(^|[^\\])h/g, `$1${h}`);

  const m = utc ? date.getUTCMinutes() : date.getMinutes();
  formatted = formatted.replace(/(^|[^\\])mm+/g, `$1${ii(m)}`);
  formatted = formatted.replace(/(^|[^\\])m/g, `$1${m}`);

  const s = utc ? date.getUTCSeconds() : date.getSeconds();
  formatted = formatted.replace(/(^|[^\\])ss+/g, `$1${ii(s)}`);
  formatted = formatted.replace(/(^|[^\\])s/g, `$1${s}`);

  let f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
  formatted = formatted.replace(/(^|[^\\])fff+/g, `$1${ii(f, 3)}`);
  f = Math.round(f / 10);
  formatted = formatted.replace(/(^|[^\\])ff/g, `$1${ii(f)}`);
  f = Math.round(f / 10);
  formatted = formatted.replace(/(^|[^\\])f/g, `$1${f}`);

  const T = H < 12 ? `AM` : `PM`;
  formatted = formatted.replace(/(^|[^\\])TT+/g, `$1${T}`);
  formatted = formatted.replace(/(^|[^\\])T/g, `$1${T.charAt(0)}`);

  const t = T.toLowerCase();
  formatted = formatted.replace(/(^|[^\\])tt+/g, `$1${t}`);
  formatted = formatted.replace(/(^|[^\\])t/g, `$1${t.charAt(0)}`);

  let tz = -date.getTimezoneOffset();
  let K;
  if (utc || !tz) {
    K = `Z`;
  } else if (tz > 0) {
    K = '+';
  } else {
    K = '-';
  }
  if (!utc) {
    tz = Math.abs(tz);
    const tzHrs = Math.floor(tz / 60);
    const tzMin = tz % 60;
    K += `${ii(tzHrs)}:${ii(tzMin)}`;
  }
  formatted = formatted.replace(/(^|[^\\])K/g, `$1${K}`);

  const day = (utc ? date.getUTCDay() : date.getDay()) + 1;
  formatted = formatted.replace(
    new RegExp(dddd[0] || ``, `g`),
    dddd[day] || ``
  );
  formatted = formatted.replace(new RegExp(ddd[0] || ``, `g`), ddd[day] || ``);

  formatted = formatted.replace(new RegExp(MMMM[0] || ``, `g`), MMMM[M] || ``);
  formatted = formatted.replace(new RegExp(MMM[0] || ``, `g`), MMM[M] || ``);

  formatted = formatted.replace(/\\(.)/g, `$1`);

  return formatted;
};
