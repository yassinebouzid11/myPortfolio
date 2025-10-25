export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yassine Bouzid. All rights reserved.
      </div>
    </footer>
  ) 
}
