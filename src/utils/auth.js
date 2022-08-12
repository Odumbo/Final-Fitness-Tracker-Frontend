export const logout = (setToken) => {
  window.localStorage.clear()
  setToken();
}

export const authUser = async (event,registerOrLogin='register', setToken, username, password) => {
  event.preventDefault();
const response = await fetch (
`https://fitnesstrac-kr.herokuapp.com/api/users/${registerOrLogin}`,
{
  method: "POST",
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({

  username,
  password

})

}

)

const data = await response.json(); 
window.localStorage.setItem('token', data.token)
setToken(data.token)
}










// export const logout = (setToken) => {
//     window.localStorage.clear()
//     setToken();
//   }
  
//   export const authUser = async (event, registerOrLogin = 'register', setToken, username, password) => {
//       event.preventDefault();
//       const response = await fetch(
//         `https://fitnesstrac-kr.herokuapp.com/api/users/register${registerOrLogin}`,
//         {
//           method: "POST",
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             user: {
//               username, // username: username
//               password
//             }
//           })
//         }
//       )
//       const data = await response.json();
//       window.localStorage.setItem('token', data.data.token)
//       setToken(data.data.token)
//     }