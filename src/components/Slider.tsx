import AwesomeSlider, { AwesomeSliderProps } from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

// css files
import '../scss/components/slider.scss';

// images
import well1 from '../assets/img/slider/well-001.webp';
import well2 from '../assets/img/slider/well-025.webp';
import well3 from '../assets/img/slider/well-050.webp';
import well4 from '../assets/img/slider/well-075.webp';
import well5 from '../assets/img/slider/well-100.webp';
import well6 from '../assets/img/slider/well-105.webp';

export default function Slider(params: AwesomeSliderProps) {
    return (
        <AutoplaySlider
            play={true}
            interval={2500}
            className="aws-btn"
            bullets={false}
            animation="openAnimation"
        >
            <div data-alt="slider sixth well image" data-src={well6.src} />
            <div data-alt="slider fifth well image" data-src={well5.src} />
            <div data-alt="slider fourth well image" data-src={well4.src} />
            <div data-alt="slider third well image" data-src={well3.src} />
            <div data-alt="slider second well image" data-src={well2.src} />
            <div data-alt="slider first well image" data-src={well1.src} />
        </AutoplaySlider>
    );
}
