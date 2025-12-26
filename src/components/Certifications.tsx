import { useEffect, useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { supabase, type Certification } from '../lib/supabase';

const defaultCertifications = [
  {
    id: '1',
    title: 'Oracle Certified Professional, Java SE Developer',
    issuer: 'Oracle',
    issue_date: '2020-06-15',
    expiry_date: null,
    credential_id: 'OCP-12345',
    credential_url: 'https://catalog.oracle.com/verify',
    image_url: 'https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=400',
    order_index: 1,
    created_at: '',
  },
  {
    id: '2',
    title: 'Spring Professional Certification',
    issuer: 'VMware/Pivotal',
    issue_date: '2021-03-20',
    expiry_date: null,
    credential_id: 'SPRING-67890',
    credential_url: 'https://spring.io/certifications',
    image_url: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400',
    order_index: 2,
    created_at: '',
  },
  {
    id: '3',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issue_date: '2022-01-10',
    expiry_date: '2025-01-10',
    credential_id: 'AWS-SAA-54321',
    credential_url: 'https://aws.amazon.com/certification',
    image_url: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=400',
    order_index: 3,
    created_at: '',
  },
  {
    id: '4',
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB Inc.',
    issue_date: '2021-09-05',
    expiry_date: null,
    credential_id: 'MONGO-98765',
    credential_url: 'https://university.mongodb.com/certification',
    image_url: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=400',
    order_index: 4,
    created_at: '',
  },
  {
    id: '5',
    title: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    issue_date: '2022-08-15',
    expiry_date: '2025-08-15',
    credential_id: 'CKA-13579',
    credential_url: 'https://www.cncf.io/certification/cka/',
    image_url: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
    order_index: 5,
    created_at: '',
  },
  {
    id: '6',
    title: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    issue_date: '2019-11-20',
    expiry_date: null,
    credential_id: 'PSM-24680',
    credential_url: 'https://www.scrum.org/certificates',
    image_url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    order_index: 6,
    created_at: '',
  },
];

export default function Certifications() {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    const { data, error } = await supabase
      .from('certifications')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      console.error('Error fetching certifications:', error);
      setCertifications(defaultCertifications);
    } else if (data && data.length > 0) {
      setCertifications(data);
    } else {
      setCertifications(defaultCertifications);
    }
    setLoading(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };

  const isExpired = (expiryDate: string | null) => {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  };

  if (loading) {
    return (
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-80 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

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
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                <img
                  src={cert.image_url}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white opacity-90" />
                </div>
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
                  {cert.expiry_date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className={isExpired(cert.expiry_date) ? 'text-red-600' : ''}>
                        Expires: {formatDate(cert.expiry_date)}
                      </span>
                    </div>
                  )}
                  {!cert.expiry_date && (
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-medium">No Expiration</span>
                    </div>
                  )}
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
