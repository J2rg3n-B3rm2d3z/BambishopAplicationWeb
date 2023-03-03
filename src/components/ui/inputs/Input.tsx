import { SetStateAction } from "react";

interface InputProps {
    labe: string;
    objecto: object
    campo: string
    setvalue: React.Dispatch<SetStateAction<any>>
    inputText: (string | number);
    disable?: boolean;
    requeried?: boolean;
    maxlength?: number;
}

export const Input = ({ labe, inputText, setvalue, campo, objecto, disable = false, requeried = true, maxlength = 10000 }: InputProps): JSX.Element => {
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
                            className={`form-control  ${disable ? ' border-dark text-secondary' : ' border-primary'}`}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            required={requeried}
                            value={inputText || ''}
                            disabled={disable}
                            maxLength={maxlength}
                            onChange={(e) => {
                                setvalue({ ...objecto, [campo]: e.target.value })
                                console.log(objecto)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}