// GOOD: Using Server Actions to handle mutations
import { logout } from './actions'
 
export default function Page() {
  return (
    <>
      <UserProfile />
      <form action={logout}>
        <button type="submit">Logout</button>
      </form>
    </>
  )
}