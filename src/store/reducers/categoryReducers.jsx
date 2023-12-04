import { createSlice } from '@reduxjs/toolkit'
import automotivoThumb from '../../assets/category/thumbnail/automotivo.png';
import eletronicosThumb from '../../assets/category/thumbnail/eletronicos.png';
import escritorioThumb from '../../assets/category/thumbnail/escritorio.png';
import jogosThumb from '../../assets/category/thumbnail/jogos.png';
import somThumb from '../../assets/category/thumbnail/som.png';
import automotivoHeader from '../../assets/category/header/automotivo.png';
import eletronicosHeader from '../../assets/category/header/eletronicos.png';
import escritorioHeader from '../../assets/category/header/escritorio.png';
import jogosHeader from '../../assets/category/header/jogos.png';
import somHeader from '../../assets/category/header/som.png';

const categoryInitialState = [{
    name: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    description: 'Os melhores e mais atuais dispositivos eletrônicos estão aqui!'
}, {
    name: 'Automotivo',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    description: 'Encontre aqui equipamentos para deixar seu carro com a sua cara!'
}, {
    name: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    description: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
    name: 'Escritório',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    description: 'Tudo para o que escritório ficar incrível!'
}, {
    name: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    description: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}]

export const categorySlice = createSlice({
    name: 'category',
    initialState: categoryInitialState
})