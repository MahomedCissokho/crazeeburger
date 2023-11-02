
import React from 'react'
import Accueil from './Pages/Accueil'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  
} from "@clerk/clerk-react";
import { Route, Routes,useNavigate } from "react-router-dom";
import Commande from './Pages/Commande';


const clerkPubKey = "pk_test_c2ltcGxlLW1vcmF5LTM3LmNsZXJrLmFjY291bnRzLmRldiQ";

const App = () => {
  const navigate = useNavigate();

  return (
    
    <ClerkProvider
    publishableKey={clerkPubKey}
    navigate={(to) => navigate(to)}
  >
    <Routes>
      <Route 
        index 
        element={<Accueil />} />

      <Route
        path="/order"
        element={
        <>
          <SignedIn>
            <Commande />
          </SignedIn>
           <SignedOut>
            <RedirectToSignIn />
         </SignedOut>
        </>
        }
      />
    </Routes>
  </ClerkProvider>
  )
}

export default App