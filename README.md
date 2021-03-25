# automation-script-for-successful-registration-scenario-using-twilio

### Pre-requisites: 
    1) Account should be created on twilio.
    2) A free trial twilio number should be taken (preferrable a UK number) as we have written the script by considering in mind that number starts with +44.

### Steps to run the script for testing successful registration scenario (entering valid OTP):
    1) Enter inside the project folder by typing 'cd' command on terminal and then do 'yarn install'.
    
    2) Run an express server (localhost) by exceuting following command: 'nodemon server.js'
    
    3) Excecute the following command to expose the localhost api to the internet, 
    so that it can be used as a webhook by twilio -
    twilio phone-numbers:update "+44 <UK phone number which you have got from twilio>" --sms-url="http://localhost:<port at which your localhost server is running>/sms"
    Following is the example of above command which I used -
    twilio phone-numbers:update "+44 7723 546280" --sms-url="http://localhost:1448/sms"
    
    4) Once you run the above command on terminal, you will be asked your twilio account SID and AUTH TOKEN.
    You can get this from your twilio account dashboard page.
    
    5) Now run the codeceptjs file using following command -
    yarn codeceptjs

    NOTE: Before running codeceptjs command, configure the codecept.conf.js file.
        While doing configuration just add the following under "helpers" key inside exports.config -
        REST: { endpoint: "http://localhost:<port at which your localhost server is running>" }
