export const StickFooter: React.FC = () => {
  return (
    <div className="bottom-0 w-full max-h-[88px] bg-[#0a0a0a] flex justify-center items-center mt-6">
      <div className="relative overflow-hidden p-4 w-full h-full flex items-center justify-center text-gray-400 text-sm">
        <span>© {new Date().getFullYear()} Desenvolvido por Matheus de Paula</span>
        <div className="flex flex-row space-x-6 sm:space-x-12 md:space-x-16 text-sm sm:text-lg">
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Github
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            X (Twitter)
          </a> */}
        </div>
      </div>
    </div>
  );
};
