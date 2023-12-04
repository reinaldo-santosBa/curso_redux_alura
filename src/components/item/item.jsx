/* eslint-disable react/prop-types */
import styles from './Item.module.scss';
import {
    AiOutlineHeart,
    AiFillHeart
} from 'react-icons/ai';
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import {
    FaCartPlus
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeFavorite } from '../../store/reducers/itemsReducers';
import { addQuantity, changeCart, subQuantity } from '../../store/reducers/cartReducers';
import classNames from 'classnames';

const iconeProps = {
    size: 24,
    color: '#041833',
};

export function Item(props) {
    const {
        titulo,
        foto,
        preco,
        descricao,
        favorito,
        id,
        carrinho,
        quantidade
    } = props;
    const dispatch = useDispatch();
    const findCart = useSelector(state => state.cart.some(items => items.id === id))

    function handleFavorite() {
        dispatch(changeFavorite(id));
    }

    function handleCart() {
        dispatch(changeCart(props));
    }
    function handleAdd() {
        dispatch(addQuantity(props));
    }
    function handleSub() {
        if ((quantidade - 1) === 0) {
            return dispatch(changeCart(props));
        }
        dispatch(subQuantity(props))
    }


    const style = {
        quantityArea: {
            display: 'flex',
            alignItems: 'center',
        },
        icon: {
            cursor: 'pointer',
            padding: '5px',
            width: 30,
            height: 30
        },
        valueQuantity: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30
        }
    }

    return (
        <div className={classNames(styles.item, {
            [styles.itemNoCarrinho]: carrinho
        })}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>
            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {Number(preco).toFixed(2)}
                    </div>
                    <div className={styles['item-acoes']}>
                        {
                            carrinho
                                ?
                                <div style={style.quantityArea} >
                                    <RiSubtractFill style={style.icon} onClick={handleSub} />
                                    <p style={style.valueQuantity}>{quantidade}</p>
                                    <IoMdAdd style={style.icon} onClick={handleAdd} />
                                </div>
                                : ''
                        }
                        {favorito
                            ? <AiFillHeart {...iconeProps} color='#ff0000' className={styles['item-acao']} onClick={handleFavorite} />
                            : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={handleFavorite} />
                        }
                        <FaCartPlus
                            {...iconeProps}
                            color={findCart ? '#1875E8' : iconeProps.color}
                            className={styles['item-acao']}
                            onClick={handleCart}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}