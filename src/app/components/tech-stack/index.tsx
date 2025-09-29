export const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 p-2 text-sm leading-relaxed shadow-sm dark:bg-zinc-900 dark:text-zinc-100">
      <div>
        <h3 className="font-semibold text-base mb-2 text-white">Frontend</h3>
        <p>
          React JS (5 anos) • TypeScript (4 anos) • Next.js (3 anos) • Material
          UI (2 anos)
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-base mb-2 text-white">Backend</h3>
        <p>
          Node.js (5 anos) • Python (4 anos) • Flask (2 anos) • APIs RESTful (5
          anos) • PostgreSQL (2 anos)
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-base mb-2 text-white">
          Cloud & DevOps
        </h3>
        <p>
          AWS (Lambda, API Gateway, SQS, SNS, S3) • Docker • CI/CD • Git •
          Terraform
        </p>
      </div>
    </div>
  );
};
