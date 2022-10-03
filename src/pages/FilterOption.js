import { useState } from "react";

const FilterOption = ({ key, onDelete }) => {
    const [category, setCategory] = useState(0);
    const [sub_category, setSubCategory] = useState(0);

    return (
        <div className="d-flex ml-5">
            <select className="form-select bg-none rounded-r-none w-fit p-2" placeholder="?" onChange={(e) => setCategory(e.target.value)}>
                <option value={0}>?</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
            </select>
            <select className="form-select bg-none rounded-none border-l-0 w-fit p-2" placeholder="?" onChange={(e) => setSubCategory(e.target.value)} disabled={category === "0"}>
                <option value={0}>?</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
            </select>
            <button className="form-control rounded-l-none border-l-0 w-[50px]" onClick={() => onDelete(key)}><i class="fa fa-minus"></i></button>
        </div>
    );
}

export default FilterOption;