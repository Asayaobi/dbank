import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;
  // currentValue := 100;
  Debug.print(debug_show(currentValue));

  stable var startTime = Time.now();
  startTime := Time.now();
  Debug.print(debug_show(startTime));

  let id = 2348923840928349;
  // Debug.print(debug_show(id));

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Float) {
    let tempValue: Float = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount too large, currentValue less than zero.")
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };

  // topUp();

//compound an interest rate per 1 day : Given that one day contains 86,400 seconds
public func compound() {
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let secondsPerDay = 86400; // Number of seconds in a day
    let timeElapsedDays = (Float.fromInt(timeElapsedNS) / 1000000000.0) / Float.fromInt(secondsPerDay); 
    currentValue := currentValue * (1.01 ** timeElapsedDays);
    startTime := currentTime;
};


//compound an interest rate per 1 second
  // public func compound() {
  //   let currentTime = Time.now();
  //   let timeElapsedNS = currentTime - startTime;
  //   let timeElapsedS = timeElapsedNS / 1000000000;
  //   currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
  //   startTime := currentTime;
  // };

}















