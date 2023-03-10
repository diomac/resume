import {StaticImageData} from 'next/image';

export type ImageProps = {
    image: StaticImageData,
    alt: string;
    type: string;
    height?: number;
    width?: number;
    imgClassName?: string;
    rounded?: boolean;
};
