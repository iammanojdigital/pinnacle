export default function FooterPPC() {
  return (
    <footer className="border-t-4 border-blue-500 bg-black py-10 text-center text-sm text-gray-400">
      
      <p className="mb-4">
        © {new Date().getFullYear()} Pinnacle Design Solutions & Manufacturing. All rights reserved.
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="/privacy-policy"
          className="transition hover:text-white"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-and-conditions"
          className="transition hover:text-white"
        >
          Terms & Conditions
        </a>
      </div>

    </footer>
  );
}
