  import React from 'react';
  import UserCreate from './UserCreate';
  import LanguageContext from '../contexts/LanguageContext';

  class App extends React.Component {
    state = {language: 'english'}

    onLanguageChange(language){
      this.setState({language})
      // console.log(this.state)
    }


    render() {
      // console.log(this.state)

      return <div className="ui container">
          <div>
            Select a language: 
            <i className='flag us' onClick={() => this.onLanguageChange('english')}/>
            <i className='flag ru' onClick={() =>this.onLanguageChange('russian')}/>
          </div>

          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
          
          

          <br></br>

          
        </div>;
    }
  }

  export default App;
