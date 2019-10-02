import React, {Component} from 'react';
import './reset.css';
import './App.css';



class App extends Component {
  constructor() {
    super();

    this.dropdown = React.createRef()
  }

  toggleShow = () => {
    console.log(this.dropdown.current)
    let {current} = this.dropdown

    if(current.classList.contains('show-animation')) {
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    } else {
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
    }
  }



  render() {
    return (
      <div>
        <header>
          <div className='title'>Start Bootstrap</div>
          <div className='menubutton' onClick={this.toggleShow} >
          <p>MENU</p><i id='hamburder-icon' className='fas fa-bars fa-2x'/>
          </div>
          <div className='menu-bar'>
            <div className='menu-items'>SERVICES</div>
            <div className='menu-items'>PORTFOLIO</div>
            <div className='menu-items'>ABOUT</div>
            <div className='menu-items'>TEAM</div>
            <div className='menu-items'>CONTACT</div>
          </div>
          <div className='dropdown' ref={this.dropdown}>
            <div className='dropdown-menu-items'>SERVICES</div>
            <div className='dropdown-menu-items'>PORTFOLIO</div>
            <div className='dropdown-menu-items'>ABOUT</div>
            <div className='dropdown-menu-items'>TEAM</div>
            <div className='dropdown-menu-items'>CONTACT</div>
          </div>
        </header>
        <div className='body-items'>
          <div className='body-text1'>Welcome To Our Studio!</div>
          <div className='body-text2'>IT'S NICE TO MEET YOU</div>
          <div className='body-text3'>TELL ME MORE</div>
        </div>
      </div>
    );
  }
}

export default App;

