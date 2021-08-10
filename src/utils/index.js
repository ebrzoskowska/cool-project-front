export const fetchUsers = async (e, email, username, pass, setUser) => {
  e.preventDefault();
  try {
      let response;
      if (email) {
          response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
                  email: email,
                  username: username,
                  password: pass
              })
          })
      } else {
          response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                  password: pass
              })
          })
      }
      const data = await response.json();
      console.log(data.user)
      setUser(data.user.username)
  } catch (error) {
      console.log(error)
  }
};