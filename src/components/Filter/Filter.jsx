import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
import css from '../Filter/Filter.module.css';

export function Filter() {
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <label>
        <span className={css.labelName}>Find contact by name</span>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        ></input>
      </label>
    </div>
  );
}
