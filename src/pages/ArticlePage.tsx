import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { articles } from "@/data/articles";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-28 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/industry-news" className="text-primary hover:underline">
          ← Back to Industry News
        </Link>
      </div>
    );
  }

  // Simple markdown-like rendering for ## headings and **bold**
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return (
          <h2 key={i} className="text-xl font-bold mt-8 mb-3">
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={i} className="font-semibold mt-4 mb-1">
            {line.replace(/\*\*/g, "")}
          </p>
        );
      }
      if (line.match(/^\d+\./)) {
        return (
          <p key={i} className="text-muted-foreground leading-relaxed ml-4">
            {line}
          </p>
        );
      }
      if (line.startsWith("- ")) {
        return (
          <p key={i} className="text-muted-foreground leading-relaxed ml-4">
            • {line.replace("- ", "")}
          </p>
        );
      }
      if (line.trim() === "") return <br key={i} />;
      return (
        <p key={i} className="text-muted-foreground leading-relaxed">
          {line.replace(/\*\*(.*?)\*\*/g, "$1")}
        </p>
      );
    });
  };

  return (
    <div className="bg-card min-h-screen">
      <div className="bg-gradient-hero pt-28 pb-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            to="/industry-news"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Industry News
          </Link>
          <span className="inline-block text-xs font-semibold text-sky-light bg-sky/10 border border-sky/20 rounded-full px-3 py-1 mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground leading-tight mb-5">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-3xl py-12">
        <div className="bg-background border border-border rounded-2xl p-8 md:p-12">
          {renderContent(article.content)}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-primary rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-primary-foreground mb-3">
            Want a Free Revenue Audit?
          </h3>
          <p className="text-primary-foreground/80 text-sm mb-5">
            Discover how Smart Billing can optimize your revenue cycle.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary-foreground/30 transition-colors"
          >
            Schedule Your Audit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
