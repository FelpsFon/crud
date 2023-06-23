import UsuarioRepository from '../repositories/UsuarioRepository.js';

class UsuarioController {

    // Listar tudo
    async index(req, res) {
        const linha = await UsuarioRepository.findAll()
        res.json(linha)
    }

    // Listar por id
    async show(req, res) {
        const id = req.params.id
        const linha = await UsuarioRepository.findById(id)
        res.json(linha)
    }

    // Criar dados
    async store(req, res) {
        try {
            const dados = req.body
            const linha = await UsuarioRepository.create(dados)
            res.json(linha)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao cadastrar usuário.' })
        }
    }

    async update(req, res) {
        const dados = req.body
        const id = req.params.id
        const linha = await UsuarioRepository.update(dados, id)
        res.json(linha)
    }

    async delete(req, res) {
        const id = req.params.id
        const linha = await UsuarioRepository.delete(id)
        res.json(linha)
    }

    //Login
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            // Verificar as credenciais no banco de dados
            const usuario = await UsuarioRepository.verificarCredenciais(email, senha);
            res.json({ message: 'Autenticação bem-sucedida' });
        } catch (error) {
            res.status(401).json({ error: 'E-mail ou senha inválidos' });
        }
    }

}

export default new UsuarioController();