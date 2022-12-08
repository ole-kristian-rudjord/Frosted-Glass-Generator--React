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
        property="blur"
        value={props.box === undefined ? null : props.box.blur}
        onPropertyChange={props.onPropertyChange}
      ></Slider>
      <Slider
        property="opacity"
        value={props.box === undefined ? null : props.box.opacity}
        onPropertyChange={props.onPropertyChange}
      ></Slider>

      {/* <Slider
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
      ></Slider> */}
    </div>
  );
}
