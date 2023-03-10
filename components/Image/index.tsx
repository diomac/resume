import {ImageProps} from '~/Image/types';


const Image = (props: ImageProps) => {
    const { image, alt, type, height, width, imgClassName, rounded } = props;
    return (
        <picture>
            <source srcSet={image.src} type={type} />
            <img
                style={{borderRadius: `${rounded ? '50%' : '0px'}`}}
                className={imgClassName}
                src={image.src}
                alt={alt}
                height={height}
                width={width}
            />
        </picture>
    );
};

export default Image;
