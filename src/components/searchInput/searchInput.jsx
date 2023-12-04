import { changeSearch } from '../../store/reducers/searchReducers';
import styles from './search.module.scss';
import { useDispatch } from 'react-redux';

export function SearchInput() {
    const dispatch = useDispatch()
    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder="O que você procura?"
                onChange={(e) => dispatch(changeSearch(e.target.value))}
            />
        </div>
    )
}