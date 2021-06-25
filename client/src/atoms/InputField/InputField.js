import { Input } from 'antd';


const InputField = (props) => {
    
  return (
    <div>
      <Input id={props.id} placeholder={props.placeholder} onChange={props.onChange} /> 
    </div>
  );
};

export default InputField;