import { useState } from "react";


export default function Home() {
  const users = ["Ram Kumar", "Yuvaraj", "Ezhilarasan", "Kushal", "Sai Baba", "Ram Raj"];
  
  const data = [
      {
        name:"Ram Kumar",
        age:21,
        department:"HR"
      },
      {
        name:"Yuvaraj",
        age:25,
        department:"Finance"
      },
      {
        name:"Kushal",
        age:23,
        department:"Development"
      },
      {
        name:"Ram Raj",
        age:21,
        department:"Sale"
      },
      {
        name:"Ezhilarasan",
        age:22,
        department:"sales"
      },

  ]






  const [searchUser, setSearchUser] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [ sortOrder, setSortOrder] = useState("asc")

  // const handleSearch = () => {
  
  //   const filteredUsers = users.filter((u)=> {
  //       return searchUser === u.toLowerCase() })

  //    setFilteredUsers(filteredUsers)

  // }

  const handleOnChange = (e) => {
    if(e.target.value !== "") {
        setSearchUser((e.target.value).toLowerCase())
        const filteredUsers = users.filter((u)=> {
        return u.toLowerCase().includes((e.target.value).toLowerCase()) })
    

     setFilteredUsers(filteredUsers)
    }
    else setFilteredUsers(users)
  }

  const handleSortOrder = () => {
    const sortingOrder = sortOrder === "asc" ? "desc" : "asc"
    setSortOrder(sortingOrder)

    const sortedusers = [...filteredUsers].sort((a,b) => sortingOrder==="asc"? a.localeCompare(b): b.localeCompare(a))
    setFilteredUsers(sortedusers)
    
  }

  return (
    <div
      style={{
        //height: "80vh",
        marginTop:"20vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexdirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap:"20px"
        }}
      >
        <input
          type="text"
          placeholder="Search any user"
          style={{ padding: "10px" }}
          values={searchUser}
          onChange={(e)=> handleOnChange(e)}
          
        />
        {/* <button style={{ padding: "10px" }} onClick={()=> handleSearch()}>Search</button> */}
        <button style={{ padding: "10px" }} onClick={()=> handleSortOrder()}>Sort{" "}{sortOrder==="asc"? "A-Z" : "Z-A"}</button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        { filteredUsers.length > 0 ?(
          <ol>{filteredUsers.map((u, i) => (
            <>
            <li key={i}>{u}</li>
            <br/>
            </>
        ))} </ol>)
           : (<p>User not found...</p>)}
      </div>
    </div>
  );
}
