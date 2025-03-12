import React from 'react'
import "./signup.css"


function Signup (){
    return (
        <div>
            <div>
            <h2>
                Create an account
            </h2>
            <form>
                <label>Email</label>
                <input type="email" placeholder='enter your email' required/>

            <label>Password</label>
            <input type="password" placeholder='enter your password' required/>

            <div>
                <div>
                    <label>Legal First name</label>
                    <input type="text" placeholder='type your first name' required/>
                </div>
                <div>
                    <label>Legal Last name</label>
                    <input type="text" placeholder='type your last name' required/>
                </div>
                </div>

            
                <label>Date of Birth</label>
                <input type="date" placeholder="mm/dd/yyyy" required />
            <div>
            <div> 
                
                <label>Sex</label>
                <div>
                
                <input type="radio" name="gender" value="male" id="male"/>
                <label htmlFor="male">Male</label>
                </div>
                <div>
                <input type="radio" name="gender" value="female" id="female"/>
                <label htmlFor="female">Female</label>
                </div>
            </div>
             <div>
                <label>National ID No</label>
                <input type="text" placeholder='Enter ID number'/>
            </div>
            </div>
                <button>Register</button>
                </form>
              </div>

            <div>or</div>
            <button><span>G</span>Continue with Google</button>
            <p>Already have an account? < a href="/login">Log in</a></p>


        </div>

    )
}

export default Signup 