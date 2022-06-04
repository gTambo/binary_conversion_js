const binaryToDecimal = (number) => {
    if (number[0] == '0' && number[1] == 'b') {
      console.log("binary", number);
      number = Number(number)
      console.log(number)
      if(number.toString(10) === 'NaN') {
        return "Not a number";
      } else {
        return number.toString(10);
      }
    } else if (isNaN(Number(number))) {
      return "Not a number"
    } else {
      console.log("decimal");
      number = Number(number)
      return number.toString(2);
    }
  }
  const decimalToBinary = (number) => {
    return number.toString(2);
  }
  
  let testBinary = '0b01000011';
  let testBinResult = binaryToDecimal(testBinary);
  let testDecimal = 67;
  const testDecResult = binaryToDecimal(testDecimal);
  const notANumberTestResult = binaryToDecimal('hi there');
  
  let entries = [];
  let results = [];
  
  function handleSubmit() {
    // e.preventDefault();
    let num = document.getElementById("numberToConvert").value;
    console.log("entered value:", num);
    entries.push(num);
    const conversion = binaryToDecimal(num);
    console.log("converted number:", conversion)
    results.push(conversion);
    document.getElementById("entries").innerHTML= num;
    document.getElementById("results").innerHTML = conversion;
    return false;
  }
  
  document.getElementById("app").innerHTML = `
  <h1>Binary<--->Decimal converter</h1>
  <div>
    Convert a number from binary to decimal or from decimal to binary
  </div>
  <form id="myFormId" onSubmit="return handleSubmit()" method="post">
  <input id="numberToConvert"></input>
  <input type="submit" value="Convert" />
  </form>
  <div>Entered: <span id="entries"></span></div>
  
  <div>Result: <span id="results"></span></div>
  `;
  
  // document.getElementById("myFormId").addEventListener("submit", function(e) {
  //   e.preventDefault();
  //   console.log("entered value", e.target);
  //   // handleSubmit(e)
  //   // entries.push(e);
  //   // results.push(binaryToDecimal(e));
  // });