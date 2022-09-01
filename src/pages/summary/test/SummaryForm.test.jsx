import { render, screen , fireEvent} from '@testing-library/react';
import SummaryForm from '../SummaryForm';

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).not.toBeEnabled();
// });


test('checkbox initial state', () => {
  render(<SummaryForm />);
  const checkBoxElement = screen.getByRole('checkbox');
  expect(checkBoxElement).not.toBeChecked();

  const confirmBtnElement= screen.getByRole('button',"Confirm Order");
  expect(confirmBtnElement).toBeDisabled();
});

test('check disables and enables',()=>{
    render(<SummaryForm />);

    const checkBoxElement = screen.getByRole('checkbox',{name:/terms and conditions/i});

    fireEvent.click(checkBoxElement);
    const confirmBtnElement= screen.getByRole('button',"Confirm Order");
    expect(confirmBtnElement).toBeEnabled();

    fireEvent.click(checkBoxElement);
    expect(confirmBtnElement).toBeDisabled();





})
