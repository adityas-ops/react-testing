import FirstTest from "./FirstTest";
import { render,screen } from "@testing-library/react";


test('renders learn react link', () => {
    render(<FirstTest />);
    const linkElement = screen.getByText(/First react test case./i);
    expect(linkElement).toBeInTheDocument();
});

// write test case for input field should be 4 input field
test('input field', () => {
    render(<FirstTest />);
    const inputElement = screen.getByRole('textbox');

   
});


// all test case will run except this group of test case
describe.skip("ui test case group",()=>{
    test('case 1',()=>{
        render(<FirstTest />);
        const linkElement = screen.getByText(/First react test case./i);
        expect(linkElement).toBeInTheDocument();
    })
    test('case 2',()=>{
        render(<FirstTest />);
        let inputElement = screen.getByRole('textbox'); 
        expect(inputElement).toHaveAttribute("type","text");
    })
    test('case 3',()=>{
        render(<FirstTest />);
        let inputElement = screen.getByRole('textbox'); 
        expect(inputElement).toHaveAttribute("type","text");
    })
    test('case 4',()=>{
        render(<FirstTest />);
        let inputElement = screen.getByRole('textbox'); 
        expect(inputElement).toHaveAttribute("type","text");
    })

})


// only run this group of test case
describe.only("ui test case group 2",()=>{
    test('case 1',()=>{
        render(<FirstTest />);
        const linkElement = screen.getByText(/First react test case./i);
        expect(linkElement).toBeInTheDocument();
    })
    test('case 2',()=>{
        render(<FirstTest />);
        let inputElement = screen.getByRole('textbox'); 
        expect(inputElement).toHaveAttribute("type","text");
    })
    test('case 3',()=>{
        render(<FirstTest />);
        const linkElement = screen.getByText(/First react test case./i);
        expect(linkElement).toBeInTheDocument();
    })
    test('case 4',()=>{
        render(<FirstTest />);
        const linkElement = screen.getByText(/First react test case./i);
        expect(linkElement).toBeInTheDocument();
    })

})

