import { Radio } from 'antd';

const RadioButton = (props) => {

  return (
    <Radio.Group >
      <Radio id={props.id} value={props.value1} onChange={props.onChange}>{props.value1} </Radio>
      <Radio id={props.id} value={props.value2} onChange={props.onChange}>{props.value2}</Radio>
      <Radio id={props.id} value={props.value3} onChange={props.onChange}>{props.value3}</Radio>
    </Radio.Group>
  );
};
 
export default RadioButton;