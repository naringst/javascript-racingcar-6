import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    //자동차 이름 입력받기
    MissionUtils.Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNameUserInput = await MissionUtils.Console.readLineAsync("");
    //쉼표 기준 분리
    const carNames = carNameUserInput.split(",");

    //5자 이하인지 확인하기
    const isNameUpper5 = carNames.every((carName) => carName.length > 5);

    //5자 이상이면 예외 처리

    //시도할 횟수 입력받기
    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const tryNumber = await MissionUtils.Console.readLineAsync("");

    //초기 출력
    const carScoreObj = {};
    carNames.forEach((car) => {
      carScoreObj[car] = "";
    });

    //각 자동차 별 무작위 수 구하기
    MissionUtils.Console.print("");
    MissionUtils.Console.print(`실행 결과`);
    for (let i = 0; i < tryNumber; i++) {
      const movingCars = [];

      carNames.forEach((car) => {
        const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

        if (randomNumber >= 4) {
          movingCars.push(car);
        }
      });

      //횟수마다 이동 결과 출력

      carNames.forEach((car) => {
        if (movingCars.includes(car)) {
          carScoreObj[car] += "-";
        }
        MissionUtils.Console.print(`${car} : ${carScoreObj[car]}`);
      });
      MissionUtils.Console.print("");
    }
  }
}

const app = new App();
app.play();

export default App;
