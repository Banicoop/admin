import { Navigate } from "react-router-dom";


function ProtectedRoute({ user, children }: {children: React.ReactNode, user: string | null}) {
  console.log('protected user:', user)
  // if (!user) {
  //   return <Navigate to="/auth/welcome" />;
  // } 
  return(
    <div>
      {children}
    </div>
  )
    
}

export default ProtectedRoute;
