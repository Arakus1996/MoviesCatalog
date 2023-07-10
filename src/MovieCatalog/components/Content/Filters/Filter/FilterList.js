import { useDispatch, useSelector } from "react-redux"
import InputRange from "../../../../utils/ImputRange/InputRange"
import InputRangeTwoThumb from "../../../../utils/InputRangeTwoThumb/InputRangeTwoThumb"
import Select from "../../../../utils/Select/Select"
import SelectForComponent from "../../../../utils/SelectForComponent/SelectForComponent"
import style from "./FilterList.module.css"
import {
    setActiveBudget, setActiveCountries, setActiveFees, setActiveMovieType, setActiveGenres,
    setActiveRaitingImdb, setActiveRaitingKp, setActiveAge, setActiveYears, setDefaultFilters, setNotDefaultFilter
} from "../../../../../store/reducers"
import { useState } from "react"
import Button from "../../../../utils/Button/Button"

//////Надо сделлать для фильтров где поле ввода что то типа editMode
/// надо при нажатии на поле редактировать и визуально это выделить, а при нажатии на свободное пространство
/// отправлять запрос на сервер
/// везде лучше поставить range с 2 thumb

//// выбор возраста поменять на чекбоксы

// const FilterItem = (props) => {
//     return (
//         <Select name={props.name} options={props.filterItems} activeFilter={props.activeFilter} dispatchActiveFilters={props.dispatchActiveFilters} />
//     )
// }

const FilterList = (props) => {
    const ageRaitingRange = {
        min: 0,
        max: 99,
        step: 1
    }
    const kpRaitingRange = {
        min: 1,
        max: 10,
        step: 1
    }
    const imbdRaitingRange = {
        min: 1,
        max: 10,
        step: 1
    }
    const budgetRange = {
        min: 0,
        max: 1000000000,
        step: 100
    }
    const feesRange = {
        min: 0,
        max: 1000000000,
        step: 100
    }
    const isDefault = useSelector(state => state.movie.isDefault)
    const dispatch = useDispatch()
    const setIsDefault = () => {
        dispatch(setNotDefaultFilter())
    }
    const handleClick = () => {
        dispatch(setDefaultFilters())
    }
    return (
        <>
            <Select name={"Фильм, Сериал, Мультфильм"} options={props.movieType} activeFilter={props.activeFilters.movieType?.name} dispatchActiveFilters={(option) => dispatch(setActiveMovieType(option))} />
            <Select name={"Страна"} options={props.countries} activeFilter={props.activeFilters.countrie} dispatchActiveFilters={(option) => dispatch(setActiveCountries(option))} />
            <InputRangeTwoThumb name={"Годы"} min={1860} max={2030} step={1} isDefault={isDefault} setIsDefault={setIsDefault} dispatchActiveFilters={(option) => dispatch(setActiveYears(option))} />
            
            <InputRange name={"Возраст"} initialValue={0} range={ageRaitingRange} isDefault={isDefault} setIsDefault={setIsDefault} dispatchActiveFilters={(option) => dispatch(setActiveAge(option))} />

            <SelectForComponent name={"Рейтинги"}>
                <InputRangeTwoThumb name={"Кинопоиск"} min={1} max={10} step={1} range={kpRaitingRange} isDefault={isDefault} setIsDefault={setIsDefault} dispatchActiveFilters={(option) => dispatch(setActiveRaitingKp(option))} />
                <InputRangeTwoThumb name={"IMDb"} min={1} max={10} step={1} range={imbdRaitingRange} isDefault={isDefault} setIsDefault={setIsDefault} dispatchActiveFilters={(option) => dispatch(setActiveRaitingImdb(option))} />
            </SelectForComponent>

            <InputRange name={"Бюджет(млн$)"} initialValue={0} range={budgetRange} isDefault={isDefault} setIsDefault={setIsDefault} dispatchActiveFilters={(option) => dispatch(setActiveBudget(option))} />
            <InputRange name={"Сборы(млн$)"} initialValue={0} range={feesRange} isDefault={isDefault} setIsDefault={setIsDefault} dispatchActiveFilters={(option) => dispatch(setActiveFees(option))} />

            <div className={style.resetFiltersBtn}><Button onClick={handleClick}>Сбросить Фильтры</Button></div>
            
        </>
    );
}

export default FilterList;