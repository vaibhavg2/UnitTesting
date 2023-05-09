const Application = () => {
  return (
    <>
      <h1>Job Application form</h1>
      <h2>Section 1</h2>
      <p>All fildes are mandetory</p>
      <span title="close"></span>
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/454/410/original/man-using-laptop-free-vector.jpg"
        width={"200px"}
        height={"200px"}
        alt="A man with laptop"
      ></img>
      <div data-testid="coustom-element">Coustom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name" placeholder="Fullname">
            Name
          </label>
          <input type="text" id="name" value="vaibhav" onChange={() => {}} />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </> // <> </> this is called react fragment
  );
};
export default Application;
