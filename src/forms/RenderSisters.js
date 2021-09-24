import React from 'react';
import SisterDetails from './SisterDetails';
import { v4 as uuidv4 } from 'uuid';


function RenderSisters(props){
    const [inputFields, setInputFields] = React.useState([{id : uuidv4() ,alive : true, age : '' , health : '' , yod : '' , cod : '' , paad : ''}]);
    
    const addSister = () => {
        
        console.log("Already Added" , inputFields)
        setInputFields([...inputFields , {id : uuidv4() ,alive : true, age : '' , health : '' , yod : '' , cod : '' , paad : ''}]);
    }
    
    

    const change = e => {
        
        const newInputFields = inputFields.map(inputField => {
            if(inputField.id === e.target.id)
            {
                inputField[e.target.name] = e.target.value;
            }
            return inputField;
        });
        setInputFields(newInputFields);

    }
    const changeCheck = ( e, id) => {
        console.log(e.target.checked);

        const newInputFields = inputFields.map(inputField => {
                if(inputField.id === id)
                {
                    inputField[e.target.name] = e.target.checked;
                }
                return inputField;
        });
        setInputFields(newInputFields);
        console.log(inputFields);
    }

    const sendSisters = (e) => {
        props.handleSisters(inputFields)
    }

    

    

    return(
        <ul>
            {inputFields.map((inputField,index) =>
            {
                    return <div key={index}>
                        <h4>Sister {index+1}</h4>
                        <SisterDetails
                            inputField={inputField}
                            change={change}
                            changeCheck={changeCheck}
                            addSister={addSister}
                            handleSisters={sendSisters}

                    />

                    </div>
            })}
        </ul>
    );
}

export default RenderSisters;