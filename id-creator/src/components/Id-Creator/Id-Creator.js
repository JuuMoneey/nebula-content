import { useState } from "react";
import IdContents from "../IdContents/IdContents";

export default function GroceriesList() {
    const [list, setList] = useState([{idNumber: '', fullName: '', address: '', DOB: '', gender: '', height: '', eyeColor: ''}])

    return (
        <div className='idCreator'>
            <h1>IdCreator</h1>
            {list.map((info,i) => {
                return (
                    <IdContents key={i} info={info} />
                )
            })}
        </div>
    );
}