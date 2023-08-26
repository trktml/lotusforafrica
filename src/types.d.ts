declare module "react-awesome-slider/dist/autoplay" {
    import { FC, Component } from "react";
    import AwesomeSlider, { AwesomeSliderProps } from "react-awesome-slider";
    interface AwesomeAutoplaySliderProps extends AwesomeSliderProps {
        play?: boolean;
        interval?: number;
    }
    export interface AwesomeAutoplaySlider extends FC<AwesomeAutoplaySliderProps> { }
    export default function withAutoPlay(AwesomeSlider: any): AwesomeAutoplaySlider;
}
// declare module "react-awesome-slider/src/styled/cube-animation"