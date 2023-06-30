
import img from './img/loading.svg'

import style from './style.module.css'


const Loading = () => {
    return ( 
        <div className={style.container}>
            <h1>Loading Films</h1>
            <img className={style.load__img} src={img} alt='loading' />
            
        </div>
     );
}
 
export default Loading;