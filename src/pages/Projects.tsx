import { motion } from 'framer-motion';

const projects = [
  {
    title: "Distributed Trading Platform",
    image: "/images/Prometheus Dashboard 4.PNG",
    description: "A high-performance trading platform handling 10,000 requests per minute for video game items.",
    bullets: [
      "Implemented message queuing with Kafka for reliable order processing",
      "Containerized microservices with Docker for scalability",
      "Load balanced with NGINX across multiple API instances",
      "Monitored system health with Prometheus and Grafana"
    ],
    demo: "#",
    github: "https://github.com/jperez62176"
  },
  {
    title: "Cryptocurrency Charting Platform",
    image: "/images/Crypto-inspect-chart.jpg",
    description: "Advanced charting platform for cryptocurrency price analysis and strategy backtesting.",
    bullets: [
      "Built responsive UI with React and TypeScript",
      "Developed high-performance Go APIs for data processing",
      "Implemented real-time price updates and historical data storage",
      "Created strategy backtesting engine with PostgreSQL"
    ],
    demo: "https://crypto-inspect.com",
    github: "https://github.com/jperez62176"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <ul className="mb-4 space-y-2">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2">•</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}