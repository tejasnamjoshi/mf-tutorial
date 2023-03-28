import { render } from '@testing-library/react';

import ImageRenderer from './image-renderer';

describe('ImageRenderer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageRenderer />);
    expect(baseElement).toBeTruthy();
  });
});
