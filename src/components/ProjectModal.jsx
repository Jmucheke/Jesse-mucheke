import React from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-surfaceDark text-textMainLight dark:text-textMainDark rounded-lg p-6 max-w-xl w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium rounded bg-secondaryLight dark:bg-secondaryDark text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.details && (
          <div className="mb-4 text-sm text-textMutedLight dark:text-textMutedDark">
            <h4 className="font-semibold mb-2">Details:</h4>
            <p>{project.details}</p>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-primaryLight dark:text-primaryDark hover:underline"
          >
            View Case Study
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
