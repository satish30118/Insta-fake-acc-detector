const { spawn } = require("child_process");

const InstaFakeAcc = async (req, res) => {
  try {
    const { pos, flw, flg, pic, lin, erl, erc, pr, fo, cs, pi } = req.body;
    const childPython = spawn("python", [
      "./ml/main.py",
      pos, flw, flg, pic, lin, erl, erc, pr, fo, cs, pi
    ]);

    var sendData;
    childPython.stdout.on("data", (data) => {
      // console.log(`stdout:  ${data}`);
      sendData = data.toString();
    });

    childPython.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });

    childPython.on("close", (code) => {
      console.log(`child process exited with code: ${code}`);
      console.log(sendData)
      res.status(200).json({ prediction: sendData });
    });
  } catch (error) {
    console.log(error);
  }
};

const tweetStatus = async (req, res) => {
    try {
      const {msg} = req.body;
      const childPython = spawn("python", [
        "../backend/ml/twitter/main.py",
        msg
      ]);
  
      var sendData;
      childPython.stdout.on("data", (data) => {
        // console.log(`stdout:  ${data}`);
        sendData = data.toString();
      });
  
      childPython.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
      });
  
      childPython.on("close", (code) => {
        console.log(`child process exited with code: ${code}`);
        res.status(200).json({ prediction: sendData });
      });
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {InstaFakeAcc,tweetStatus };
