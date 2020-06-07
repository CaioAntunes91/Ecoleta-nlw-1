import express from 'express';// Devido ao typescript foi necessário instalar o @types/express através do npm
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());// Comando utilizado para permitir que
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));//mapeamento de arquivo estático que funciona semelhante à configuração de uma rota mas será responsável por disponibilizar as imagens dos itens

app.use(errors());

app.listen(3333);