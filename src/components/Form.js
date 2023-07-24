import React , {useState} from "react";
// import "../src/style.css"

const Form = () => {
    let [user, setUser] = useState({name:"",password:""})
    let [error, setError] = useState("")


    function validateForm(e){
        e.preventDefault();

        if(!user.name || !user.password){
            return setError("Both username and password are required")
        }
    }

    return (
        <div className="form-div">
            <form onSubmit={validateForm}>
                <span>Username:</span>
                <input type="text"
                onChange={(e) => setUser({...user,name: e.target.value})}/>
                <br/>
                <span>Password:</span>
                <input type="password"
                 onChange={(e) => setUser({...user,password: e.target.value})}/>
            <div className="msg">
                 {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <button>Login</button>
            </form>

            {/* <h1>hiii</h1> */}
        </div>
    )
}

export default Form;