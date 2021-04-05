export const getColorByMag = (mag) => {
  if (mag >= 0 && mag < 1) {
    return { color: "#fff200" };
  }
  if (mag >= 1 && mag < 1.5) {
    return { color: "#ffe600" };
  }
  if (mag >= 1.5 && mag < 2) {
    return { color: "#ffd900" };
  }
  if (mag >= 2 && mag < 2.5) {
    return { color: "#ffcc00" };
  }
  if (mag >= 2.5 && mag < 3) {
    return { color: "#ffbf00" };
  }
  if (mag >= 3 && mag < 3.5) {
    return { color: "#ffb200" };
  }
  if (mag >= 3.5 && mag < 4) {
    return { color: "#ffa600" };
  }
  if (mag >= 4 && mag < 4.5) {
    return { color: "#ff8c00" };
  }
  if (mag >= 4.5 && mag < 5) {
    return { color: "#ff8000" };
  }
  if (mag >= 5 && mag < 5.5) {
    return { color: "#ff7300" };
  }
  if (mag >= 5.5 && mag < 6) {
    return { color: "#ff6600" };
  }
  if (mag >= 6 && mag < 6.5) {
    return { color: "#ff5900" };
  }
  if (mag >= 6.5 && mag < 7) {
    return { color: "#ff4c00" };
  }
  if (mag >= 7 && mag < 7.5) {
    return { color: "#ff4000" };
  }
  if (mag >= 7.5 && mag < 8) {
    return { color: "#ff3300" };
  }
  if (mag >= 8 && mag < 8.5) {
    return { color: "#ff2600" };
  }
  if (mag >= 8.5 && mag < 9) {
    return { color: "#ff1a00" };
  }
  if (mag >= 9) {
    return { color: "#ff0d00" };
  }
  return { color: "red" };
};
/*
function getColorByMag(mag) {
  if (mag >= 0 && mag < 3.5) {
    return { color: "#00ffff" };
  }
  if (mag >= 3.5 && mag < 4.5) {
    return { color: "#00ff80" };
  }
  if (mag >= 4.5 && mag < 5.5) {
    return { color: "#00ff00" };
  }
  if (mag >=  5.5 && mag < 6.5) {
    return { color: "#80ff00" };
  }
  if (mag >= 6.5 && mag < 7.5) {
    return { color: "#ffff00" };
  }
  if (mag >= 7.5 && mag < 8.5) {
    return { color: "#ff8000" };
  }
  if (mag >= 8.5 && mag < 9) {
    return { color: "#ff4000" };
  }
  if (mag >= 9) {
    return { color: "#ff0000" };
  }
  return { color: "red" };
}

*/

export const getRadiusByMag = (mag, lat) => {
  let radius = 100000;
  if (mag >= 0 && mag < 1) {
    radius = 100000;
  }
  if (mag >= 1 && mag < 1.5) {
    radius = 130000;
  }
  if (mag >= 1.5 && mag < 2) {
    radius = 160000;
  }
  if (mag >= 2 && mag < 2.5) {
    radius = 190000;
  }
  if (mag >= 2.5 && mag < 3) {
    radius = 220000;
  }
  if (mag >= 3 && mag < 3.5) {
    radius = 250000;
  }
  if (mag >= 3.5 && mag < 4) {
    radius = 280000;
  }
  if (mag >= 4 && mag < 4.5) {
    radius = 310000;
  }
  if (mag >= 4.5 && mag < 5) {
    radius = 340000;
  }
  if (mag >= 5 && mag < 5.5) {
    radius = 370000;
  }
  if (mag >= 5.5 && mag < 6) {
    radius = 400000;
  }
  if (mag >= 6 && mag < 6.5) {
    radius = 430000;
  }
  if (mag >= 6.5 && mag < 7) {
    radius = 460000;
  }
  if (mag >= 7 && mag < 7.5) {
    radius = 490000;
  }
  if (mag >= 7.5 && mag < 8) {
    radius = 520000;
  }
  if (mag >= 8 && mag < 8.5) {
    radius = 550000;
  }
  if (mag >= 8.5 && mag < 9) {
    radius = 580000;
  }
  if (mag >= 9) {
    radius = 610000;
  }
  //-------------------------
  // if (lat > 30) {
  //   radius = radius / 1.2;
  // }
  // if (lat > 50) {
  //   radius = radius / 1.3;
  // }
  // if (lat > 60) {
  //   radius = radius / 1.4;
  // }
  // if (lat < -30) {
  //   radius = radius / 1.2;
  // }
  // if (lat < -50) {
  //   radius = radius / 1.3;
  // }
  // if (lat < -60) {
  //   radius = radius / 1.4;
  // }

  // radius = 300000;
  radius = (1 - Math.abs(lat) / 105) * radius;

  // radius = lat / 180000*radius;

  return radius;
};

/*
export const getRadiusByMag = (mag) =>{
  if (mag >= 0 && mag < 1) {
    return 150000;
  }
  if (mag >= 1 && mag < 2) {
    return 170000;
  }
  if (mag >= 2 && mag < 3) {
    return 200000;
  }
  if (mag >= 3 && mag < 4) {
    return 260000;
  }
  if (mag >= 4 && mag < 5) {
    return 310000;
  }
  if (mag >= 5 && mag < 6) {
    return 380000;
  }
  if (mag >= 6 && mag < 7) {
    return 450000;
  }
  if (mag >= 7) {
    return 520000;
  }
  return 580000;
}
*/
