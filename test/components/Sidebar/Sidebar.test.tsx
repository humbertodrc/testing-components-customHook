import { render } from '@testing-library/react';
import React from 'react';
import Sidebar from '../../../src/components/Sidebar/Sidebar';

describe('Pruebas en <Sidebar />', () => {

  test('Debe de mostrarse correctamente', () => {
    const { container } = render(<Sidebar visible={false} close={() => { }} />);
    expect(container).toMatchSnapshot();
  });

})