// src/components/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6">
      <p className="text-gray-600 dark:text-gray-400">
        &copy; {currentYear} Gabriel Nomo. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
