import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lukas',
      sobrenome: 'Sperandio',
      email: 'lukassperandio@gmail.com',
      idade: 18,
      peso: 70.5,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
