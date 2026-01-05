import { ExternalLink, Calendar } from 'lucide-react';

type Certification = {
  id: string;
  title: string;
  issuer: string;
  issue_date: string;
  expiry_date: string | null;
  credential_id: string;
  credential_url: string;
  image_url: string;
  order_index: number;
  created_at: string;
};

const certifications: Certification[] = [
  {
    id: '1',
    title: 'Oracle Certified Professional, Java SE 6 Programmer',
    issuer: 'Oracle',
    issue_date: '2018-04-09',
    expiry_date: null,
    credential_id: '1Z0-851',
    credential_url: 'https://www.youracclaim.com/badges/90c5100b-d459-4875-8240-fa5c1f243bc2',
    image_url: '/certificates/ORACLE.png',
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    title: 'Certificate for Best Performance in Java Programming',
    issuer: 'IDB-BISEW',
    issue_date: '2018-04-22',
    expiry_date: null,
    credential_id: '#1209231',
    credential_url: '',
    image_url: '/certificates/IDB1.png',
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    title: 'Enterprise System Analysis & Design With J2EE',
    issuer: 'IDB-BISEW',
    issue_date: '2018-04-09',
    expiry_date: null,
    credential_id: '#1209231',
    credential_url: '',
    image_url: '/certificates/IDB2.png',
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    title: 'Enterprise System Analysis & Design With J2EE',
    issuer: 'DIIT (Daffodil Institute of IT).',
    issue_date: '2017-10-04',
    expiry_date: null,
    credential_id: '1000835',
    credential_url: '',
    image_url: '/certificates/DIIT.png',
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    title: 'Web Application Development With PHP & MySQL',
    issuer: 'BASIS (BITM)',
    issue_date: '2016-08-25',
    expiry_date: null,
    credential_id: '128052',
    credential_url: '',
    image_url: '/certificates/BITM.png',
    order_index: 5,
    created_at: '',
  },
  
];

export default function Certifications() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image_url}
                  alt={cert.title}
                  className="w-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{cert.issuer}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Issued: {formatDate(cert.issue_date)}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mb-4 font-mono">
                  ID: {cert.credential_id}
                </div>

                {cert.credential_url && (
                  <a
                    href={cert.credential_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
