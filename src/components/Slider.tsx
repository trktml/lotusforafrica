import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
const AutoplaySlider = withAutoplay(AwesomeSlider);
import '../scss/slider.scss';

export default function Slider(params: any) {
    return (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={2000}
            className="aws-btn"
            bullets={false}
            animation="cubeAnimation"
        >
            <div
                data-alt="first pool image from slider"
                data-src="/assets/img/pools/pool-001.webp"
            />
            <div
                data-alt="second pool image from slider"
                data-src="/assets/img/pools/pool-025.webp"
            />
            <div
                data-alt="third pool image from slider"
                data-src="/assets/img/pools/pool-050.webp"
            />
            <div
                data-alt="fourth pool image from slider"
                data-src="/assets/img/pools/pool-075.webp"
            />
            <div
                data-alt="fifth pool image from slider"
                data-src="/assets/img/pools/pool-100.webp"
            />
            <div
                data-alt="sixth pool image from slider"
                data-src="/assets/img/pools/pool-105.webp"
            />
        </AutoplaySlider>
    );
}
