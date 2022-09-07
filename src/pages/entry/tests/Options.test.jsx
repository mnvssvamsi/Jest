import {render, screen} from '@testing-library/react';

import Options from '../Options';

test('display image for each scoop',()=>{
    render(<Options optionType="scoops" />)

    //find images
    const scoopImages= screen.getAllByRole('img',{name:/scoop$/i});
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    // const altText= scoopImages.map(element=> element.alt);
})