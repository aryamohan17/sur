import React, { useState } from 'react'



function SurveyData() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };
    return (
        <div>
            <h1 className='text-danger'>Survey data</h1>
            <form validated={validated} onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        {/* name */}
                        <div className="mb-3">
                            <label for="uname" className="form-label fw-bolder">Name</label>
                            <input type="text" className="form-control" id="uname" required placeholder='please enter your name' aria-describedby="username" />
                        </div>
                        {/* education */}
                        <div className="mb-3">
                            <label for="useredu" class="form-label fw-bolder">Educatation</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">Below 10th</option>
                                <option value="2">10</option>
                                <option value="3">Plus two</option>
                                <option value="3">U.G</option>
                                <option value="3">P.G</option>

                            </select>
                        </div>
                        {/* skils */}
                        <div>
                            <label for="useredu" className="form-label fw-bolder">Skills</label>
                            <div>
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Reading
                                </label>
                           
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Writing
                                </label>
                            </div>

                        </div>
                        {/* gender */}
                        <div>
                            <label for="useredu" className="form-label fw-bolder">Gender</label>

                        </div>


                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" for="flexRadioDefault1">
                                Female
                            </label>
                        
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Male
                            </label>
                       
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" for="flexRadioDefault2">
                                Others
                            </label>
                        <div>
                            {/* password */}
                            <div className="mb-3">
                                <label for="userpassword" className="form-label  fw-bolder">Password</label>
                                <input type="password" className="form-control" required placeholder='password please' id="userpassword" />
                            </div>
                        </div>
                        {/* email */}
                        <div class="mb-3">
                            <label for="useremail" class="form-label fw-bolder">Email address</label>
                            <input type="email" class="form-control" id="useremail" placeholder="name@example.com"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-4"></div>
                </div>

            </form>
        </div>
    )
}

export default SurveyData