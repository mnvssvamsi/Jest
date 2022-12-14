import {render, screen} from '@testing-library/react';

import Options from '../Options';

test('display image for each scoop',async ()=>{
    render(<Options optionType="scoops" />);

 
    //find images
    const scoopImages= await screen.findAllByRole('img',{name:/scoop$/i});
    expect(scoopImages).toHaveLength(2);

    //confirm alt text of images
    // const altText= scoopImages.map(element=> element.alt);
})