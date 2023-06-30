
import PropTypes from 'prop-types';

import { WithErrorApi } from '@HOC-helper/withErrorApi';
import PeopleList from '@components/peoplePages/peopleList';
import { getApiResourse } from "@utils/network";

import { useEffect, useState } from "react";
import { PEOPLE_API } from '@constants/Api';
import { getPeopleId, getPeopleImg, getPeoplePageId  } from '../../services/getPeopleData'
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleNav from '@components/peoplePages/navigation/PeopleNav';

import style from './style.module.css'



const PeoplePage = ({ setErrorApi }) => {


    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);      // в обьекте, котоый возвращает серв, есть метод previous - для перехода на предыдущ стр
    const [nextPage, setNextPage] = useState(null);     //  в обьекте, котоый возвращает серв, есть метод next - для перехода на след стр
    const [counterPage, setCounterPage] = useState(1); //  номер текущей страницы
    const [isFavorite, setIsFavorite] = useState(false);

    const query = useQueryParams();                    
    const queryPage = query.get('page');             // Этот код использует метод .get('page') для получения значения параметра с именем 'page' из строки запроса
    
    

    const getResours = async (url) => {         // аснихр функц которая вызывает фунцкию запроса данных с сервера
        const res = await getApiResourse(url)   // резуьтат записывается в переменную
        // console.log(res);

        if (res) {                              // делается проверка - если данные получены, то делается перебор массива и выводятся определенные данные

            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url);            // функция, которая принимает URL и вычисляет ID
                const img = getPeopleImg(id);           //  функц , которая по ID возвращает IMG
                
               
                return {
                    id: id,
                    name: name,
                    url: url,
                    foto: img,
                }
            })

            setPeople(peopleList)
            setNextPage(res.next)
            setPrevPage(res.previous)
            setCounterPage(getPeoplePageId(url))
             setErrorApi(false)

             


        }
        else {
            setErrorApi(true)
        }
    }



// через useEffect вызывается функция, для подачи запроса на сервер, и в нее передается URL , 

    useEffect(() => {
        getResours(PEOPLE_API + queryPage)
    }, [queryPage])

    return (
        <>

            <PeopleNav
             getResours={getResours}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
             />

            {people && <PeopleList people={people} />}

        </>
    );
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default WithErrorApi(PeoplePage);




























