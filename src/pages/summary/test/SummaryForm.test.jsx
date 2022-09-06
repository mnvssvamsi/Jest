import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

import userEvent from '@testing-library/user-event'




// test('checkbox initial state', () => {
//   render(<SummaryForm />);
//   const termsAndConditionsElement = screen.getByRole('checkbox');
//   expect(termsAndConditionsElement).not.toBeChecked();

//   const confirmBtnElement= screen.getByRole('button',"Confirm Order");
//   expect(confirmBtnElement).toBeDisabled();
// });

// test('check disables and enables', async ()=>{
//     const user = userEvent.setup();

//     render(<SummaryForm />);


//     const termsAndConditionsElement = screen.getByRole('checkbox',{name:/terms and conditions/i});

//     await user.click(termsAndConditionsElement);
//     const confirmBtnElement= screen.getByRole('button',"Confirm Order");
//     expect(confirmBtnElement).toBeEnabled();

//    await user.click(termsAndConditionsElement);
//     expect(confirmBtnElement).toBeDisabled();
// })

// test('popover responds to hover',()=>{
//   render( <SummaryForm />);
//  const nullPopOver= screen.queryByText('/no icecream will be delivered/i');

//  expect(nullPopOver).not.toBeInTheDocument();

// })

// test('popover appears and disapperas', async ()=>{
//   render(<SummaryForm />);
//   const user = userEvent.setup();

//     // popover appears upon mouseover of checkbox label
//   const termsAndConditionsElement = screen.getByRole('checkbox',{name:/terms and conditions/i});
//   await user.hover(termsAndConditionsElement);
//   const popOver= screen.getByText('/no icecream will be delivered/i');
//   expect(popOver).toBeInTheDocument();
//     // popover disappears when we mouse out

//   await user.unhover(termsAndConditionsElement);
//   const nullPopOver= screen.queryByText('/no icecream will be delivered/i');
//   expect(nullPopOver).not.toBeInTheDocument(); 

// })

test('popover responds to hover', async () => {
  render(<SummaryForm />);
 
  // set up userEvent
  const user = userEvent.setup();
 
  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
 
  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();
 
  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  const overlay = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(overlay).not.toBeInTheDocument();
});
