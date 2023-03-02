interface InputProps{
    labe:string;
    inputText:(string|number);
    disable?:boolean;
    requeried?:boolean;
}

export const Input = ({labe, inputText ,disable=false, requeried = true }:InputProps): JSX.Element => {
    return (
        <div>
            <div className="card border-2 border-dark rounded-3" >
                <div className="card-body bg-secondary no-gutters">
                    <br />
                    <h5 className="card-title text-light ms-3 me-3">{labe}</h5>
                    <br />
                    <br />
                    <div className="input-group input-group-sm mb-3 col ps-3 pe-3">
                        <input type="text" 
                        className={`form-control  ${disable? ' border-dark text-secondary' : ' border-primary'}`}
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-sm"
                        required={requeried}
                        disabled={disable}
                        // onChange={(e) => getInput(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}