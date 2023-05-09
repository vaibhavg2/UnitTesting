import Application from "./application";
import { render, screen } from "@testing-library/react";

describe("application", () => {
  test("render correctly", () => {
    render(<Application />);
    // console.log(render(<Application/>));
    // const nameElemnt = screen.getByRole('textbox')
    // expect(nameElemnt).toBeInTheDocument()

    const joblocationElemnt = screen.getByRole("combobox");
    expect(joblocationElemnt).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitbuttonElemt = screen.getByRole("button");
    expect(submitbuttonElemt).toBeInTheDocument();

    const headingElement = screen.getByRole("heading", {
      // name:'Job Application form'
      level: 1,
    });
    expect(headingElement).toBeInTheDocument();

    const headingElement1 = screen.getByRole("heading", {
      level: 2,
      // name:'Section 1'
    });
    expect(headingElement1).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });

    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement3 = screen.getByRole("checkbox");
    expect(termsElement3).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
    // const data=10;
    // expect(data).toBe(10)

    //<<<<<<<<<<<<<<<<<<<<getByLabelText Method>>>>>>>>>>>>>>>>>>>>>>

    const nameElement1 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement1).toBeInTheDocument();

    // const nameElement2 = screen.getByLabelText("Name",{
    //     selector:'option'
    // })
    // expect(nameElement2).toBeInTheDocument()

    const termsElement1 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement1).toBeInTheDocument();

    //<<<<<<<<<<<<<<<<<<<<getByPlaceholderText Method>>>>>>>>>>>>>>>>>>>>>>

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //<<<<<<<<<<<<<<<<<<<<getByText Method>>>>>>>>>>>>>>>>>>>>>>

    const paraghaphElement = screen.getByText("All fildes are mandetory");
    expect(paraghaphElement).toBeInTheDocument();

    //<<<<<<<<<<<<<<<<<<<<getByDisplayValue Method>>>>>>>>>>>>>>>>>>>>>>

    const valueElemnt = screen.getByDisplayValue("vaibhav");
    expect(valueElemnt).toBeInTheDocument();

    //<<<<<<<<<<<<<<<<<<<<getByAltText Method>>>>>>>>>>>>>>>>>>>>>>

    const altElement = screen.getByAltText("A man with laptop");
    expect(altElement).toBeInTheDocument();

    //<<<<<<<<<<<<<<<<<<<<getByTitle Method>>>>>>>>>>>>>>>>>>>>>>

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //<<<<<<<<<<<<<<<<<<<<getByTestId Method>>>>>>>>>>>>>>>>>>>>>>

    const customIdElement = screen.getByTestId("coustom-element");
    expect(customIdElement).toBeInTheDocument();

    //<<<<<<<<<<<<Fullstring Match>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const fullstringmatch = screen.getByText("Job Application form");
    expect(fullstringmatch).toBeInTheDocument();

    const fullstringmatch1 = screen.getByText("Application form", {
      exact: false,
    });
    expect(fullstringmatch).toBeInTheDocument();

    const fullstringmatch2 = screen.getByText("job application form", {
      exact: false,
    });
    expect(fullstringmatch).toBeInTheDocument();

    //<<<<<<<<<<<<regexMatch Match>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    const regexMatchmatch = screen.getByText(/Job Application form/);
    expect(regexMatchmatch).toBeInTheDocument();

    const regexMatchmatch1 = screen.getByText(/Application form/i);
    expect(regexMatchmatch).toBeInTheDocument();

    // const regexMatchmatch2 = screen.getByText(/^job application form$/)
    // expect(regexMatchmatch).toBeInTheDocument()

    //<<<<<<<<<<<<coustomMatch Match>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // (content?: String,element?: Element|null)=>boolean
    // const coustomMatchmatch = screen.getByText(/Job Application form/)
    // expect(coustomMatchmatch).toBeInTheDocument()
  });
});
