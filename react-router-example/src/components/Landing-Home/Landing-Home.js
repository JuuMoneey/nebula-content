import React from "react";
import Home from './Components/Landing-Home/Landing-Home'
import AboutMe from './Components/About-Me/About-Me'

class Home extends Components {
    render(){
        return (
            <Router>
                <div className="home">
                <header className="Home-Header">
                <nav> 
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/"><button>Resume</button></Link>
                    <Link to="/"><button>About Me</button></Link>
                    <Link to="/"><button>Projects</button></Link>
                    <Link to="/"><button>Contact</button></Link>
                </nav>
                </header>
                <Route exact path="/"></Route>
                    <div>
                    <h1>Welcome to My Page</h1>
                    </div>
                <Route>
                    <Route path='/AboutMe'>
                        <AboutMe/>
                    </Route>
                    
                </Route>
                </div>
            </Router>
        )
    }
}

export default Home;