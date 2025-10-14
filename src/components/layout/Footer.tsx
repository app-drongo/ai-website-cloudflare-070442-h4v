'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "logoText",
 *   "text-1": "companyDescription",
 *   "text-2": "contactEmail",
 *   "text-3": "contactPhone",
 *   "text-4": "contactAddress",
 *   "text-5": "newsletterTitle",
 *   "text-6": "newsletterDisclaimer",
 *   "text-7": "section1Title",
 *   "text-8": "section2Title",
 *   "text-9": "section3Title",
 *   "text-10": "section4Title",
 *   "text-11": "copyrightText",
 *   "text-12": "madeWithText",
 *   "text-13": "socialText",
 *   "link-0": "social1Href",
 *   "link-1": "social2Href",
 *   "link-2": "social3Href",
 *   "link-3": "social4Href",
 *   "link-4": "social5Href"
 * }
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

interface FooterProps {
  logoText?: string;
  companyDescription?: string;
  contactEmail?: string;
  contactPhone?: string;
  contactAddress?: string;
  newsletterTitle?: string;
  newsletterDisclaimer?: string;
  section1Title?: string;
  section2Title?: string;
  section3Title?: string;
  section4Title?: string;
  copyrightText?: string;
  madeWithText?: string;
  socialText?: string;
  social1Href?: string;
  social2Href?: string;
  social3Href?: string;
  social4Href?: string;
  social5Href?: string;
}

export default function Footer({
  logoText = 'Cloudflare',
  companyDescription = 'Powering the global internet infrastructure with edge computing, security, and performance solutions. Trusted by millions of websites and applications worldwide.',
  contactEmail = 'support@cloudflare.com',
  contactPhone = '+1 (888) 274-7638',
  contactAddress = '101 Townsend St, San Francisco, CA',
  newsletterTitle = 'Developer Updates',
  newsletterDisclaimer = 'Get the latest product updates and developer resources. Unsubscribe anytime.',
  section1Title = 'Products',
  section2Title = 'Developers',
  section3Title = 'Support',
  section4Title = 'Company',
  copyrightText = '© 2024 Cloudflare, Inc. All rights reserved.',
  madeWithText = 'with ❤️ by Cloudflare',
  socialText = 'Connect with us:',
  social1Href = 'https://twitter.com/cloudflare',
  social2Href = 'https://facebook.com/cloudflare',
  social3Href = 'https://instagram.com/cloudflare',
  social4Href = 'https://linkedin.com/company/cloudflare',
  social5Href = 'https://github.com/cloudflare',
}: FooterProps) {
  const footerSections = [
    {
      title: section1Title,
      links: [
        { name: 'CDN', href: '/cdn' },
        { name: 'DNS', href: '/dns' },
        { name: 'DDoS Protection', href: '/ddos' },
        { name: 'Web Application Firewall', href: '/waf' },
        { name: 'Workers', href: '/workers' },
        { name: 'Zero Trust', href: '/zero-trust' },
      ],
    },
    {
      title: section2Title,
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'API Reference', href: '/api' },
        { name: 'Workers Playground', href: '/playground' },
        { name: 'Community', href: '/community' },
        { name: 'GitHub', href: 'https://github.com/cloudflare' },
        { name: 'Discord', href: '/discord' },
      ],
    },
    {
      title: section3Title,
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'System Status', href: '/status' },
        { name: 'Network Map', href: '/network' },
        { name: 'Learning Center', href: '/learning' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'Contact Support', href: '/support' },
      ],
    },
    {
      title: section4Title,
      links: [
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press', href: '/press' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: social1Href },
    { name: 'Facebook', icon: Facebook, href: social2Href },
    { name: 'Instagram', icon: Instagram, href: social3Href },
    { name: 'LinkedIn', icon: Linkedin, href: social4Href },
    { name: 'GitHub', icon: Github, href: social5Href },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">{logoText.charAt(0)}</span>
                </div>
                <span className="font-bold text-xl" data-editable-id="text-0">
                  {logoText}
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                <span data-editable-id="text-1">{companyDescription}</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-2">
                  {contactEmail}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-3">
                  {contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground" data-editable-id="text-4">
                  {contactAddress}
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm" data-editable-id="text-5">
                {newsletterTitle}
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                <span data-editable-id="text-6">{newsletterDisclaimer}</span>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => {
              const titleId = `text-${7 + index}`;
              return (
                <div key={index} className="space-y-4">
                  <h4 className="font-semibold text-sm" data-editable-id={titleId}>
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span data-editable-id="text-11">{copyrightText}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-red-500 fill-current" />
                <span data-editable-id="text-12">{madeWithText}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2" data-editable-id="text-13">
                {socialText}
              </span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const linkId = `link-${index}`;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    data-editable-id={linkId}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Settings
            </Link>
            <Link
              href="/support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
