const { default: instance } = require("common/config/api")

const usuarioService = {
    buscarPorId: async (id) => {
        const resposta = await instance.get(`/usuarios/${id}`)
        return resposta.data
    }
}

export default usuarioService