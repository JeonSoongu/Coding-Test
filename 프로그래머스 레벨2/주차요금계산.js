function solution(fees, records) {
  var answer = [];
  const carObj = {};
  const inCars = [];
  const outCars = [];

  records.map((ele) => {
    const [time, carNumber, status] = ele.split(" ");
    if (status === "IN") {
      inCars.push([time, carNumber]);
    } else {
      outCars.push([time, carNumber]);
    }
  });

  inCars.map((inCar, idx) => {
    let isTrue = true;

    for (let i = 0; i < outCars.length; i++) {
      if (inCar[1] === outCars[i][1]) {
        isTrue = false;
        let timeDiff =
          (new Date(`1970-01-01 ${outCars[i][0]}`) -
            new Date(`1970-01-01 ${inCar[0]}`)) /
          60000;
        outCars.splice(i, 1);
        carObj[inCar[1]] = carObj[inCar[1]] + timeDiff || timeDiff;
        break;
      }
    }

    if (isTrue) {
      let timeDiff =
        (new Date(`1970-01-01 23:59`) - new Date(`1970-01-01 ${inCar[0]}`)) /
        60000;
      carObj[inCar[1]] = carObj[inCar[1]] + timeDiff || timeDiff;
    }
  });

  Object.keys(carObj)
    .sort()
    .forEach((ele) => {
      if (carObj[ele] <= fees[0]) {
        answer.push(fees[1]);
      } else {
        answer.push(
          fees[1] + Math.ceil((carObj[ele] - fees[0]) / fees[2]) * fees[3]
        );
      }
    });

  return answer;
}
