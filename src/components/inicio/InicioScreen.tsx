import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router-dom'

export const InicioScreen = (): JSX.Element => {

    const navigate = useNavigate();

    return (
        <div className="container border text-start bg-light">
            <div className="row">
                <div className='col-6'>
                <img src={img1} alt='img1' className='card-img-top col-12' />
                </div>
                <div className='col-6 align-self-center text-center'>
                <i className="bi bi-bag-heart-fill fs-1 " />
                        <br />
                        <button className='btn btn-outline-dark col-6' type='button' onClick={()=>navigate('/producto')}>
                            Productos
                        </button>
                </div>
            </div>

            <div className="row pt-3 pb-3">
                <div className='col-6 align-self-center text-center'>
                <i className="bi bi-person-fill fs-1 " />
                        <br />
                        <button className='btn btn-outline-dark col-6' type='button' onClick={()=>navigate('/cliente')}>
                            Clientes
                        </button>
                </div>
                <div className='col-6 '>
                <img src={img2} alt='img1' className='card-img-top col-12' />
                </div>
            </div>

            <div className="row pt-3 pb-3">
                <div className='col-6'>
                <img src={img3} alt='img1' className='card-img-top col-12' />
                </div>
                <div className='col-6 align-self-center text-center'>
                <i className="bi bi-receipt-cutoff fs-1 " />
                        <br />
                        <button className='btn btn-outline-dark col-6' type='button' onClick={()=>navigate('/factura')}>
                            Facturas
                        </button>
                </div>
            </div>

            <div className="row pt-3 pb-3">
                <div className='col-6 align-self-center text-center'>
                <i className="bi bi-shop-window fs-1 " />
                        <br />
                        <button className='btn btn-outline-dark col-6' type='button' onClick={()=>navigate('/proveedor')}>
                            Proveedores
                        </button>
                </div>
                <div className='col-6'>
                <img src={img4} alt='img1' className='card-img-top col-12' />
                </div>
            </div>
        </div>
    )
}