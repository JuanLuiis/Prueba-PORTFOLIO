export interface Project {
  id: string;
  title: string;
  category: 'Prototipado' | 'Artístico' | 'Funcional' | 'Miniaturas';
  description: string;
  longDescription: string;
  material: string;
  technology: string;
  printTime: string;
  image: string;
  tags: string[];
}
