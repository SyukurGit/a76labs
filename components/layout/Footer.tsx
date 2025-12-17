export function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg">A76LABS</h3>
          <p className="text-xs text-gray-500 mt-1">Building practical digital products.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-500">
            <span>© {new Date().getFullYear()} A76LABS</span>
        </div>
      </div>
    </footer>
  );
}