const express = require("express");

const api = express();
const projects = [
  { id: "1", title: "Novo projeto", tasks: [] },
  {
    id: "2",
    title: "Terminar o Desafio",
    tasks: ["criar rotas", "fazer a documentacao"]
  },
  { id: "3", title: "Assistir aos vídeos e codar", tasks: [] }
];

api.use(express.json());

/**
POST /projects: A rota deve receber id e title dentro corpo de
cadastrar um novo projeto dentro de um array no seguinte formato: 
{ id: "1", title: 'Novo projeto', tasks: [] };
Certifique-se de enviar tanto o ID quanto o título
do projeto no formato string com àspas duplas.

GET /projects: Rota que lista todos projetos e suas tarefas;

PUT /projects/:id: A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

DELETE /projects/:id: A rota deve deleta message: "Hello World" }r o projeto com o id presente nos parâmetros da rota;

POST /projects/:id/tasks: A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;


 * 
 */

api.get("/projects", (req, res) => {
  return res.json({ projects });
});

api.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const tasks = [];
  projects.push({ id, title, tasks });

  res.json(projects);
});

api.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(projects);
});

api.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.json(projects);
});

api.listen(3000);
