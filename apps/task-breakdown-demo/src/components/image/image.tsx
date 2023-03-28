import './image.scss';

export interface ImageProps {
  index: number;
}

export function Image(props: ImageProps) {
  return (
    <img src={`https://picsum.photos/id/${props.index}/300`} alt="TestImage" />
  );
}

export default Image;
