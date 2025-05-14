//Initialize login feature, create user info:
function createLoginTracker() {
    const userInfo = {
     username:"sharmaine",
     password:"correctpw"
     }
    let attemptCount = 0;

    //arrow function to handle login attempts:
    const loginAttempt = (passwordAttempt) => {
        attemptCount++;

        if (passwordAttempt === userInfo.password && attemptCount <= 3) {
            return "Login Successful!";
        } else if (attemptCount <= 3) {
            return `Attempt ${attemptCount}: Login Failed!`;
        } else {
            return "Account locked due to too many failed login attempts!";
        }
    };

    return loginAttempt;
}

const login = createLoginTracker();

//Test password attempt
console.log(login("1234"));
console.log(login("5678"));
console.log(login("correctpw"));
console.log(login("pw4"));

