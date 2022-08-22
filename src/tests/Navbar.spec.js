import Navbar from "../components/Navbar";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';


describe("Navbar navigation", () => {
  render(<Navbar />);
  it("should render on all pages", () => {
      expect(screen.getByRole("Navbar")).toBeInTheDocument();
  })

});
