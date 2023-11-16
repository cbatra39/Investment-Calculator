
export default function UserInput({handleChange}){

    return(
        <div id="user-input">
        <div className="input-group">
          <p><label>Initial Investment</label>
            <input type="number" id="initialInvestment" required onChange={handleChange}/>
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" id="annualInvestment"required onChange={handleChange}/>
          </p>
        </div>
        <br></br>
        <div className="input-group">
          <p><label>Expected Return</label>
            <input type="number" id="expectedReturn" required onChange={handleChange}/>
          </p>
          <p>
            <label>Duration</label>
            <input type="number" id="duration" required onChange={handleChange}/>
          </p>
        </div>
      </div>
    );
}

