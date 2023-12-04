import styles from './home.module.scss';
import relogio from '../../assets/inicial.png';
import { Header } from '../../components/header/header';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export function Home() {
    const navigate = useNavigate();
    const category = useSelector(state => state.category)
    return (
        <div>
            <Header
                tittle='Classificados Tech'
                description='Compre diversos tipos de produtos no melhor site do Brasil!'
                image={relogio}
                className={styles.header}
                paddingBottom={'250px'}
            />
            <div className={styles.categorias}>
                <div className={styles['categorias-title']}>
                    <h1>
                        Categorias
                    </h1>
                </div>
                <div className={styles['categorias-container']}>
                    {category.map((categoria, index) => (
                        <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
                            <img src={categoria.thumbnail} alt={categoria.name} />
                            <h1>{categoria.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}