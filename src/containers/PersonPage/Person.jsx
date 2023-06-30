import { useParams } from 'react-router';
import React, { useEffect, useState, Suspense } from 'react';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

import { WithErrorApi } from '@HOC-helper/withErrorApi';

import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonFoto from '@components/PersonPage/PersonFoto/PersonFoto';
import GoBackButton from '@components/PersonPage/GoBackButton/GoBackButton';



import { PERSON_API } from '@constants/Api';
import { getPeopleImg } from '../../services/getPeopleData';
import { getApiResourse } from '@utils/network'

import style from './style.module.css'
import Loading from '../../components/UI/UiLoading/Loading';

//  так делается предзагрузка, пока идет обработка компонента( для этого компонент оборачивается в Suspense с fallback -куда мы можем что-то написаль либо передать другой компонент)
const Films = React.lazy(() => import('@components/PersonPage/PersonFilms/Films'));



const Person = ({ setErrorApi }) => {

    const storeDate = useSelector( state => state.favoriteReducer.favorites); 

    const [peopleId, setPeopleId] = useState(null)
    const [personInfo, setPersonInfo] = useState(null) // одержится инфо об персонаже
    const [perosnName, setPersonName] = useState(null) // отдельно инфа по имени
    const [personFilms, setPersonFilms] = useState(null) // инфа о фильмах
    const [personFoto, setPersonFoto] = useState(null)
    const [personFavorite, setPersoneFavorite] = useState(false)


    const id = useParams().id

    useEffect(() => {
        (async () => {
            const res = await getApiResourse(`${PERSON_API}/${id}/`)
            // console.log(`${PERSON_API}/${id}/`);

           
           
           storeDate[id] ? setPersoneFavorite(true) : setPersoneFavorite(false)
           
            setPeopleId(id)
            
            if (res) {

                setPersonInfo([

                    { title: 'height', data: res.height, },
                    { title: 'mass', data: res.mass, },
                    { title: 'gender', data: res.gender, },
                    { title: '"hair_color', data: res.hair_color, },
                    { title: 'skin_color', data: res.skin_color, },
                    { title: 'eye_color', data: res.eye_color, },

                ])
                setPersonName(res.name)
                setPersonFoto(getPeopleImg(id))
                setPersonFilms(res.films)
                

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();
    }, [storeDate])

    return (
        <>
            <GoBackButton />
            <div className={style.wrapper}>
                <span className={style.person__name}>{perosnName}</span>
                <div className={style.container}>

                    <PersonFoto
                        peopleId={peopleId}
                        personFoto={personFoto}
                        name={perosnName}
                        personeFavorite={personFavorite}
                        setPersoneFavorite={setPersoneFavorite}
                    />

                    {personInfo && <PersonInfo personInfo={personInfo} key={id} />}

                    {personFilms && (

                        <Suspense fallback={<Loading />}>

                            <Films personFilms={personFilms} />
                        </Suspense>

                    )}

                </div>
            </div>
        </>
    );
}


Person.propTypes = {
    setErrorApi: PropTypes.func,

}

export default WithErrorApi(Person);