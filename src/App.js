import React from 'react';
import Header from './Header';
import Footer from './Footer';
import react, {useState} from "react";


function App() {

    let [more, setMore] = useState(0);

    function moree(){
        setMore(more + 1)
    }
    function less() {
        if(more != 0){
            setMore(more - 1)
        }
    }
    function trash(){
        setMore(more = 0)
        
    }
    return (
        <div className="wrap">
         <Header />
             <div className="number">{more}
        </div>
        <div className="buttons">
            <div onClick={moree} className="b-1">Увеличить</div>
            <div onClick={less} className="b-2">Уменьшить</div>
            <div onClick={trash} className="b-3">Сбросить</div>
        </div>
        <Footer />
        </div>
    )
}


export default App