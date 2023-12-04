/* eslint-disable react/prop-types */
import styles from './header.module.scss';

export function Header({ tittle, description, className = '', image, paddingBottom }) {
    return (
        <header className={image ? `${styles.header} ${className}` : `${styles.withoutHeader} `} style={{ paddingBottom: paddingBottom ? paddingBottom : '100px' }}>
            {
                image
                    ?
                    <>
                        <div className={styles['header-texto']}>
                            <h1>{tittle}</h1>
                            <h2>{description}</h2>
                        </div>
                        <div className={styles['header-imagem']}>
                            <img
                                alt={tittle}
                                src={image}
                            />
                        </div>
                    </>
                    :
                    <div className={styles['header-texto']}>
                        <h1>{tittle}</h1>
                        <h2>{description}</h2>
                    </div>
            }
        </header>
    )
}