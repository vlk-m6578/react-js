const defaultAvatar = 'https://placehold.co/128?text=no+photo'

export function UserCard({id, name, age, email, avatar}) {
  return (
    <div style={{padding: '10px', border: '3px solid black', width: '400px'}}>
      <img src={!avatar ? defaultAvatar : avatar}></img>
      <div>name: {name}</div>
      <div>age: {age < 18 ? `🔞 ${age}`: age}</div>
      <div>email: {email}</div>
    </div>
  )
}