import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, clearAuthorization, clearVocabular, RootState } from "../../store/store";
import AdminNav from "../Admin/AdminNav/AdminNav";
import UserAdminNav from "../Admin/UserAdminNav/UserAdminNav";
export default function Header(){
    //Добавить хлебные крошки
    const dispatch = useDispatch<AppDispatch>()
    const isAdmin = useSelector((state: RootState) => state.userData.userId === 1 ? true : false)
    const userId = useSelector((state: RootState) => state.userData.userId)
    
    function exit(){
        localStorage.clear()
        dispatch(clearVocabular())
        dispatch(clearAuthorization())
    }
    const exitButton = <button className="text-sky-500" onClick={exit}>Выход</button>
    return (
        <>
            {isAdmin && <AdminNav /> /*надо вывести в глобальную переменную*/}
            {userId && <UserAdminNav />}
            <header className="flex flex-row flex-wrap justify-start gap-4 py-1">
                <Link to={'/'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> Слова </Link>
                <Link to={'/test'} className="sm:text-center w-full sm:w-auto underline text-sky-500"> test </Link>
                <span>Адаптированные тексты</span>
                <span>Адаптированные видео</span>
                <span>Диалоги</span>
                {userId ? exitButton : 
                <Link to={'/Login'} className="sm:text-center w-full sm:w-auto underline text-sky-500">
                    Вход / Регистрация
                </Link>
                }
            </header>
        </>
    )
}