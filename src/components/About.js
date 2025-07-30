import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
    return (<div>
            <h1>hello</h1>
            <User name={"Mit(function)"}
                location={"Bhavnagar"}/> 
            <UserClass name={"Mit(calss)"}
            location={"Bhavnagar"}/>
        </div>
       
    );
};

export default About;