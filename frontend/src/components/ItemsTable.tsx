import CategoryList from "./CategoryList.tsx";
import type {StateType} from "../interfaces/StateType.ts";
import {useSelector} from "react-redux";


export default function ItemsTable() {
    
    const categories = useSelector((state: StateType) => state.categories);
    
    return (
      <div className="items-table">
          {categories.map((category) => (
              <CategoryList category={category} key={category} />
          ))}
      </div>
    )
}