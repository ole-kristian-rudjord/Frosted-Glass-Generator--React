import Slider from './Slider';
import SlidersDivStyled from './styledComponents/SlidersDivStyled';

export default function Sliders(props) {
  return (
    <SlidersDivStyled>
      {/* 
      Sends null values if the box is undefined 
      When no boxes are in the list (state: boxes[] in App.jsx), an undefined box is used as properties.
      */}
      <Slider
        property="red"
        value={props.box === undefined ? null : props.box.red}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="green"
        value={props.box === undefined ? null : props.box.green}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="blue"
        value={props.box === undefined ? null : props.box.blue}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="opacity"
        value={props.box === undefined ? null : props.box.opacity}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="blur"
        value={props.box === undefined ? null : props.box.blur}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
    </SlidersDivStyled>
  );
}
