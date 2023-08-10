import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`

    return (
     <div className='app'>
      <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name='Miguel Angel Duran'/>
      <TwitterFollowCard formatUserName={formatUserName} userName='pheralb' name='pablo Hernandez'/>
      <TwitterFollowCard formatUserName={formatUserName}userName='elonmusk' name='Elon Musk' />
     </div>
    )
}