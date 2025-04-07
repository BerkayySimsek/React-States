import React, {useState} from 'react';

function ListExample(props) {
    const [text, setText] =useState("")
    const [list, setList] = useState(["Berkay","Mehmet","Ali","Ömer","Faruk","Doğan"])

    function addStudent(){
        setList([...list,text])
        setText("")
    }

    return (
        <div>
            <div>
                <label style={{display:"block"}}>Öğrenci Adı :</label>
                <input value={text}
                       onChange={(e)=>setText(e.target.value)}
                       type="text"/>
                <button onClick={addStudent} style={{backgroundColor:"yellow",padding:"5px",margin:5}}>Ekle</button>
            </div>

            <hr/>
            <p>{text}</p>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ListExample;