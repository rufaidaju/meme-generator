import React,{Component} from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"

class App extends Component{
    constructor (){
      super()
    }
    render(){
      return(
        <div>
           <Header />
           <MemeGenerator />
        </div>
      )
    }

}

export default App
