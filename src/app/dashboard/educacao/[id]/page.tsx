import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  FileText,
  CheckCircle,
  Clock,
  Share2,
} from 'lucide-react';
import { educationalContents } from '@/lib/educational-content';
import BackButton from './back-button';

export function generateStaticParams() {
  return Object.keys(educationalContents).map((id) => ({ id }));
}

const categoryColors: Record<string, string> = {
  prep: 'bg-teal-100 text-teal-700',
  ist: 'bg-red-100 text-red-700',
  vacinas: 'bg-violet-100 text-violet-700',
  prevencao: 'bg-blue-100 text-blue-700',
};

const categoryLabels: Record<string, string> = {
  prep: 'PrEP',
  ist: 'ISTs',
  vacinas: 'Vacinas',
  prevencao: 'Prevenção',
};

export default function EducacaoDetailPage({ params }: { params: { id: string } }) {
  const content = educationalContents[params.id];

  if (!content) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      <BackButton />

      {/* Article header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[content.category]}`}>
            {categoryLabels[content.category]}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock size={14} />
            {content.readTime} de leitura
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
      </div>

      {/* Highlights */}
      {content.highlights && (
        <div className="bg-teal-50 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-teal-800 mb-3">Pontos importantes</h3>
          <ul className="space-y-2">
            {content.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-teal-900">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article content */}
      <div className="prose prose-lg max-w-none">
        {content.content.map((paragraph, index) => {
          // Headers
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }

          // List items
          if (paragraph.startsWith('- ')) {
            return (
              <div key={index} className="flex items-start gap-2 ml-4 my-1">
                <span className="text-teal-500 mt-1">•</span>
                <span
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace('- ', '')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>'),
                  }}
                />
              </div>
            );
          }

          // Tables
          if (paragraph.startsWith('|')) {
            if (index > 0 && content.content[index - 1].startsWith('|')) {
              return null;
            }

            const lines = content.content.slice(index).filter((p) => p.startsWith('|'));
            const headers = lines[0]?.split('|').filter((c) => c.trim());
            const rows = lines.slice(2).map((row) => row.split('|').filter((c) => c.trim()));

            return (
              <div key={index} className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      {headers?.map((header, i) => (
                        <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                          {header.trim()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700">
                            {cell.trim()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          // Regular paragraphs
          return (
            <p
              key={index}
              className="text-gray-700 my-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>'),
              }}
            />
          );
        })}
      </div>

      {/* Sources */}
      {content.sources && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Fontes</h3>
          <ul className="space-y-2">
            {content.sources.map((source, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <FileText className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                {source}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Share and actions */}
      <div className="mt-8 flex items-center justify-between py-6 border-t border-gray-200">
        <Link
          href="/dashboard/educacao"
          className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Ver mais conteúdos
        </Link>
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <Share2 size={18} />
          Compartilhar
        </button>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Tem dúvidas?</h3>
        <p className="text-teal-100 mb-6">
          Agende uma consulta e converse com o Dr. Ricardo sobre prevenção personalizada.
        </p>
        <Link
          href="/agendar"
          className="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold py-3 px-6 rounded-full hover:bg-teal-50 transition-colors"
        >
          Agendar consulta
        </Link>
      </div>
    </div>
  );
}
