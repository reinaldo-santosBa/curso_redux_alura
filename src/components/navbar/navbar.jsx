import styles from './Navbar.module.scss';
import Logo from '../../assets/logo.svg';
import classNames from 'classnames';
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri';
import { SearchInput } from '../searchInput/searchInput';
import { Link } from 'react-router-dom';

const iconeProps = {
    color: 'white',
    size: 24
}

export function Navbar() {
    return (
        <nav className={styles.nav}>
            <img src={Logo} className={styles.logo} />
            <div className={styles.links}>
                <div>
                    <Link to='/' className={classNames(styles.link, {
                        [styles.selected]: window.location.pathname === '/'
                    })}>
                        Página inicial
                    </Link>
                </div>
            </div>
            <div className={styles.busca}>
                <SearchInput />
            </div>
            <div className={styles.icones}>
                <Link to="/carrinho">
                    {window.location.pathname === '/carrinho'
                        ? <RiShoppingCartFill {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                    }
                </Link>
            </div>
        </nav>
    )
}