import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Jose Perez,<br />
            Full-Stack Engineer
          </h1>
          <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
            I build data-driven web apps and algorithmic trading platforms
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors">
            Download Resume
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <img
            src="/images/TetrisGameImage.PNG"
            alt="Jose Perez"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript", "TypeScript", "React.js", "Golang", "Node.js",
            "Express.js", "C#", "Entity Framework Core", "SQL", "PostgreSQL",
            "MongoDB", "DynamoDB", "Redis", "Supabase", "Docker", "AWS",
            "NGINX", "Kafka", "Prometheus", "Grafana", "Python", "Java",
            "REST API", "Agile", "Git", "Trello"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}