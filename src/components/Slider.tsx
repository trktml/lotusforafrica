import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/src/styled/open-animation/open-animation.scss';
const AutoplaySlider = withAutoplay(AwesomeSlider);
import '../scss/components/_slider.scss';
import well1 from '../assets/img/water-wells/well-001.webp';
import well2 from '../assets/img/water-wells/well-025.webp';
import well3 from '../assets/img/water-wells/well-050.webp';
import well4 from '../assets/img/water-wells/well-075.webp';
import well5 from '../assets/img/water-wells/well-100.webp';
import well6 from '../assets/img/water-wells/well-105.webp';

export default function Slider(params: any) {
    return (
        <AutoplaySlider
            play={true}
            interval={2500}
            className="aws-btn"
            bullets={false}
            animation="openAnimation"
        >
            <div data-alt="slider first well image" data-src={well1.src} />
            <div data-alt="slider second well image" data-src={well2.src} />
            <div data-alt="slider third well image" data-src={well3.src} />
            <div data-alt="slider fourth well image" data-src={well4.src} />
            <div data-alt="slider fifth well image" data-src={well5.src} />
            <div data-alt="slider sixth well image" data-src={well6.src} />
        </AutoplaySlider>
    );
}
