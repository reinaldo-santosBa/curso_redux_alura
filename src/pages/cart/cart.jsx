import styles from './cart.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Item } from '../../components/item/item';
import { Header } from '../../components/header/header';
import { resetCart } from '../../store/reducers/cartReducers';
export function Cart() {
    const { carrinho, valor, quantidade } = useSelector(state => {
        let valor = 0
        let quantidade = 0
        const carrinhoReduce = state.cart.reduce((itens, itemNoCarrinho) => {
            const item = state.items.find(item => item.id === itemNoCarrinho.id);
            itens.push({
                ...item,
                quantidade: itemNoCarrinho.quantidade,
            });
            return itens;
        }, []);
        state.cart.map((item) => {
            console.log(item);
            valor += item.price
            quantidade = item.quantity
        })
        return {
            carrinho: carrinhoReduce,
            valor,
            quantidade
        };
    });
    const dispatch = useDispatch()
    function handleSubmitCart() {
        dispatch(resetCart())
    }
    return (
        <div>
            <Header
                tittle='Carrinho de compras'
                description='Confira produtos que você adicionou ao carrinho.'
            />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.id} {...item} carrinho quantidade={quantidade} />)}
                <div className={styles.total}>
                    <strong>
                        Resumo da compra
                    </strong>
                    <span>
                        Subtotal: <strong> R$ {Number(valor * quantidade).toFixed(2)} </strong>
                    </span>
                </div>
                <button
                    className={styles.finalizar}
                    onClick={handleSubmitCart}
                >
                    Finalizar compra
                </button>
            </div>
        </div>
    )
}