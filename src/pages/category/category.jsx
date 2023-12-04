import styles from './category.module.scss'
import { useSelector } from 'react-redux'
import { Header } from '../../components/header/header'
import { useParams } from 'react-router-dom';
import { Item } from '../../components/item/item';
export const Category = () => {
    const { nameCategory } = useParams();
    const { category, items } = useSelector(state => {
        const regexp = new RegExp(state.search, 'i');
        return {
            category: state.category.find(categories => categories.id === nameCategory),
            items: state.items.filter(item => item.categoria === nameCategory && item.titulo.match(regexp))
        }
    })
    return (
        <div>
            <Header
                tittle={category.name}
                description={category.description}
                image={category.header}
            />
            <div className={styles.itens}>
                {items?.map(item => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}