import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display font-700 text-base text-text-primary">
            MB<span className="text-accent">.</span>
          </span>
          <span className="text-text-muted text-sm">
            © {new Date().getFullYear()} Mahima Bastola
          </span>
        </div>

        <p className="font-mono text-xs text-text-muted text-center">
          From Data to Decisions
        </p>

        <div className="flex items-center gap-4">
          {[
            { href: 'mailto:mahimabastola4@gmail.com', icon: Mail },
            { href: 'https://github.com/mahima-122', icon: Github },
            { href: 'https://www.linkedin.com/in/mahimabastola1/', icon: Linkedin },
          ].map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
