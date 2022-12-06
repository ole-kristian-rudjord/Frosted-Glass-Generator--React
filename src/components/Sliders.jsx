import Slider from './Slider';

export default function Sliders(props) {
  return (
    <div
      style={{
        backgroundColor: 'red',
      }}
    >
      <Slider
        property="red"
        value={props.red}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="green"
        value={props.green}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="blue"
        value={props.blue}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="blur"
        value={props.blur}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="opacity"
        value={props.opacity}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
    </div>
  );
}
