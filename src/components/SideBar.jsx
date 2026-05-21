import { SearchTaskBar } from "./SearchTaskBar.jsx";
import { LabelTaskList } from "./LabelTaskList.jsx";

export function SideBar () {
    return (
        <aside className="aside-content">
            <SearchTaskBar />
            <LabelTaskList />
        </aside>
    )
}