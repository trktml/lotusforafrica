declare module "react-awesome-slider/dist/autoplay" {
    import { FC, ComponentType } from "react";
    import { AwesomeSliderProps } from "react-awesome-slider";
    interface AwesomeAutoplaySliderProps extends AwesomeSliderProps {
        play?: boolean;
        interval?: number;
    }
    export interface AwesomeAutoplaySlider extends FC<AwesomeAutoplaySliderProps> { }
    export default function withAutoPlay(slider: ComponentType<AwesomeSliderProps>): AwesomeAutoplaySlider;
}
// declare module "react-awesome-slider/src/styled/cube-animation"