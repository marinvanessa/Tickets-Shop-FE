import axios from "axios";

class authenticationService {

    registerUser(firstName, lastName, email, username, password, role) {
        axios.post(
            'http://localhost:8080/api/v1/auth/signup',
            {
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'username': username,
                'password': password,
            },
            {
                withCredentials: true,
            }
        )
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                // console.error(error);
            });
    }
}

const authInstance = new authenticationService();
export default authInstance;


