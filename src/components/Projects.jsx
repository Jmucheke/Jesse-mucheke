import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaDatabase, FaArrowRight } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'HR Analytics Dashboard',
    description: 'An interactive dashboard that empowers HR teams to track and understand attrition patterns across departments and employee demographics.',
    icon: <FaChartBar />,
    src: 'https://app.powerbi.com/view?r=eyJrIjoiZTI3ZTNiMDQtZTkxYi00NDIwLWIxYjktNjM0NzEwNzg3YWNkIiwidCI6IjViZmJjMGFlLTBhOWQtNDkyNy1iN2UwLTc4NDcyMWZjNjViMSJ9',
    tech: ['Power BI', 'DAX', 'Power Query'],
    details: 'Enabled early identification of high-risk employee groups (e.g. frequent travelers and sales reps). Helped HR leadership make data-driven decisions by visualizing turnover causes. Replaced static reports with real-time insights, improving workforce planning and retention strategies.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiZTI3ZTNiMDQtZTkxYi00NDIwLWIxYjktNjM0NzEwNzg3YWNkIiwidCI6IjViZmJjMGFlLTBhOWQtNDkyNy1iN2UwLTc4NDcyMWZjNjViMSJ9',
  },
  {
    title: 'Job Market Analytics',
    description: 'A labor market analysis dashboard providing insights into the demand for digital and data-related skills.',
    icon: <FaDatabase />,
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMDU0ZmYzYTktNjBiMS00NmM3LWE5NmMtNWQ3ZmI3NmUzYjAxIiwidCI6IjViZmJjMGFlLTBhOWQtNDkyNy1iN2UwLTc4NDcyMWZjNjViMSJ9',
    tech: ['Power BI', 'DAX', 'Power Query'],
    details: 'Analyzed 9,500+ job postings to highlight top skills, tools, and role-based requirements. Identified trends in job market demand for data professionals. Guided learners and institutions on where to focus upskilling efforts. Supported workforce development initiatives with actionable insights.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiMDU0ZmYzYTktNjBiMS00NmM3LWE5NmMtNWQ3ZmI3NmUzYjAxIiwidCI6IjViZmJjMGFlLTBhOWQtNDkyNy1iN2UwLTc4NDcyMWZjNjViMSJ9',
  },
  {
    title: 'Customer Churn Analysis',
    description: 'A telecom-focused dashboard designed to explore customer behavior and detect churn drivers.',
    icon: <FaChartBar />,
    src: 'https://app.powerbi.com/view?r=eyJrIjoiNjI5ZDlmNmYtMTRkZi00N2ZjLTlhMTItZDhlODc5YWM0ZThkIiwidCI6IjViZmJjMGFlLTBhOWQtNDkyNy1iN2UwLTc4NDcyMWZjNjViMSJ9',
    tech: ['Power BI', 'DAX', 'Power Query'],
    details: 'Revealed churn-prone segments based on service usage, contract type, and demographics. Identified frequent support callers and monthly contract users as high-risk groups. Supported proactive retention strategies with actionable, visual insights.',
    link: 'https://app.powerbi.com/view?r=eyJrIjoiNjI5ZDlmNmYtMTRkZi00N2ZjLTlhMTItZDhlODc5YWM0ZThkIiwidCI6IjViZmJjMGFlLTBhOWQtNDkyNy1iN2UwLTc4NDcyMWZjNjViMSJ9',
  },
  {
    title: 'Statistical Process Control (SPC)',
    description: 'A SQL-based solution that uses control limits to monitor manufacturing process stability.',
    icon: <FaChartBar />,
    src: '/images/manufacturing.jpg',
    tech: ['SQL', 'Window functions'],
    details: 'Used rolling averages and standard deviation to dynamically calculate UCL and LCL. Flagged production anomalies for quality assurance teams in real time. Promoted consistent product quality and reduced false alarms in manufacturing lines.',
    link: 'https://github.com/Jmucheke/Data_Analysis_Projects/tree/main/evaluating_manufacturing_process',
  },
  {
    title: 'Fitness Activity Data Analyzer',
    description: 'A Python-based program to analyze and visualize fitness tracker data.',
    icon: <FaChartBar />,
    src: '/images/project5.png',
    tech: ['Python', 'Numpy', 'Pandas', 'Matplotlib'],
    details: 'Processed hourly step-count data to compute daily performance statistics. Categorized users based on activity levels (concerning, average, excellent). Generated insightful visualizations (bar, pie, bubble, line) to support personalized fitness feedback.',
    link: 'https://github.com/Jmucheke/Data_Analysis_Projects/tree/main/fitness_analysis',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      className="bg-surfaceLight dark:bg-surfaceDark text-textMainLight dark:text-textMainDark py-16 px-6"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 100, damping: 20 }}
              className="bg-white dark:bg-backgroundDark rounded-lg shadow-md p-6"
            >
              <div className="text-primaryLight dark:text-primaryDark text-3xl mb-4">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-textMutedLight dark:text-textMutedDark mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded bg-secondaryLight dark:bg-secondaryDark text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="aspect-video w-full overflow-hidden mb-4">
                {project.src.includes('/images') ? (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-auto max-h-64 object-cover rounded mb-4"
                  />
                ) : (
                  <div className="aspect-video w-full mb-4">
                    <iframe
                      title={project.title}
                      src={project.src}
                      allowFullScreen
                      className="w-full h-full rounded border-0"
                    />
                  </div>
                )}
              </div>
              <button
                onClick={() => openModal(project)}
                className="flex items-center gap-2 text-sm text-primaryLight dark:text-primaryDark hover:underline"
              >
                Learn More <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
