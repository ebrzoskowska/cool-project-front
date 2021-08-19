export const fetchUsers = async (e, email, username, pass, setUser) => {
  e.preventDefault();
  try {
      let response;
      if (email) {
          response = await fetch(`http://localhost:5000/`, {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  email: email,
                  username: username,
                  password: pass
              })
          })
      } else {
          response = await fetch(`http://localhost:5000/${username}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  username: username,
                  password: pass
              })
          })
      }
      const data = await response.json();
      localStorage.setItem("MyToken", data.token)
      setUser(data.user.username)
  } catch (error) {
      console.log(error)
  }
};


export const authUser = async (setUser) => {
    if (localStorage.MyToken) {
      try
      {
        const response = await fetch(`http://localhost:5000/users`, {
          method: 'GET',
          headers: {"Authorization": `Bearer ${localStorage.getItem("MyToken")}`}
        })
        const data = await response.json();
        console.log(data)
        setUser(data.username);
      }
      catch (error)
      {
        console.log(error);
      }
    }
  }
