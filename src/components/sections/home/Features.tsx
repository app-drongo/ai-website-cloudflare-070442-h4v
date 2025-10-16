'use client';

/**
 * @editableContentMap
 * {
 *   "text-0": "badge",
 *   "text-1": "mainTitle",
 *   "text-2": "mainTitleHighlight",
 *   "text-3": "mainDescription",
 *   "text-4": "feature1Title",
 *   "text-5": "feature1Description",
 *   "text-6": "feature1Badge",
 *   "text-7": "feature2Title",
 *   "text-8": "feature2Description",
 *   "text-9": "feature2Badge",
 *   "text-10": "feature3Title",
 *   "text-11": "feature3Description",
 *   "text-12": "feature3Badge",
 *   "text-13": "feature4Title",
 *   "text-14": "feature4Description",
 *   "text-15": "feature4Badge",
 *   "text-16": "feature5Title",
 *   "text-17": "feature5Description",
 *   "text-18": "feature5Badge",
 *   "text-19": "feature6Title",
 *   "text-20": "feature6Description",
 *   "text-21": "feature6Badge",
 *   "text-22": "feature7Title",
 *   "text-23": "feature7Description",
 *   "text-24": "feature7Badge",
 *   "text-25": "feature8Title",
 *   "text-26": "feature8Description",
 *   "text-27": "feature8Badge",
 *   "text-28": "feature9Title",
 *   "text-29": "feature9Description",
 *   "text-30": "feature9Badge",
 *   "text-31": "ctaQuestion",
 *   "text-32": "primaryCTA",
 *   "link-0": "primaryCTAHref",
 *   "text-33": "secondaryCTA",
 *   "link-1": "secondaryCTAHref"
 * }
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Shield, Globe2, BarChart3, Server, Lock, Gauge, Users, Cpu } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface FeaturesProps {
  badge?: string;
  mainTitle?: string;
  mainTitleHighlight?: string;
  mainDescription?: string;
  feature1Title?: string;
  feature1Description?: string;
  feature1Badge?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature2Badge?: string;
  feature3Title?: string;
  feature3Description?: string;
  feature3Badge?: string;
  feature4Title?: string;
  feature4Description?: string;
  feature4Badge?: string;
  feature5Title?: string;
  feature5Description?: string;
  feature5Badge?: string;
  feature6Title?: string;
  feature6Description?: string;
  feature6Badge?: string;
  feature7Title?: string;
  feature7Description?: string;
  feature7Badge?: string;
  feature8Title?: string;
  feature8Description?: string;
  feature8Badge?: string;
  feature9Title?: string;
  feature9Description?: string;
  feature9Badge?: string;
  ctaQuestion?: string;
  primaryCTA?: string;
  primaryCTAHref?: string;
  secondaryCTA?: string;
  secondaryCTAHref?: string;
}

export default function Features({
  badge = 'Platform Features',
  mainTitle = 'The Complete Cloud',
  mainTitleHighlight = 'Infrastructure Solution',
  mainDescription = 'Everything you need to build, deploy, and scale applications with enterprise-grade security, performance, and reliability.',
  feature1Title = 'Lightning Performance',
  feature1Description = 'Sub-100ms response times globally with our edge network spanning 300+ cities worldwide.',
  feature1Badge = 'Speed',
  feature2Title = 'Zero Trust Security',
  feature2Description = 'Enterprise-grade protection with DDoS mitigation, WAF, and SSL/TLS encryption by default.',
  feature2Badge = 'Security',
  feature3Title = 'Global Edge Network',
  feature3Description = 'Deploy instantly to our worldwide network for optimal performance and availability.',
  feature3Badge = 'Network',
  feature4Title = 'Real-time Analytics',
  feature4Description = 'Comprehensive insights with traffic analytics, performance metrics, and security reports.',
  feature4Badge = 'Analytics',
  feature5Title = 'Serverless Computing',
  feature5Description = 'Run code at the edge with Workers - no servers to manage, infinite scalability.',
  feature5Badge = 'Serverless',
  feature6Title = 'Advanced DDoS Protection',
  feature6Description = 'Automatic mitigation of attacks up to 100+ Tbps with machine learning detection.',
  feature6Badge = 'Protection',
  feature7Title = '99.99% Uptime SLA',
  feature7Description = 'Industry-leading reliability with redundant infrastructure and automatic failover.',
  feature7Badge = 'Reliability',
  feature8Title = 'Developer Experience',
  feature8Description = 'Intuitive dashboard, comprehensive APIs, and extensive documentation for rapid deployment.',
  feature8Badge = 'DevEx',
  feature9Title = 'Auto-scaling',
  feature9Description = 'Seamlessly handle traffic spikes from zero to millions of requests without configuration.',
  feature9Badge = 'Scale',
  ctaQuestion = 'Ready to supercharge your infrastructure?',
  primaryCTA = 'Start Free Trial',
  primaryCTAHref = '/temp',
  secondaryCTA = 'View Documentation',
  secondaryCTAHref = '/temp',
}: FeaturesProps) {
  const router = useRouter();

  const handlePrimaryAction = () => {
    if (primaryCTAHref.startsWith('http://') || primaryCTAHref.startsWith('https://')) {
      window.open(primaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(primaryCTAHref);
    }
  };

  const handleSecondaryAction = () => {
    if (secondaryCTAHref.startsWith('http://') || secondaryCTAHref.startsWith('https://')) {
      window.open(secondaryCTAHref, '_blank', 'noopener,noreferrer');
    } else {
      router.push(secondaryCTAHref);
    }
  };

  const features = [
    {
      icon: Zap,
      title: feature1Title,
      description: feature1Description,
      badge: feature1Badge,
    },
    {
      icon: Shield,
      title: feature2Title,
      description: feature2Description,
      badge: feature2Badge,
    },
    {
      icon: Globe2,
      title: feature3Title,
      description: feature3Description,
      badge: feature3Badge,
    },
    {
      icon: BarChart3,
      title: feature4Title,
      description: feature4Description,
      badge: feature4Badge,
    },
    {
      icon: Server,
      title: feature5Title,
      description: feature5Description,
      badge: feature5Badge,
    },
    {
      icon: Lock,
      title: feature6Title,
      description: feature6Description,
      badge: feature6Badge,
    },
    {
      icon: Gauge,
      title: feature7Title,
      description: feature7Description,
      badge: feature7Badge,
    },
    {
      icon: Users,
      title: feature8Title,
      description: feature8Description,
      badge: feature8Badge,
    },
    {
      icon: Cpu,
      title: feature9Title,
      description: feature9Description,
      badge: feature9Badge,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{mainDescription}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const titleProp = `feature${index + 1}Title`;
            const descProp = `feature${index + 1}Description`;
            const badgeProp = `feature${index + 1}Badge`;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <span data-editable={badgeProp}>{feature.badge}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={titleProp}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={descProp}>{feature.description}</span>
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3"
              onClick={handlePrimaryAction}
              data-editable-href="primaryCTAHref"
              data-href={primaryCTAHref}
            >
              <span data-editable="primaryCTA">{primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3"
              onClick={handleSecondaryAction}
              data-editable-href="secondaryCTAHref"
              data-href={secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{secondaryCTA}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
