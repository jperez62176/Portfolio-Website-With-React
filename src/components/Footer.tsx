export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 mt-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Jose Perez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}