import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBSM(): string {
    return 'Mentalidade: Responsabilidade Pessoal, Mentalidade de Crescimento, Orientação ao Futuro, Persistência.<br>Habilidade Comportamentais: Comunicação, Trabalho em Equipe, Atenção para Detalhes, Proatividade.<br>Habilidades Técnicas e Outras: Profissionalismo, Precisão Técnica.';
  }
  getAprendizagem(): string {
    return 'Durante essa semana aprendemos a usar o "Banco de Dados".<br>E entramos na parte de "NestJS".'
  }
}

