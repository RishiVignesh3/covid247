import React from 'react'
import { Input } from 'antd';

const TextAreaInput = (props) => {
    

const { TextArea } = Input;

    return (
        <div>
            <TextArea id={props.id} placeholder={props.placeholder} rows={props.rows} onChange={props.onChange} />
        </div>
    )
}

export default TextAreaInput
