import Image from '../image/image';
import './image-renderer.scss';

export function ImageRenderer() {

  const components = [];
  for (let index = 0; index < 20; index++) {
    components.push(<Image index={index * 10} />);
  }

  return (
    <div className="ImageContainer">
      {components}
    </div>
  )

}

export default ImageRenderer;
