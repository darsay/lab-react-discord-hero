import './App.css'
import logo from './assets/logo.png'
import burger from './assets/burger.png'
import friends from './assets/picture.png'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='logo' src = {logo} alt = "discord logo"/>
        <img className='burger' src = {burger}/>
      </div>

      <div className='content'>
        <div className='text'>
            <h1 className='title'>IMAGINE A PLACE...</h1>
            <p className='description'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          
            <button className='download-button mac'>Download for Mac</button>
            <button className='download-button browser'>Open Discord in your Browser</button>
        </div>
        <img className='friends-img' src = {friends} alt = "friends"/>
      </div>   
    </div>
  );
}

export default App;
