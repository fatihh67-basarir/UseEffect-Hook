import { useState, useEffect } from "react"


const Users = () => {
    const [users,setUsers] = useState()

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=> setUsers(data));
    };

    //! ComponentDidMount
    useEffect(() => {
        getUsers();

    }, [])
    

     
    console.log(users);

  return (
    <div> <h1>USER LIST</h1>
    {/* <button onClick={getUsers}>Get Users</button> */}
    <div>
        <div>
            <img src="" alt="" />
            <h6>Name</h6>
        </div>
    </div>
    </div>
   
  )
}

export default Users