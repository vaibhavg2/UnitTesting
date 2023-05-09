import { screen,render, logRoles } from "@testing-library/react";
import Skills from "./skill";

describe("Skills",()=>{
    const skills=['HTML','CSS','JAVASCRIPT']

    test('render correctly',()=>{
        render(<Skills skills={skills}/>)
        const listElement=screen.getByRole('list')
        expect(listElement).toBeInTheDocument();
    })

    test('render list of skills',()=>{
        render(<Skills skills={skills}/>)
        const listItemElements=screen.getAllByRole('listitem')
        // expect(listItemElements).toHaveLength(3)
        expect(listItemElements).toHaveLength(skills.length)
    })

    // to check login or not 
    test("render Login button",()=>{
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole("button",{
            name:"Login"
        })
        expect(loginButton).toBeInTheDocument();
    })

    //<<<<<<<<<<<<<<<queryByRole using>>>>>>>>>>>>

    test("not render Logout button",()=>{
        render(<Skills skills={skills}/>);
        const loginButton = screen.queryByRole("button",{
            name:"Logout"
        })
        expect(loginButton).not.toBeInTheDocument();
    })

    //<<<<<<<<<<<<<<<findBy using>>>>>>>>>>>>
    //must require asyn and await 

    test("start leaning button is eventually displayed",async ()=>{
      render(<Skills skills={skills}/>);
        const startLoginButton = await screen.findByRole("button",{
            name:"Logout"
        },{
            timeout:3000, 
        })
        expect(startLoginButton).toBeInTheDocument();
    })
    //<<<<<<<<<<<<<<<findBy using>>>>>>>>>>>>
    //must require asyn and await 

    test("start leaning button is eventually displayed",async ()=>{
       const view = render(<Skills skills={skills}/>);
        // screen.debug()
        // logRoles(view.container)
        
    })


})