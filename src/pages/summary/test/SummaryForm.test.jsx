import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

import userEvent from '@testing-library/user-event'

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).not.toBeEnabled();
// });


test('checkbox initial state', () => {
  render(<SummaryForm />);
  const termsAndConditionsElement = screen.getByRole('checkbox');
  expect(termsAndConditionsElement).not.toBeChecked();

  const confirmBtnElement= screen.getByRole('button',"Confirm Order");
  expect(confirmBtnElement).toBeDisabled();
});

test('check disables and enables', async ()=>{
    const user = userEvent.setup();

    render(<SummaryForm />);


    const termsAndConditionsElement = screen.getByRole('checkbox',{name:/terms and conditions/i});

    await user.click(termsAndConditionsElement);
    const confirmBtnElement= screen.getByRole('button',"Confirm Order");
    expect(confirmBtnElement).toBeEnabled();

   await user.click(termsAndConditionsElement);
    expect(confirmBtnElement).toBeDisabled();
})

test('popover responds to hover',()=>{
  render( <SummaryForm />);
 const nullPopOver= screen.queryByText('/no icecream will be delivered/i');

 expect(nullPopOver).not.toBeInTheDocument();

})

test('popover appears and disapperas', async ()=>{
  render(<SummaryForm />);
  const user = userEvent.setup();

    // popover appears upon mouseover of checkbox label
  const termsAndConditionsElement = screen.getByRole('checkbox',{name:/terms and conditions/i});
  await user.hover(termsAndConditionsElement);
  const popOver= screen.getByText('/no icecream will be delivered/i');
  expect(popOver).toBeInTheDocument();
    // popover disappears when we mouse out

  await user.unhover(termsAndConditionsElement);
  const nullPopOver= screen.queryByText('/no icecream will be delivered/i');

  expect(nullPopOver).not.toBeInTheDocument(); 

})
