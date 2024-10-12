import "./index.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {
  const formatUsername = (username) => {
    return `@${username}`;
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "7px"
    }}>
      <TwitterFollowCard 
        format={formatUsername} 
        username={"albertodlc"}
      >
        Alberto de la Cruz
      </TwitterFollowCard>
        
      
      <TwitterFollowCard 
        format={formatUsername} 
        username={"midudev"} 
      >
        Miguel Duran
      </TwitterFollowCard>
      
      <TwitterFollowCard 
        format={formatUsername} 
        username={"aliciafl"}
        initialIsFollowing
      >
        Alicia Fernández
      </TwitterFollowCard>
    
    </div>
  )
}

export default App
