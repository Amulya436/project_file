import logo from "./logo.svg";
import "./App.css";
import AMULYA from "C:/Users/amuly/OneDrive/Desktop/436_mernstack/2211cs010436-mernstack/src/images/AMULYA.png"
function App() {
  return ( 
    <div className="App">

<h1>Hello World...s
</h1>
<h2>Name: P.Amulya</h2>

<br></br>
<h2>
Ht.No: 2211CS010436
</h2>
<br></br>
<h2>

Group: 7A
</h2>
<hr></hr>
<img src={AMULYA} 
style={{width:'450px',height:'450px',borderRadius:'50%'}} alt="AMULYA" />
<h2> About Myself</h2>
<p>I am P.Amulya,from Hyderabad.
   I completed my schooling in Bhashyam High School and
   my intermediate in Narayana Collage at Hyderbad.
   Present iam pursuing my graduation in MallaReddyUniversity. 
</p>

    </div>
  );
}

export default App;
