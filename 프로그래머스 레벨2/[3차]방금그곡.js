function musicm(m, len) {
  let result = "";

  if (len < 0) return m.slice(0, len);
  if (len === 0) return m;

  if (m.length < len) {
    const repeatNum = parseInt(len / m.length);
    const rest = parseInt(len % m.length);

    result += m;
    result += m.repeat(repeatNum);

    for (let i = 0; i < rest; i++) {
      result += m[i];
    }
  }

  if (m.length >= len) {
    result += m + m.slice(0, len + 1);
  }

  return result;
}

function isEqual(m, music) {
  let idx = music.lastIndexOf(m);
  if (idx > -1) {
    return true;
  }
  return false;
}

function solution(m, musicinfos) {
  const result = [];
  const time = [];

  musicinfos.map((x, i) => {
    const musicInfo = x.split(",");
    let [HH1, MM1] = musicInfo[0].split(":");
    let [HH2, MM2] = musicInfo[1].split(":");

    if (HH2 === "00") HH2.replace("00", "24");

    time.push((HH2 - HH1) * 60 + (MM2 - MM1));

    const substitutionMusic = musicInfo[3]
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g")
      .replace(/(A#)/g, "a");

    const len = time[i] - substitutionMusic.length;
    let music = musicm(substitutionMusic, len);

    const newM = m
      .replace(/(C#)/g, "c")
      .replace(/(D#)/g, "d")
      .replace(/(F#)/g, "f")
      .replace(/(G#)/g, "g")
      .replace(/(A#)/g, "a");

    if (isEqual(newM, music)) {
      result[musicInfo[2]] = time[i];
    }
  });

  const longTime = Math.max.apply(null, Object.values(result));

  if (!Object.keys(result).length) return "(None)";
  return Object.keys(result).find((key) => result[key] === longTime);
}
