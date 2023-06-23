import { consulta } from '../database/bancodados.js';


class UsuarioRepository {
    // CRUD
    create(usuario) {
        const sql = 'INSERT INTO usuarios SET ?'
        return consulta(sql, usuario, 'Nãooooo foi possível cadastrar o usuário.')
    }

    findAll() {
        const sql = 'SELECT * FROM usuarios'
        return consulta(sql, 'Não foi possível localizar os usuários.')
    }

    findById(id) {
        const sql = 'SELECT * FROM usuarios WHERE id=?'
        return consulta(sql, id, 'Não foi possível localizar o usuário.')
    }

    update(dados, id) {
        const sql = 'UPDATE usuarios SET ? WHERE id =?'
        return consulta(sql, [dados, id], 'Não foi possível editar.')
    }

    delete(id) {
        const sql = 'DELETE FROM usuarios WHERE id=?'
        return consulta(sql, id, 'Não foi possível deletar o usuário.')
    }

    //LOGIN
    verificarCredenciais(email, senha) {
        const sql = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?'
        const valores = [email, senha]
        const mensagemReject = 'Email ou senha inválidos'

        return consulta(sql, valores, mensagemReject)
    }

}

export default new UsuarioRepository()
export { UsuarioRepository }