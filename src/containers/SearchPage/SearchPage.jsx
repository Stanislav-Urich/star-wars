import { useState, useCallback } from "react";
import { debounce } from 'lodash'

import { WithErrorApi } from './../../HOC-helper/withErrorApi'
import { getApiResourse } from "../../utils/network";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";

import { PERSON_API_SEARCH } from "../../constants/Api";

import SearchPageInfo from "../../components/searchPage/SearchPageInfo";
import UiInput from "../../components/UI/UiInput/UiInput";

import style from './style.module.css'


const SearchPage = ({ setErrorApi }) => {

    const [value, setValue] = useState('')
    const [peopleSearch, setPeopleSearch] = useState([])

    // в параметры будет приходить значение value из инпута
    const getResponse = async (param) => {
        console.log(param);
        const res = await getApiResourse(PERSON_API_SEARCH + param)
        if (res) {

            const peopleList = res.results.map(({ name, url }) => {

                const id = getPeopleId(url)   // получаем id из функции( функц обрезает url, оставляя идентификатор)
                const img = getPeopleImg(id) // получаем фото нашего персонажа со смежного сайта, с помощью этой функц

                return {
                    id,
                    name,
                    img,
                }
            })

            setPeopleSearch(peopleList) // сохраняем 
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    const debouncedGetResponse = useCallback(
        debounce(value => getResponse(value), 1000),
        []
    );


    const handleChange = value => {
        // const value = event.target.value  // эту часть убрал, т.к. сделал в самом компоненте инпут 
        setValue(value)
        debouncedGetResponse(value)
    }


    return (

        <>
            <h1> Search </h1>
            <UiInput
                value={value}
                onChange={handleChange}
                classes={style.input__search}
            />

            <SearchPageInfo people={peopleSearch} />
        </>
    );
}

export default WithErrorApi(SearchPage);