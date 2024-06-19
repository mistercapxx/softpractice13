import React from "react";
import {useLocation} from 'react-router-dom'; ///current url
///возвращает объект location. Этот объект представляет текущий URL в вашем приложении

////используем хук useLocation для получения query-параметров из URL и отображаем их в формате "ключ=значение" внутри компонента Subtask


export default function Subtask2() {
    ///получение query-параметров из url строки
    function useQuery() {
        ///URLSearchParams, query-параметрами из строки запроса в URL
        ///location.search, который представляет собой часть URL, содержащую query-параметры
        return new URLSearchParams(useLocation().search);///search возвращает именно все что после ?
    }
    const query = useQuery();/// Получаем объект URLSearchParams
    const jadenMass = [];
    ///перебор всех пар key=value из объекта URLSearchParams
    for(const [key,value] of query.entries())
    {///Каждую пару добавляем в массив queryParams в формате строки "ключ=значение".
        jadenMass.push(`${key} ${value}`);
    }
    ////список всех query-параметров, объединенных через запятую
    return (
        <div>
            Subtask2, query parameters: {jadenMass.join(', ')}
        </div>
    );
}