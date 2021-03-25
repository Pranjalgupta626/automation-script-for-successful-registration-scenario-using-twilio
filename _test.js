Feature('');

Scenario('test successful registration scenarion by entering valid otp', async ({ I }) => {
    I.tap('~onboarding_terms_button_AcceptAndContinue');
    I.tap("//*[@class='android.widget.Image']")
    I.tap("United Kingdom")
    I.fillField("//*[@class='android.widget.EditText']",'7723546280')
    I.tap("//*[@text='Continue']")
    let otpMessage = await I.sendGetRequest('/getOTP');
    console.log("OTP Message: " + otpMessage.data);
    let numberPattern = /\d+/g
    let numbersArray = (otpMessage.data).match(numberPattern)
    let otp = numbersArray[0]
    console.log("OTP code: " + otp)
    let otpNumber = Number(otp)
    const digits = [...`${otpNumber}`]
    I.fillField("//*[@class='android.widget.EditText'][1]", digits[0]);
    I.fillField("//*[@class='android.widget.EditText'][2]", digits[1]);
    I.fillField("//*[@class='android.widget.EditText'][3]", digits[2]);
    I.fillField("//*[@class='android.widget.EditText'][4]", digits[3]);
    I.fillField("//*[@class='android.widget.EditText'][5]", digits[4]);
    I.tap("//*[@text='Confirm']")
    I.see("Allow")
});
