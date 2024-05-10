import AwesomeSlider, { type AwesomeSliderProps } from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

// css files
import '../scss/components/slider.scss';

// images
import well1 from '../assets/img/slider/001-well.webp';
import well2 from '../assets/img/slider/050-well.webp';
import well3 from '../assets/img/slider/075-well.webp';
import well4 from '../assets/img/slider/126-well.webp';
import well5 from '../assets/img/slider/127-well.webp';
import well6 from '../assets/img/slider/128-well.webp';

export default function Slider(params: AwesomeSliderProps) {
    return (
        <AutoplaySlider
            play={true}
            interval={2500}
            className="aws-btn"
            bullets={false}
            animation="openAnimation"
        >
            <div data-alt="slider 128. well image" data-src={well6.src} />
            <div data-alt="slider 127. well image" data-src={well5.src} />
            <div data-alt="slider 126. well image" data-src={well4.src} />
            <div data-alt="slider 75. well image" data-src={well3.src} />
            <div data-alt="slider 50. well image" data-src={well2.src} />
            <div data-alt="slider 1. well image" data-src={well1.src} />
        </AutoplaySlider>
    );
}
