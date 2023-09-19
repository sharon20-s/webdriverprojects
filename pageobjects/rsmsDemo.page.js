

class LoginPage  {
    
get inputUsername () {return $("//input[@name='Userid'][@class='ibox']");}
get inputPassword () {return $("//input[@name='Password'][@class='ibox']");}
get btnSubmit () {return $("//input[@type='submit'][@class='ibox1']");}

async open () {
    return browser.url(`https://www.rajagiritech.ac.in/stud/ktu/student/`)
}

async login(username,password){
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
}
}

//export default new LoginPage();
module.exports = new LoginPage();
