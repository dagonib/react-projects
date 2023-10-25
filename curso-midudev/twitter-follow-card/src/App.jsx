import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'pheralb',
    name: 'Pablo Heraldo',
    isFollowing: false
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

function App() {
  const midudev = { userName: 'midudev', initialIsFollowing: true}

  return (
    <section className='app'>
      <TwitterFollowCard 
        {...midudev}
      >
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard 
        userName="dagonib" 
        initialIsFollowing={false}
      >
          David González ibáñez
      </TwitterFollowCard>
      {
        users.map(({ userName, name, isFollowing }) => ( 
            <TwitterFollowCard 
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
